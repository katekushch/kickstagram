import { Component, OnInit }      from '@angular/core';

import { User } from "../../core/models/user";

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {
    
    
    //private users;
    //private id: number;
    //
    //public user: Restangular;
    //public editable: boolean;
    //
    //constructor(private route: ActivatedRoute, private restangular: Restangular, private router: Router) {
    //    this.users = restangular.all("users");
    //}
    //
    //ngOnInit() {
    //    this.route.params.forEach((params: Params) => {
    //        this.id = params['id'];
    //        console.log(this.id)
    //    });
    //    this.restangular.one("userss", this.id).get().subscribe(res => {
    //        this.user = res;
    //    });
    //}
    //
    //deleteUser() {
    //    this.user.remove().subscribe(heroes => {
    //        this.router.navigate(["/sign-in"]);
    //    })
    //}
    //
    //editUser() {
    //    if (this.editable) {
    //        this.user.put();
    //        this.editable = false;
    //    }
    //    else {
    //        this.editable = true;}
    //}

    ////signInForm:FormGroup;
    //user: User = new User();
    //
    //submitted: boolean = false;
    //onSubmit() {
    //    this.submitted = true;
    //    console.log("submitted");
    //}

}