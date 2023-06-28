import { Component, ViewChild } from '@angular/core';

import { IProdutoSelecionavel } from 'src/app/shared/interfaces/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { DetalhesEnvioComponent } from './detalhes-envio/detalhes-envio.component';
import { QuantidadeAlteradaEvent } from './interfaces/quantidade-alterada.interface';
import { Entrega } from './models/entrega/entrega';
import { SelecionarPagamentoComponent } from './selecionar-pagamento/selecionar-pagamento.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  @ViewChild(DetalhesEnvioComponent) detalhesEnvio!: DetalhesEnvioComponent;
  @ViewChild(SelecionarPagamentoComponent) detalhesPagamento!: SelecionarPagamentoComponent;
  
  protected selectedTabIndex = 0;
  protected finalizando = false;

  private primeiraPaginaCompleta = true;
  private segundaPaginaCompleta = false;

  constructor(private carrinhoService: CarrinhoService, private router: Router) { }

  public get desabilitarBotaoProximo(): boolean {
    switch (this.selectedTabIndex) {
      case 0:
        return !this.primeiraPaginaCompleta;
      case 1:
        return !this.segundaPaginaCompleta;
      case 2:
        return this.terceiraPaginaCompleta;
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

  public get terceiraPaginaCompleta(): boolean {
    return this.detalhesPagamento && this.detalhesPagamento.valido;
  }

  public alterarQuantidade({ produto, novaQuantidade }: QuantidadeAlteradaEvent): void {
    this.carrinhoService.alterarQuantidade(produto, novaQuantidade);
  }

  public proximo(): void {
    this.atualizarEstadoDoCarrinho(this.selectedTabIndex);
    this.selectedTabIndex++;
  }

  public cancelar(): void {
    if (this.selectedTabIndex === 0) {
      return;
    }

    this.selectedTabIndex--;
  }

  public abrirDialogCalcularFrete(): void {
    this.carrinhoService.abrirDialogCalcularFrete();
  }

  protected validarSegundaPagina(valido: boolean): void {
    this.segundaPaginaCompleta = valido;
  }

  private atualizarEstadoDoCarrinho(pagina: number): void {
    switch (pagina) {
      case 1:
        if (this.primeiraPaginaCompleta && this.detalhesEnvio.formulario.valid) {
          this.carrinhoService.definirEnvio(this.detalhesEnvio.formulario.getRawValue());
        }
        break;
      case 2:
        if (this.segundaPaginaCompleta && this.detalhesPagamento.pagamentoEscolhido) {
          const pagamento = this.detalhesPagamento.pagamentoEscolhido;
          const cartaoCredito = this.detalhesPagamento.cartaoCredito;
          this.finalizando = true;
          this.carrinhoService
            .definirPagamento({ ...pagamento, cartaoCredito })
            .then(async () => {
              const guid = await this.carrinhoService.finalizarCompra();
              this.router.navigate(['/pedido', guid]);
            })
            .finally(() => this.finalizando = false);
        }
        break;
    }
  }
}
