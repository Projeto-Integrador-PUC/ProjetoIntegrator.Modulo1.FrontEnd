import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent<T extends { imagem: string, nome?: string }> {
  @Input() items!: T[];
  @Output() itemClicked = new EventEmitter<T>();
  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  private readonly defaultImageWidth = 210;

  private get offsetWidth(): number {
    if (!this.items.length || !this.widgetsContent) {
      return 0;
    } else {
      const { clientWidth } = this.widgetsContent.nativeElement;
      const numOfVisibleImages = Math.floor(clientWidth / this.defaultImageWidth);
      const numOfImages = this.items.length;
      return (numOfImages - numOfVisibleImages) * this.defaultImageWidth;
    }
  }

  public scrollLeft(): void {
    if (this.widgetsContent.nativeElement.scrollLeft == 0) {
      this.widgetsContent.nativeElement.scrollLeft = this.offsetWidth;
    } else {
      this.widgetsContent.nativeElement.scrollLeft -= this.defaultImageWidth;
    }
  }

  public scrollRight(): void {
    const currentScrollLeft = Math.round(this.widgetsContent.nativeElement.scrollLeft);
    if (currentScrollLeft == this.offsetWidth) {
      this.widgetsContent.nativeElement.scrollLeft = 0;
    } else {
      this.widgetsContent.nativeElement.scrollLeft += this.defaultImageWidth;
    }
  }
}
