import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  dos;time;d=0;
  myDate:Date=new Date();
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("id")==null)
    {
      this.route.navigate(["/first"]);
    }
    this.dos = sessionStorage.getItem("dos");
    this.time= sessionStorage.getItem("time");
    

    let sessionDate = new Date(this.dos);
    
    if (this.myDate < sessionDate) 

    {
      this.d=1;
    }

    else
    {
      this.d=0;
    }


  }

}
