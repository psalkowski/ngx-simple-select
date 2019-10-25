import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxSimpleSelectModule} from '../../../dist/ngx-simple-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSimpleSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
