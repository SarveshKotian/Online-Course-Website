import { Component, OnInit } from '@angular/core';
import {StudServiceService} from '../stud-service.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {Student} from '../Student';


@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  stud:Student;
  id;name;mobile;dob;emailid;password;course;fee;dos;time;
  constructor(private service:StudServiceService,private route:Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
    this.id = sessionStorage.getItem('id');
    this.name = sessionStorage.getItem('name');
    this.mobile = sessionStorage.getItem('mobile');
    this.dob = sessionStorage.getItem('dob');
    this.emailid = sessionStorage.getItem('emailid');
    this.password = sessionStorage.getItem('password');
    this.course = sessionStorage.getItem('course');
    this.fee = sessionStorage.getItem('fee');
    
  }
  updateStud()
  {
    this.dos = sessionStorage.getItem('dos');
    this.time = sessionStorage.getItem('time');
    this.stud = { 
      "id":this.id,
      "name":this.name,
      "mobile":this.mobile,
      "dob":this.dob,
      "emailid":this.emailid,
      "password":this.password,
      "course":this.course,
      "fee":this.fee,
      "dos":this.dos,
      "time":this.time

    };
      this.service.updateStudent(this.id,this.stud).subscribe(data=>this.stud=data);
      sessionStorage.setItem("id",this.stud.id.toString());
      sessionStorage.setItem("name",this.stud.name.toString());
      sessionStorage.setItem("mobile",this.stud.mobile.toString());
      sessionStorage.setItem("dob",this.stud.dob.toString());
      sessionStorage.setItem("emailid",this.stud.emailid.toString());
      sessionStorage.setItem("password",this.stud.password.toString());
      sessionStorage.setItem("course",this.stud.course.toString())
      sessionStorage.setItem("fee",this.stud.fee.toString())
      sessionStorage.setItem("dos",this.stud.dos.toString())
      sessionStorage.setItem("time",this.stud.time.toString())
      alert("Account Details saved successfully!")
      location.reload();
  }
  

}
