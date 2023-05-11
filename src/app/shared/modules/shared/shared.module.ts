import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';

import { CategoriasComponent } from '../../components/categorias/categorias.component';
import { CarrinhoState } from '../../stores/carrinho/carrinho.state';

@NgModule({
  declarations: [ CategoriasComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxsModule.forFeature([CarrinhoState]),
  ],
  exports: [
    CategoriasComponent,
  ]
})
export class SharedModule { }
