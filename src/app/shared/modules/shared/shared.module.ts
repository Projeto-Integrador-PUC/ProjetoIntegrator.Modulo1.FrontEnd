import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { DialogProdutoAdicionadoComponent } from '../../components/dialog-produto-adicionado/dialog-produto-adicionado.component';
import { SeletorQuantidadeComponent } from '../../components/seletor-quantidade/seletor-quantidade.component';
import { CarrinhoService } from '../../services/carrinho.service';
import { CarrinhoState } from '../../stores/carrinho/carrinho.state';

@NgModule({
  declarations: [
    SeletorQuantidadeComponent,
    CarouselComponent,
    DialogProdutoAdicionadoComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    NgxsModule.forFeature([CarrinhoState]),
  ],
  exports: [
    SeletorQuantidadeComponent,
    CarouselComponent,
    DialogProdutoAdicionadoComponent,
  ],
  providers: [
    CarrinhoService,
  ]
})
export class SharedModule { }
