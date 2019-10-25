import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = [

    {
      label: 'Foo',
      value: 'foo'
    }, {
      label: 'Bar',
      value: 'bar'
    }, {
      label: 'Foo',
      value: 'foo'
    }, {
      label: 'Bar',
      value: 'bar'
    }, {
      label: 'Foo',
      value: 'foo'
    }, {
      label: 'Bar',
      value: 'bar'
    }, {
      label: 'Foo',
      value: 'foo'
    }, {
      label: 'Bar',
      value: 'bar'
    }
  ];

  onChange(e) {
    console.log('onChange', e);
  }
}
