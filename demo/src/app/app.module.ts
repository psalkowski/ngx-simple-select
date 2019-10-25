import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxSimpleSelectModule} from 'ngx-simple-select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxSimpleSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
