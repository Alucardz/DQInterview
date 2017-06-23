import { BehaviorSubject } from 'rxjs/Rx';
import { Interview } from './../models/interview';
import { Question } from './../models/question';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Api } from './api';

@Injectable()
export class InterviewService {
    interview: Interview;
    questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
    private endPoint: string = 'Interviews';

    questions$ = this.questions.asObservable();

    constructor(public http: Http, public api: Api) {
        this.questions.next([new Question({
            QuestionText: "123",
            badAnswer: "b 123 123",
            neutralAnswer: "n 123 123",
            goodAnswer: "g 123 123",
            excellentAnswer: "e 123 123"
        }),
        new Question({
            QuestionText: "222",
            badAnswer: "b 22222",
            neutralAnswer: "n 2222",
            goodAnswer: "g 2222",
            excellentAnswer: "e 2222"
        }),
        new Question({
            QuestionText: "123",
            badAnswer: "b 3333",
            neutralAnswer: "n 3333",
            goodAnswer: "g 33333",
            excellentAnswer: "e 33333"
        })]);
    }

    query(params?: any): Promise<Interview> {

        return new Promise(resolve => {
            this.api.get('/' + this.endPoint, params)
                .map(res => res.json())
                .subscribe(data => {
                    this.interview = data;
                    resolve(this.interview);
                });
        });
    }

    // GetQuestions2(jobOpeningId: number): Observable<Question[]> {
    //     return this.api.get(this.endPoint + '/Questions/' + jobOpeningId)
    //             .map(res =>  { <Question[]>res.json())
    //             .subscribe(data => {
    //                 data.forEach(e => this.questions.push(new Question(e)));
    //             }, error => {
    //                 Observable.throw(error)
    //             });
    // }

    GetQuestions(jobOpeningId: number): Observable<Question[]> {
        return this.api.get(this.endPoint + '/Questions/' + jobOpeningId)
            .map(res => <Question[]>res.json())
            .do(data => {
                data = data.map(q => new Question(q))
                this.questions.next(data);
            })
            .publishLast().refCount();
    }

    UpdateInterview(i: Interview) {
        return this.api.put('/' + this.endPoint + '/' + i.Id, i)
            .map(res => res.json())
            .catch(error => Observable.throw(error));
    }

    SaveInterview(i: Interview) {
        return this.api.post('/' + this.endPoint, i)
            .map(this.extractData)
            .catch(error => Observable.throw(error));

    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || body;
    }
}
