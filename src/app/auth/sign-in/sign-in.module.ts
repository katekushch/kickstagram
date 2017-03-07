import { NgModule }            from '@angular/core';

import { SignInComponent }       from './sign-in.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [SignInComponent],
    exports: [SignInComponent]
})
export class SignInModule { 
    
}