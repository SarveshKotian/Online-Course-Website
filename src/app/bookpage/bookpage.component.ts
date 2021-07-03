import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import {BookServiceService} from '../book-service.service';
import { Observable } from "rxjs";
import {Library} from '../Shelf';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  bList:Observable<Book[]>;
  lList:Library;
  name:string;
  constructor(private bookService:BookServiceService,private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
    this.bookService.getBooks().subscribe(data=>this.bList=data);
    
  }

  Buy(bid:number,bookname:string)
  {

    this.lList = {"lid":undefined,"name":undefined,"bid":undefined,"bookname":undefined};
    this.lList.bid=bid;
    this.lList.bookname=bookname;
    this.name = sessionStorage.getItem('name');
    this.lList.name=this.name;
    this.bookService.postBooks(this.lList).subscribe(data=>this.lList=data);
    
  }

  change()
  {
    alert("Books added to your Library")
    this.route.navigate(['/home']);
    
  }
}





