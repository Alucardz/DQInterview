import { Api } from './api';
import { JobTitle } from './../models/jobTitle';
import { Injectable } from '@angular/core';

@Injectable()
export class jobTitlesProvider {

    private endPoint: string = 'BambooHR';
    private jobTitles: JobTitle[] = [];

    constructor(public api: Api) {
        
    }

    query(params?: any): Promise<JobTitle[]> {
        return new Promise(resolve => {
            this.api.get('/' + this.endPoint + '/JobTitles', params)
                .map(res => res.json())
                .subscribe(data => {
                    this.jobTitles = data;
                    resolve(this.jobTitles);
                });
        });
    }
}