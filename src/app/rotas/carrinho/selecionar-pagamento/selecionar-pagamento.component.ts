import { Component, ViewChild } from '@angular/core';

import { openClose } from 'src/app/shared/animations/open-closed-trigger';
import { CartaoCreditoComponent } from './componentes/cartao-credito/cartao-credito.component';
import { CartaoCredito } from './interfaces/cartao-credito.interface';
import { OpcaoPagamento } from './interfaces/opcoes-pagamento.interface';

@Component({
  selector: 'app-selecionar-pagamento',
  templateUrl: './selecionar-pagamento.component.html',
  styleUrls: ['./selecionar-pagamento.component.scss'],
  animations: [openClose],
})
export class SelecionarPagamentoComponent {
  @ViewChild(CartaoCreditoComponent) cartaoCreditoComponent!: CartaoCreditoComponent;

  public get cartaoCredito(): CartaoCredito | null {
    if (this.pagamentoEscolhido.id === 1 && this.cartaoCreditoComponent.formularioCartaoCredito.valid) {
      return this.cartaoCreditoComponent.formularioCartaoCredito.getRawValue();
    }

    return null;
  }

  public get valido(): boolean {
    if (!this.pagamentoEscolhido) {
      return false;
    } else if (this.pagamentoEscolhido.id === 1) {
      return this.cartaoCreditoComponent?.formularioCartaoCredito?.valid || false;
    } else {
      return true;
    }
  }

  public opcoesPagamento: OpcaoPagamento[] = [
    {
      nome: 'Cartão de crédito',
      icone: 'credit_card',
      descricao: 'Pague com cartão de crédito',
      id: 1
    },
    {
      nome: 'Pix',
      icone: 'qr_code',
      descricao: 'Pague com Pix',
      id: 2
    },
  ];

  public pagamentoEscolhido!: OpcaoPagamento;
}
