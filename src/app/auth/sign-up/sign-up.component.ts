import { Component }      from '@angular/core';
//import { Router } from '@angular/router';

import { User } from "../../core/models/user";
import { UserService } from '../../core/services/user.service';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
})
export class SignUpComponent {

    constructor(
      public userService: UserService
      /*private router: Router*/
    ) {
        
    }

    //ngOnInit(){
    //    this.submitted;
    //    debugger;
    //}

    user: User = new User();
    submitted: boolean = false;
    
    onSubmit() {
        this.submitted = true;
        this.userService.signUp(this.user).subscribe((res) => {
            debugger;
            
        });

    }
}