import { Question } from './../models/question';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';

import { Api } from './api';


/*
  Generated class for the Questions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuestionsProvider {
  questions: Question[] = [];


  constructor(public http: Http, public api: Api) {

  }

  query(params?: any): Promise<Question[]> {
    if (this.questions.length > 0) {
      // already loaded data
      return Promise.resolve(this.questions);
    }

    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.api.get('questions', params)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.questions = data;
          resolve(this.questions);
        });
    });

  }

  UpdateQuestion(q: Question) {
    return this.api.put('/questions/' + q.Id, q)
        .map(res => res.json())
        .catch(error => Observable.throw(error));
  }

  addQuestion(q: Question) {
    return this.api.post('/questions', q)
        .map(this.extractData)
        .catch(error => Observable.throw(error));
    
  }

  delete(q: Question) {
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || body;
  }
}
