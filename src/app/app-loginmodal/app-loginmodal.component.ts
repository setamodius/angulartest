import { Component, OnInit } from '@angular/core';
import { AppUserloginService } from "../app-userlogin.service";

@Component({
  selector: 'my-loginmodal',
  templateUrl: './app-loginmodal.component.html',
  styleUrls: ['./app-loginmodal.component.css']
})
export class AppLoginmodalComponent implements OnInit {

  showModal:boolean = true;
  myService: AppUserloginService
  constructor(service: AppUserloginService) { 
    this.myService = service;
  }

  ngOnInit() {
  }

  isOpenStatus() {
    if(this.myService.isStatusOpen) {
      return "block";
    } else {
      return "none";
    }
    
  }

  close() {
    this.myService.isStatusOpen = false;
  }

}
