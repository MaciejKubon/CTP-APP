import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, LeftNavbarComponent],
})
export class AppModule {}
