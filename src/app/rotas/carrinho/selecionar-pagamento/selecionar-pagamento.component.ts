import { Component } from '@angular/core';

import { openClose } from 'src/app/shared/animations/open-closed-trigger';
import { OpcaoPagamento } from './interfaces/opcoes-pagamento.interface';

@Component({
  selector: 'app-selecionar-pagamento',
  templateUrl: './selecionar-pagamento.component.html',
  styleUrls: ['./selecionar-pagamento.component.scss'],
  animations: [openClose],
})
export class SelecionarPagamentoComponent {
  public opcoesPagamento: OpcaoPagamento[] = [
    {
      nome: 'Cartão de crédito',
      icone: 'credit_card',
      descricao: 'Pague com cartão de crédito',
      selecionado: false,
      id: 1
    },
    {
      nome: 'Pix',
      icone: 'qr_code',
      descricao: 'Pague com Pix',
      selecionado: false,
      id: 2
    },
  ];

  public pagamentoEscolhido!: OpcaoPagamento;
}
