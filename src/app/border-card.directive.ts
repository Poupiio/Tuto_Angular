import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  initialColor: string = "#f5f5f5";
  defaultColor: string = "#009688";
  defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(190);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string; // alias
  @Input() pkmnBorderCard: string;  // sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}