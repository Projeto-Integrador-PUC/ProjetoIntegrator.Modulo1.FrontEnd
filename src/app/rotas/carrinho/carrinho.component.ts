import { Component } from '@angular/core';

import { IProdutoSelecionavel } from 'src/app/shared/interfaces/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { QuantidadeAlteradaEvent } from './interfaces/quantidade-alterada.interface';
import { Entrega } from './models/entrega/entrega';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  protected selectedTabIndex = 0;

  private primeiraPaginaCompleta = true;
  private segundaPaginaCompleta = false;
  private terceiraPaginaCompleta = false;

  constructor(private carrinhoService: CarrinhoService) { }

  public get desabilitarBotaoProximo(): boolean {
    switch (this.selectedTabIndex) {
      case 0:
        return !this.primeiraPaginaCompleta;
      case 1:
        return !this.segundaPaginaCompleta;
      case 2:
        return !this.terceiraPaginaCompleta;
      default:
        return true;
    }
  }

  public get produtos(): IProdutoSelecionavel[] {
    return this.carrinhoService.produtos;
  }

  public get total(): number {
    return this.carrinhoService.total;
  }

  public get entrega(): Entrega {
    return this.carrinhoService.entrega;
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

  public calcularFretes(endereco: string): void {
    this.carrinhoService.calcularFretes(endereco);
  }

  public abrirDialogCalcularFrete(): void {
    this.carrinhoService.abrirDialogCalcularFrete();
  }

  public validarSegundaPagina(valido: boolean): void {
    this.segundaPaginaCompleta = valido;
  }

  public validarTerceiraPagina(valido: boolean): void {
    this.terceiraPaginaCompleta = valido;
  }
}
