import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './Book';
import {Library} from './Shelf';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  myUrl='http://localhost:7002/stud/books'
  constructor(private myHttp:HttpClient) { }

  getBooks():Observable<any>
  {
    return this.myHttp.get(`${this.myUrl}`);
  }

  postBooks(lib:Library){
    return this.myHttp.post<Library>(`${this.myUrl}`, lib);
  }

  myBooks():Observable<any>
  {
    return this.myHttp.get(this.myUrl+"/mybooks");
  }

  postName(name:string)
  {
    return this.myHttp.post(`${this.myUrl}/${name}`,name);
  }

}
