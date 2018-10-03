import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  getToken() {
    if (!localStorage.getItem('currentToken') || localStorage.getItem('currentToken') === '') {
      this.router.navigate(['']);
    }
  }
  constructor(private router: Router) {  this.getToken(); }

  ngOnInit() {
  }

}
