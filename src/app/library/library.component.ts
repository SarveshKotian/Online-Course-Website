import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import { Observable } from "rxjs";
import {Library} from '../Shelf';
import { Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  bList:Library[];
  stud:Library;
  name:string;
  constructor(private bookService:BookServiceService,private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
    
    this.name = sessionStorage.getItem('name');
    this.bookService.postName(this.name).subscribe();
    this.bookService.myBooks().subscribe(data=>this.bList=data);
    console.log(this.bList);
    
  }

}
