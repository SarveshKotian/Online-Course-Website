import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Programz';

  session:any;
  ngOnInit()
  {
    this.session = sessionStorage.getItem("name");
  }
  userLogout()
  {
    sessionStorage.clear();
    this.ngOnInit();
    location.reload();
    alert("Logged out successfully!");
  }
}
