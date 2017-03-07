import { NgModule }            from '@angular/core';
import { SharedModule } from '../../shared/shared.module';



import { SignUpComponent } from './sign-up.component';


@NgModule({
    imports: [
        SharedModule,
     
    ],
    declarations: [
        SignUpComponent
    ]
})
export class SignUpModule { }