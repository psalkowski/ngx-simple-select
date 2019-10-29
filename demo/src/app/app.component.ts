import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  options = [
    {
      label: 'New York',
      value: 'ny'
    },
    {
      label: 'San Francisco',
      value: 'sf'
    },
    {
      label: 'Warsaw',
      value: 'w'
    }
  ];

  formControl: FormControl;
  ngModelValue: any;
  onChangeCallbackValue: any;

  constructor() {
    this.formControl = new FormControl();
  }

  onChange(val) {
    this.onChangeCallbackValue = val;
  }
}
