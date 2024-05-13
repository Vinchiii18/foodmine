import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercaseInput]'
})
export class LowercaseInputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    this.el.nativeElement.value = (event.target as HTMLInputElement).value.toLowerCase();
  }

}
