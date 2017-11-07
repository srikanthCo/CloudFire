import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  confirmpassword: string;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  signUp(){
    console.log("email",this.email,"password",this.password,"confirmpassword",this.confirmpassword);
    this.authservice.emailSignUp(this.email,this.password);
  }

}
