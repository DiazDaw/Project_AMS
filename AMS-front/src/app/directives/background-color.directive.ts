import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[backgroundColor]'
})
export class BackgroundColorDirective implements OnInit {
  @Input('backgroundColor') backgroundColor?: string;
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }
}
