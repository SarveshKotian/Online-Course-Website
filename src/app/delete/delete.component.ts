import { Component, OnInit } from '@angular/core';
import {StudServiceService} from '../stud-service.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {Student} from '../Student';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service:StudServiceService,private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
  }

  deleteStuds()
  {
    let id:number = Number(sessionStorage.getItem("id"));
    this.service.deleteStudent(id).subscribe((data)=>data);
    sessionStorage.clear();
    location.reload();
    alert("Account Deleted Successfully!");
  }

}
