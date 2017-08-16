import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-usermenu',
  templateUrl: './app-usermenu.component.html',
  styleUrls: ['./app-usermenu.component.css']
})
export class AppUsermenuComponent implements OnInit {

  user = "Kerem"
  constructor() { }

  ngOnInit() {
  }

}
