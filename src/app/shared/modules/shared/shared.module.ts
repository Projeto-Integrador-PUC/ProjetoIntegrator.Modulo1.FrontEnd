import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgxsModule } from '@ngxs/store';

import { CarouselComponent } from '../../components/carousel/carousel.component';
import { SeletorQuantidadeComponent } from '../../components/seletor-quantidade/seletor-quantidade.component';
import { CarrinhoState } from '../../stores/carrinho/carrinho.state';

@NgModule({
  declarations: [ SeletorQuantidadeComponent, CarouselComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxsModule.forFeature([CarrinhoState]),
  ],
  exports: [
    SeletorQuantidadeComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }
