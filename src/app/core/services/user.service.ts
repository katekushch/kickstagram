import { Injectable } from '@angular/core';

import { Restangular } from 'ng2-restangular';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  constructor(
    private restangular: Restangular
  ) { }

  selfData$: Observable<any>;

  signUp(user) {
    this.selfData$ = this.restangular.all('clients').post(user);

    return this.selfData$.switchMap( (res) => {

      return this.restangular.one('clients', user.id).all('accessTokens').get();
    });
  }

}