import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginFormComponent} from './login/login.component'
import{LoginService} from './service/login.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [LoginFormComponent],
  providers: [ LoginFormComponent, { provide: HTTP_INTERCEPTORS, useClass: LoginService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
