import { Interview } from './../models/interview';
import { Question } from './../models/question';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Api } from './api';

@Injectable()
export class InterviewsProvider {
    interview: Interview;
    questions: Question[] = [];
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
