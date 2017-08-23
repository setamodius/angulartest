import { Component } from '@angular/core';
import { Device } from './device'
import { AppTopmenuComponent } from './app-topmenu/app-topmenu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  device1: Device = new Device("sdsd","mmmom");
  isCollapsed:boolean = true;
  constructor() { 
    
  }
  title = 'app';

  menuToggle()
  {
    this.isCollapsed = !this.isCollapsed;
  }
}
