import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxsModule } from '@ngxs/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMaskDirective } from 'ngx-mask';

import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { CarrinhoState } from 'src/app/shared/stores/carrinho/carrinho.state';
import { CalcularFreteDialogComponent } from './calcular-frete-dialog/calcular-frete-dialog.component';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { ConteudoCarrinhoComponent } from './conteudo-carrinho/conteudo-carrinho.component';
import { DetalhesEnvioComponent } from './detalhes-envio/detalhes-envio.component';
import { ResumoComponent } from './resumo/resumo.component';
import { CartaoCreditoComponent } from './selecionar-pagamento/componentes/cartao-credito/cartao-credito.component';
import { PixComponent } from './selecionar-pagamento/componentes/pix/pix.component';
import { SelecionarPagamentoComponent } from './selecionar-pagamento/selecionar-pagamento.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    ConteudoCarrinhoComponent,
    DetalhesEnvioComponent,
    ResumoComponent,
    CalcularFreteDialogComponent,
    SelecionarPagamentoComponent,
    CartaoCreditoComponent,
    PixComponent
  ],
  imports: [
    CarrinhoRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTabsModule,
    NgxMaskDirective,
    NgxsModule.forFeature([CarrinhoState]),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CarrinhoModule { }
