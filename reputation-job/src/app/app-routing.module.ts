import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {Content} from "@angular/compiler/src/render3/r3_ast";
import {ContentComponent} from "./component/content/content.component";
import {CvComponent} from "./component/cv/cv.component";
import {DetailCvComponent} from "./component/detail-cv/detail-cv.component";
import {CartComponent} from "./component/cart/cart.component";


const routes: Routes = [
  {path: "",component: ContentComponent},
  {path: "login",component : LoginComponent},
  {path: "cv",component : CvComponent},
  {path: "detailCv",component : DetailCvComponent},
  {path: "cart",component : CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
