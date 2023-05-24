import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IProdutoSelecionavel } from 'src/app/shared/interfaces/produto';
import { QuantidadeAlteradaEvent } from '../interfaces/quantidade-alterada.interface';

@Component({
  selector: 'app-conteudo-carrinho',
  templateUrl: './conteudo-carrinho.component.html',
  styleUrls: ['./conteudo-carrinho.component.scss']
})
export class ConteudoCarrinhoComponent {
  @Input() public conteudo: IProdutoSelecionavel[] = [];
  @Output() public quantidadeAlterada = new EventEmitter<QuantidadeAlteradaEvent>();

  public alterarQuantidade(quantidade: number, produto: IProdutoSelecionavel): void {
    this.quantidadeAlterada.emit({ produto, novaQuantidade: quantidade });
  }
}
