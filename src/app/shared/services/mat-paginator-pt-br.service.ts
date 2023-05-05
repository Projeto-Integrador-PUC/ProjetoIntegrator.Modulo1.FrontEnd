import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorPtBrService extends MatPaginatorIntl {
  constructor() {
    super();  
    this.traduzir();
  }

  traduzir() {
    this.itemsPerPageLabel = "Itens por página:";
    this.nextPageLabel = "Próxima página";
    this.previousPageLabel = "Página anterior";
    this.changes.next();
  }

  public override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 - ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
}
