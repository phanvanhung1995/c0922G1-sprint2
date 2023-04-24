import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {LoginComponent} from "./component/login/login.component";
import { FooterComponent } from './component/footer/footer.component';

import { CvComponent } from './component/cv/cv.component';
import { DetailCvComponent } from './component/detail-cv/detail-cv.component';
import { CartComponent } from './component/cart/cart.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    FooterComponent,

    CvComponent,
    DetailCvComponent,
    CartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
