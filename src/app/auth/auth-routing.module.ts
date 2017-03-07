import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }    from './sign-in/sign-in.component';
import { SignUpComponent }  from './sign-up/sign-up.component';
import {AuthComponent} from "./auth.component";

export const authRoutes: Routes = [
        { path: '', component: AuthComponent, children: [
        { path: 'sign-in',  component: SignInComponent },
        { path: 'sign-up', component: SignUpComponent },
        { path: '', redirectTo: 'sign-up', pathMatch: 'full' }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }