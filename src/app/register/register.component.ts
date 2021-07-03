import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Student} from '../Student';
import {StudServiceService} from '../stud-service.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stud:Student;
  studList:Observable<Student[]>;
  constructor(private service:StudServiceService,private route:Router) { }

  ngOnInit(): void {
    this.studList=this.service.getStudents();
    if(sessionStorage.getItem("id")!=null)
    {
      this.route.navigate(["/home"]);
    }
    this.stud = {"id":undefined,"name":undefined,"mobile":undefined,"dob":undefined,"emailid":undefined,"password":undefined,"course":undefined,"fee":undefined,"dos":"0","time":"0"};

  }
  registerUser()
  {
    if(this.stud.name!=undefined&&this.stud.mobile!=undefined&&this.stud.dob!=undefined&&this.stud.emailid!=undefined&&this.stud.password!=undefined&&this.stud.course!=undefined&&this.stud.fee!=undefined)
    {
      this.service.createStudent(this.stud).subscribe((data)=>this.stud=data);
      alert("Enrollment Successful!");
      this.route.navigate(['/first']);
    }
    else
    {
      alert("Please fill all mandatory fields!");
    }
  }
  courseFee()
  {
    switch (this.stud.course) {
      case "cpp":
        this.stud.fee=1000;
        break;
      case "java":
        this.stud.fee=2000;
        break;
      case "sql":
        this.stud.fee=1500;
        break;
      case "angular":
        this.stud.fee=2000;
        break;
      case "python":
        this.stud.fee=1700;
        break;
      default:
        this.stud.fee=0;
    }
  }

}
