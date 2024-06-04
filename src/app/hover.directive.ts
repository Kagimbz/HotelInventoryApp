import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hotelinvappHover]'
})
export class HoverDirective implements OnInit{
  @Input() hotelinvappHover: string = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.hotelinvappHover;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'background-color', 'green'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.elementRef.nativeElement, 'background-color', 'white'
    )
  }

}
