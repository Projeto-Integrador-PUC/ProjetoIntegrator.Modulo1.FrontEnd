import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CategoriasComponent } from '../../components/categorias/categorias.component';



@NgModule({
  declarations: [ CategoriasComponent ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CategoriasComponent,
  ]
})
export class SharedModule { }
