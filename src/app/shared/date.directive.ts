import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  date: Date | undefined;

  private para;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.para = renderer.createElement('p');
   }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const day = this.date?.toLocaleDateString();
    const hours = this.date?.getHours().toString().padStart(2, '0');
    const minutes = this.date?.getMinutes().toString().padStart(2, '0');
    this.para.innerHTML = `${day} ${hours}:${minutes}`;
    this.renderer.appendChild(this.el.nativeElement, this.para);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.para);
  }
}
