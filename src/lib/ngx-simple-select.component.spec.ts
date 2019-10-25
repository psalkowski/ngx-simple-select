import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleSelectComponent } from './ngx-simple-select.component';

describe('NgxSimpleSelectComponent', () => {
  let component: NgxSimpleSelectComponent;
  let fixture: ComponentFixture<NgxSimpleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSimpleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
