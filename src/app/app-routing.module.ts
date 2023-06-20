import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {LoginComponent} from "./form-login/login/login.component";
import {ChangeAvatarComponent} from "./form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./content/category/list-category/list-category.component";
import {UpdateCategoryComponent} from "./content/category/update-category/update-category.component";
import {PageSongComponent} from "./content/song/page-song/page-song.component";
import {SongDetailComponent} from "./content/song/song-detail/song-detail.component";
import {PageSingerComponent} from "./content/singer/page-singer/page-singer.component";
import {CheckLoginGuard} from "./service/CheckLoginGuard";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent, canActivate:[CheckLoginGuard]},
  {path: 'login', component: LoginComponent, canActivate:[CheckLoginGuard]},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'category', component: ListCategoryComponent},
  // {path: 'update-category/:id', component: UpdateCategoryComponent},
  {path: 'page-song', component: PageSongComponent},
  {path: 'song/:id', component: SongDetailComponent},
  {path: 'page-singer', component: PageSingerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
