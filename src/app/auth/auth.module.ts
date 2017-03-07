import { NgModule }       from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpModule } from "./sign-up/sign-up.module";
import { SignInModule } from "./sign-in/sign-in.module";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    SignUpModule,
    SignInModule,
    SharedModule
  ],
  declarations: [
    AuthComponent
  ],
  //exports: [AuthComponent],
  //providers: [ HeroService ]
})
export class AuthModule {

}