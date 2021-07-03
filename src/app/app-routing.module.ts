import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudListComponent} from './stud-list/stud-list.component';
import{FirstpageComponent} from './firstpage/firstpage.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AccountpageComponent} from './accountpage/accountpage.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {DeleteComponent} from './delete/delete.component';
import {BookpageComponent} from './bookpage/bookpage.component';
import {LibraryComponent} from './library/library.component';
import {SessionpageComponent} from './sessionpage/sessionpage.component';


const routes: Routes = [
  {path:"",redirectTo:"/first",pathMatch:"full"},
  {path:"first",component:FirstpageComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomepageComponent},
  {path:"account",component:AccountpageComponent},
  {path:"schedule",component:ScheduleComponent},
  {path:"delete",component:DeleteComponent},
  {path:"books",component:BookpageComponent},
  {path:"lib",component:LibraryComponent},
  {path:"session",component:SessionpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
