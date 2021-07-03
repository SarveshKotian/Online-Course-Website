import { Component, OnInit } from '@angular/core';
import {StudServiceService} from '../stud-service.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {Student} from '../Student';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  studList:Student[];
  emailid:string;
  password:string;
  constructor(private service:StudServiceService,private route:Router) { }

  ngOnInit(): void {
    //this.studList=this.service.getStudents();
    this.service.getStudents().subscribe((data)=>this.studList=data);
    if(sessionStorage.getItem("id")!=null)
    {
      this.route.navigate(["/home"]);
    }
  }

  userLogin()
  {
    
    let stud = this.studList.filter(u=>u.emailid==this.emailid&&u.password==this.password)[0];
    if(stud!=null)
    {
      sessionStorage.setItem("id",stud.id.toString());
      sessionStorage.setItem("name",stud.name.toString());
      sessionStorage.setItem("mobile",stud.mobile.toString());
      sessionStorage.setItem("dob",stud.dob.toString());
      sessionStorage.setItem("emailid",stud.emailid.toString());
      sessionStorage.setItem("password",stud.password.toString());
      sessionStorage.setItem("course",stud.course.toString());
      sessionStorage.setItem("fee",stud.fee.toString());
      sessionStorage.setItem("dos",stud.dos.toString())
      sessionStorage.setItem("time",stud.time.toString())
      this.route.navigate(['/home']);
      location.reload();
    }
    else
    {
      alert("Login failed! Incorrect Credetials");
    }
  }

}
