# ngx-simple-select

Lightweight and simple custom select for Angular. Demo: https://stackblitz.com/edit/angular-nhwmv9

## Install
If you use `npm`, enter:
```
$ npm install ngx-simple-select --save
```

If you use `yarn`, enter:
```
$ yarn add ngx-simply-select
```

## Usage

Import module `NgxSimpleSelectModule` in your `AppModule` like below:
```
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
```

Then you can use library in any template like below:
```
<ngx-simple-select [options]="[{label: 'Foo', value: 'foo'}, {label: 'Bar', value: 'bar'}]" (ngOnChange)="onChange($event)">
  <ng-template let-option="option">
    <strong>Label:</strong> {{option.label}}<br/>
    <strong>Value:</strong> {{option.value}}
  </ng-template>
</ngx-simple-select>
``` 

You can use it with `[(ngModel)]` or `formControl`. The component implements `ControlValueAccessor`, so will work with any form and validation that you use.

## Styles

Encapsulation for styles is disabled for easier overwriting for your needs. You can check default styles at
[src/lib/ngx-simple-select.styles.scss](https://github.com/namerci/ngx-simple-select/blob/master/src/lib/ngx-simple-select.styles.scss)

## Demo

You can check demo online on https://stackblitz.com/edit/angular-nhwmv9 or run it locally.

To run demo locally with latest changes, you need to build library (see *Build* section), then run:
```
cd demo
npm install
npm start
```

Now, open browser and enter http://localhost:4200

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run publish`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

