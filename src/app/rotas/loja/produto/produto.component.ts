import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Produto } from 'src/app/shared/interfaces/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  @Input() public produto!: Produto;
  @Output() public adicionarProduto = new EventEmitter<Produto>();
  @Output() public irParaDetalhes = new EventEmitter<Produto>();

  public adicionar(): void {
    this.adicionarProduto.emit(this.produto);
  }

  public abrirDetalhes(): void {
    this.irParaDetalhes.emit(this.produto);
  }
}
