import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTopmenuComponent } from './app-topmenu/app-topmenu.component';
import { AppUsermenuComponent } from './app-usermenu/app-usermenu.component';
import { AppLoginmodalComponent } from './app-loginmodal/app-loginmodal.component';
import { AppUserloginService } from "./app-userlogin.service";



@NgModule({
  declarations: [
    AppComponent,
    AppTopmenuComponent,
    AppUsermenuComponent,
    AppLoginmodalComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppUserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
