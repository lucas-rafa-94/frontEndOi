import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginInService} from './services/loginIn/login-in.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LoginPageComponent,
    UploadComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'home/upload', component: UploadComponent},
      { path: 'home/download', component: DownloadComponent}
    ])

  ],
  providers: [LoginInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
