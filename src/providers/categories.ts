import { Api } from './api';
import { QuestionCategory } from './../models/questionCategory';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoriesProvider {
  categories: QuestionCategory[] = [];


  constructor(public http: Http, public api: Api) {
    console.log('Hello CategoriesProvider Provider');
  }

  query(params?: any): Promise<QuestionCategory[]> {
    if (this.categories.length > 0) {
      // already loaded data
      return Promise.resolve(this.categories);
    }

    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.api.get('/Categories', params)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.categories = data;
          resolve(this.categories);
        });
    });

  }


}
