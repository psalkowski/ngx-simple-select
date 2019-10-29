import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxSimpleSelectComponent} from './ngx-simple-select.component';
import createSpyObj = jasmine.createSpyObj;

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
    component.options = ['foo', 'bar'];

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
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

  describe('select', () => {
    it('should do nothing if readonly', () => {
      component.opened = true;
      component.disabled = false;
      component.readonly = true;
      component.select(1);

      expect(component.selectedIndex).toBeUndefined();
      expect(component.opened).toBeTruthy();
    });

    it('should do nothing if disabled', () => {
      component.opened = true;
      component.disabled = true;
      component.readonly = false;
      component.select(1);

      expect(component.selectedIndex).toBeUndefined();
      expect(component.opened).toBeTruthy();
    });

    it('should set value', () => {
      component.select(1);

      expect(component.selectedIndex).toBe(1);
      expect(component.value).toBe(component.options[1]);
      expect(component.opened).toBeFalsy();
    });
  });

  describe('value', () => {
    it('get value return selected value', () => {
      component.selected = 'foo';

      expect(component.value).toBe('foo');
    });

    it('set same value as before should not trigger callbacks', () => {
      spyOn(component.ngOnChange, 'emit');

      const spy = jasmine.createSpy();
      component.registerOnChange(spy);
      component.selected = 'foo';
      component.value = 'foo';

      expect(spy).toHaveBeenCalledTimes(0);
      expect(component.ngOnChange.emit).toHaveBeenCalledTimes(0);
      expect(component.value).toBe('foo');
    });

    it('set new value should trigger callbacks', () => {
      spyOn(component.ngOnChange, 'emit');

      const spy = jasmine.createSpy();
      component.registerOnChange(spy);
      component.selected = 'foo';
      component.value = 'bar';

      expect(spy).toHaveBeenCalledTimes(1);
      expect(component.ngOnChange.emit).toHaveBeenCalledTimes(1);
      expect(component.value).toBe('bar');
    });
  });
});
