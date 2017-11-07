import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  public constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authservice.emailLogin(this.email,this.password);
  }

}
