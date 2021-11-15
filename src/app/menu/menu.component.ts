import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.aa();
  }
  public aa() 
  { 
   localStorage.setItem("isloggedIn","false");
   localStorage.setItem("isloggedIn_user","false");
  }
}
