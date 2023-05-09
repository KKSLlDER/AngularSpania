import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnsattComponent } from './ansatt/ansatt.component'
import {MatTabsModule} from '@angular/material/tabs';
import { EmployeepicsComponent } from './employeepics/employeepics.component';
import { Employeepics2Component } from './employeepics2/employeepics2.component';
import { VirksomhetComponent } from './virksomhet/virksomhet.component'
import {MatButtonModule} from '@angular/material/button';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AnsattComponent,
    EmployeepicsComponent,
    Employeepics2Component,
    VirksomhetComponent,
    CookieBannerComponent,
  ],


   
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
