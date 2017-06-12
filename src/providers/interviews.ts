import { Interview } from './../models/interview';
import { Question } from './../models/question';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Api } from './api';

@Injectable()
export class InterviewsProvider {
    interview: Interview;
    questions: Question[] = [new Question({
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
    })];
    private endPoint: string = 'Interviews';

    constructor(public http: Http, public api: Api) {

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

    GetQuestions(jobOpeningId: number): Promise<Question[]> {
        // if (this.questions.length > 0) {
        //     return new Promise(resolve => resolve(this.questions))
        // }   
        return new Promise(resolve => {
            this.api.get(this.endPoint + '/Questions/' + jobOpeningId)
                .map(res => <Question[]>res.json())
                .subscribe(data => {
                    data.forEach(e => this.questions.push(new Question(e)));
                    resolve(this.questions);
                });
        });
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
