import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { LojaRoutingModule } from './loja-routing.module';
import { LojaComponent } from './loja.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  declarations: [
    DetalhesProdutoComponent,
    LojaComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    SharedModule,
  ]
})
export class LojaModule { }
