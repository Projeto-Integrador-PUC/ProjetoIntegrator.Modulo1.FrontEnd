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
  protected selectedTabIndex = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  public get produtos(): IProdutoSelecionavel[] {
    return this.carrinhoService.produtos;
  }

  public alterarQuantidade({ produto, novaQuantidade }: QuantidadeAlteradaEvent): void {
    this.carrinhoService.alterarQuantidade(produto, novaQuantidade);
  }

  public proximo(): void {
    this.selectedTabIndex++;
  }

  public cancelar(): void {
    if (this.selectedTabIndex === 0) {
      return;
    }

    this.selectedTabIndex--;
  }
}
