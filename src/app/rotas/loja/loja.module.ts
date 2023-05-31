import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { LojaRoutingModule } from './loja-routing.module';

@NgModule({
  declarations: [
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule,
    MatButtonModule,
    MatDividerModule,
    SharedModule,
  ]
})
export class LojaModule { }
