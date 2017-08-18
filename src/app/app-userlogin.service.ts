import { Injectable } from '@angular/core';

@Injectable()
export class AppUserloginService {
  isStatusOpen: boolean = false;
  constructor() { }
  changeUser() {
    this.isStatusOpen = true;
  }
}
