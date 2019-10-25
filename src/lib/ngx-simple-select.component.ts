import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding, HostListener,
  Input,
  Output,
  TemplateRef, ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {of} from 'rxjs';
import {map, min, reduce} from 'rxjs/operators';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxSimpleSelectComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'ngx-simple-select',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  templateUrl: './ngx-simple-select.template.html',
  styleUrls: ['./ngx-simple-select.styles.scss']
})
export class NgxSimpleSelectComponent implements ControlValueAccessor {
  @Input() public options: any;
  @Input() public placeholder = 'Wybierz opcję';
  @HostBinding('class.disabled')
  @Input() public disabled: boolean = null;
  @HostBinding('class.readonly')
  @Input() public readonly: boolean = null;
  @Input() public id: string;

  @Output() public ngOnChange = new EventEmitter();

  @HostBinding('id') customId = '';
  @HostBinding('class.open') opened = false;
  @ContentChild(TemplateRef, {static: false}) templateVariable: TemplateRef<any>;

  @ViewChild('container', {static: true}) container;

  public selected = null;
  public selectedIndex: number;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {
  }

  public focus() {
    if (this.disabled || this.readonly) {
      return;
    }

    this.open();
  }

  public toggle() {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.opened) {
      this.hide();
    } else {
      this.open();
    }
  }

  public hide() {
    if (this.disabled || this.readonly) {
      return;
    }

    this.opened = false;
  }

  public open() {
    if (this.disabled || this.readonly) {
      return;
    }

    this.opened = true;
    this.scrollPosition();
  }

  private scrollPosition() {
    const container = this.container.nativeElement;
    const options = container.querySelectorAll('.simple-select-option');

    if (this.selectedIndex >= 0) {
      setTimeout(() => {
        of(...options).pipe(
          map(a => a.clientHeight),
          min((a, b) => a < b ? -1 : 1)
        ).subscribe(height => {
          container.scrollTop = height * this.selectedIndex;
        });
      });
    }
  }

  private isSelected(option) {
    if (!this.selected) {
      return false;
    }

    return JSON.stringify(this.selected) === JSON.stringify(option);
  }

  public select(option: any, index: number) {
    if (this.disabled || this.readonly) {
      return;
    }

    this.opened = false;
    this.selectedIndex = index;
    this.value = option;
  }

  // get accessor
  get value(): any {
    return this.selected;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.selected) {
      this.selected = v;
      this.onChangeCallback(v);
      this.ngOnChange.emit(v);
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }

  // @HostListener('document:click', ['$event'])
  // public onDocumentClick(event) {
  //   if (!this.el.nativeElement.contains(event.target)) {
  //     this.opened = false;
  //   }
  // }

}
