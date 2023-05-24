import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { CarrinhoState } from 'src/app/shared/stores/carrinho/carrinho.state';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { ConteudoCarrinhoComponent } from './conteudo-carrinho/conteudo-carrinho.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    ConteudoCarrinhoComponent
  ],
  imports: [
    CarrinhoRoutingModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    NgxsModule.forFeature([CarrinhoState]),
    SharedModule,
  ],
})
export class CarrinhoModule { }
