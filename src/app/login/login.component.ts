import { Component, OnInit } from '@angular/core';
import {LoginInService} from '../services/loginIn/login-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private loginOn;
  name;
  getService;
  login = {
    email: '',
    senha: ''
  };
  constructor(service: LoginInService, private  router: Router) {
    this.name = service.getName();
    this.getService = service;
    this.loginOn = false;
  }
  postToken() {
        this.getService.postGetToken(this.login.email, this.login.senha ).subscribe(
          data => {
            console.log(data.access_token);
            localStorage.setItem('currentToken', JSON.stringify(data.access_token));
            this.router.navigate(['home']);
          },
          error => {
            this.loginOn = true
            console.log(error);
          }
        );
    }
    getLoginOn() {
        if (this.loginOn) {
          return true;
        } else {
          return false;
        }
    }
}
