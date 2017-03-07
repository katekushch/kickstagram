/* tslint:disable:member-ordering no-unused-variable */
import { NgModule }       from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { PageNotFoundComponent } from '../not-found-page/not-found.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
//import { AuthGuard } from './services/auth-guard.service';


//import { CommonModule }      from '@angular/common';

//import { TitleComponent }    from './title.component';
//import { UserService }       from './user.service';
//import { UserServiceConfig } from './user.service';

import { RestangularModule } from 'ng2-restangular';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://2muchcoffee.com:53000/api');
  //RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

@NgModule({
  imports:      [ RestangularModule.forRoot(RestangularConfigFactory) ],
  declarations: [ FeedComponent, PageNotFoundComponent ],
  //exports:      [ TitleComponent ],
  providers:    [ AuthService, UserService/*AuthGuard */]
})
export class CoreModule {

}