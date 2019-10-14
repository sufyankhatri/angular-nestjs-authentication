import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterMasterComponent } from './login-register-master/login-register-master.component';
@NgModule({
  declarations: [AppComponent, LoginRegisterMasterComponent],
  imports: [AlertModule.forRoot(), BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
