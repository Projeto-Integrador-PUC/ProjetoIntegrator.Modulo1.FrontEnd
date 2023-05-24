import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';

import { CategoriasComponent } from '../../components/categorias/categorias.component';
import { SeletorQuantidadeComponent } from '../../components/seletor-quantidade/seletor-quantidade.component';
import { CarrinhoState } from '../../stores/carrinho/carrinho.state';

@NgModule({
  declarations: [ CategoriasComponent, SeletorQuantidadeComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxsModule.forFeature([CarrinhoState]),
  ],
  exports: [
    CategoriasComponent,
    SeletorQuantidadeComponent,
  ]
})
export class SharedModule { }
