import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxSimpleSelectComponent} from './ngx-simple-select.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [NgxSimpleSelectComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgxSimpleSelectComponent]
})
export class NgxSimpleSelectModule {
}
