import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxSimpleSelectComponent} from './ngx-simple-select.component';


@NgModule({
  declarations: [NgxSimpleSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSimpleSelectComponent]
})
export class NgxSimpleSelectModule {
}
