import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTopmenuComponent } from './app-topmenu/app-topmenu.component';
import { AppUsermenuComponent } from './app-usermenu/app-usermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopmenuComponent,
    AppUsermenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
