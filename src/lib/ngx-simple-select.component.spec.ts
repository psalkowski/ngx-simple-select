import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxSimpleSelectComponent} from './ngx-simple-select.component';

describe('NgxSimpleSelectComponent', () => {
  let component: NgxSimpleSelectComponent;
  let fixture: ComponentFixture<NgxSimpleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSimpleSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('focus', () => {
    it('should call open()', () => {
      spyOn(component, 'open');

      component.focus();

      expect(component.open).toHaveBeenCalled();
    });
  });

  describe('toggle', () => {
    it('should call open()', () => {
      spyOn(component, 'open');
      spyOn(component, 'hide');

      component.opened = false;
      component.toggle();

      expect(component.open).toHaveBeenCalled();
      expect(component.hide).toHaveBeenCalledTimes(0);
    });

    it('should call hide()', () => {
      spyOn(component, 'open');
      spyOn(component, 'hide');

      component.opened = true;
      component.toggle();

      expect(component.hide).toHaveBeenCalled();
      expect(component.open).toHaveBeenCalledTimes(0);
    });
  });

  describe('open', () => {
    it('should do nothing if readonly', () => {
      component.disabled = false;
      component.readonly = true;
      component.open();

      expect(component.opened).toBeFalsy();
    });

    it('should do nothing if disabled', () => {
      component.disabled = true;
      component.readonly = false;
      component.open();

      expect(component.opened).toBeFalsy();
    });

    it('should set opened to true', () => {

      component.disabled = false;
      component.readonly = false;
      component.open();

      expect(component.opened).toBeTruthy();
    });
  });

  describe('hide', () => {
    it('should do nothing if readonly', () => {
      component.disabled = false;
      component.readonly = true;
      component.hide();

      expect(component.opened).toBeFalsy();
    });

    it('should do nothing if disabled', () => {
      component.disabled = true;
      component.readonly = false;
      component.hide();

      expect(component.opened).toBeFalsy();
    });

    it('should set opened to true', () => {
      component.disabled = false;
      component.readonly = false;
      component.hide();

      expect(component.opened).toBeFalsy();
    });
  });
});
