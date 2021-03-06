import { BehaviorSubject } from 'rxjs/Rx';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class UserService {
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(new User({}));

  constructor(public http: Http, public api: Api) {
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) : Observable<User> {
    return this.api.post('Login/Login', accountInfo)
            .map(res => res.json())
            .do(user => console.log(user))
            .do(user => this._user.next(user))
            .publishLast().refCount();

    // seq
    //   // .map(res => {
    //   //   debugger;
    //   //   return res.json();
    //   // })
    //   .subscribe(res => {
    //     // If the API returned a successful response, mark the user as logged in
    //     if (res.ok) {
    //       this._loggedIn(res.json());
    //     } else {
    //     }
    //   }, err => {
    //     console.error('ERROR', err);
    //   });

    //return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        }
      }, err => {
        console.error('ERROR', err);
      });

    return seq;
  }

  
  
  public get User() : Observable<User> {
    return this._user.asObservable();
  }
  
  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user.next(null);
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user.next(new User({ DisplayName: resp.user.displayname, Email: resp.user.email }));
  }
}
