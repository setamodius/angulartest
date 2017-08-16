import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppTopmenuComponent } from './app-topmenu/app-topmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopmenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
