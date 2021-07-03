import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessionpage',
  templateUrl: './sessionpage.component.html',
  styleUrls: ['./sessionpage.component.css']
})
export class SessionpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
  }

}
