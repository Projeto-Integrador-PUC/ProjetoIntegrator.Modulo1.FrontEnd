import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Categoria } from 'src/app/shared/interfaces/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  @Input() categorias!: Categoria[];
  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 210;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 210;
  }

}
