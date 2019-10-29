<h3 align="center">ngx-simple-select</h3>

<p align="center">
    <img src="https://img.shields.io/badge/status-active-success.svg" alt="status" >
    <a href="https://badge.fury.io/js/ngx-simple-select"><img src="https://badge.fury.io/js/ngx-simple-select.svg" alt="npm version" ></a>
    <a href="https://npmjs.org/ngx-simple-select"><img src="https://img.shields.io/npm/dt/ngx-simple-select.svg" alt="npm downloads" ></a>
    <a href="https://travis-ci.org/namerci/ngx-simple-select"><img alt="Build Status" src="https://travis-ci.org/namerci/ngx-simple-select.svg?branch=master"></a>
    <a href="/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>

<p align="center">
    Lightweight and simple custom select for Angular. It works on Angular 6 and later. Demo: <a href="https://stackblitz.com/edit/angular-nhwmv9">https://stackblitz.com/edit/angular-nhwmv9</a>. 
</p>

## Install
If you use `npm`, enter:
```
$ npm install ngx-simple-select --save
```

If you use `yarn`, enter:
```
$ yarn add ngx-simple-select
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

