import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getToken() {
    if (!localStorage.getItem('currentToken') || localStorage.getItem('currentToken') === '') {
      this.router.navigate(['']);
    }
  }
  constructor(private  router: Router) { this.getToken(); }
  ngOnInit() {}
}
