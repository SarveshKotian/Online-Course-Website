import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import {StudServiceService} from '../stud-service.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {

  myArray:Observable<Student[]>;
  constructor(private service:StudServiceService) { }

  ngOnInit(): void {
    this.myArray=this.service.getStudents();
  }

}
