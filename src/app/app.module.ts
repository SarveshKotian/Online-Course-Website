import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DeleteComponent } from './delete/delete.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { LibraryComponent } from './library/library.component';
import { SessionpageComponent } from './sessionpage/sessionpage.component';

@NgModule({
  declarations: [
    AppComponent,
    StudListComponent,
    HomepageComponent,
    FirstpageComponent,
    RegisterComponent,
    LoginComponent,
    AccountpageComponent,
    ScheduleComponent,
    DeleteComponent,
    BookpageComponent,
    LibraryComponent,
    SessionpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
