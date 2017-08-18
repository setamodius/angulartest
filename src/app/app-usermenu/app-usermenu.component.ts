import { Component, OnInit } from '@angular/core';
import { AppUserloginService } from "../app-userlogin.service";

@Component({
  selector: 'my-usermenu',
  templateUrl: './app-usermenu.component.html',
  styleUrls: ['./app-usermenu.component.css']
})
export class AppUsermenuComponent implements OnInit {

  user = "Kerem"
  myservice: AppUserloginService
  constructor(service: AppUserloginService) {
    this.myservice = service;
  }

  ngOnInit() {
  }
  changeUser() {
    this.myservice.changeUser();
  }

}
