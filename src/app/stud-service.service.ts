import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  //myUrl='/assets/data/student.json';
  
  myUrl='http://localhost:7002/stud'
  constructor(private myHttp:HttpClient) { }

  getStudents():Observable<any>
  {
    return this.myHttp.get(`${this.myUrl}`);
  }

  getStudent(id: number): Observable<any> {
    return this.myHttp.get(`${this.myUrl}/${id}`);
  }

  createStudent(Student: Student){
    return this.myHttp.post<Student>(`${this.myUrl}`, Student);
  }

  updateStudent(id: number, stud: Student) {
    return this.myHttp.put<Student>(`${this.myUrl}/${id}`, stud);
  }

  deleteStudent(id: number): Observable<any> {
    return this.myHttp.delete(`${this.myUrl}/${id}`);
  }

}
