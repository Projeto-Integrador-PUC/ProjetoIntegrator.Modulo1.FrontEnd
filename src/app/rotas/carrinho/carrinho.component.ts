import { Component } from '@angular/core';

import { IProdutoSelecionavel } from 'src/app/shared/interfaces/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { QuantidadeAlteradaEvent } from './interfaces/quantidade-alterada.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  constructor(private carrinhoService: CarrinhoService) { }

  public get produtos(): IProdutoSelecionavel[] {
    return this.carrinhoService.produtos;
  }

  public alterarQuantidade({ produto, novaQuantidade }: QuantidadeAlteradaEvent): void {
    this.carrinhoService.alterarQuantidade(produto, novaQuantidade);
  }
}
