import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {LoginComponent} from "./form-login/login/login.component";
import {ChangeAvatarComponent} from "./form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./content/category/list-category/list-category.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'category', component: ListCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
