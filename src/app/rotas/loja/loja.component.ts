import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PageEvent } from '@angular/material/paginator';
import { Produto } from 'src/app/shared/interfaces/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { LojaService } from './loja.service';
import { ProdutosPaginator } from './models/produtos-paginator';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.scss']
})
export class LojaComponent {
  public paginator = new ProdutosPaginator(this.lojaService);
  public pagina = 1;
  public quantidade = 10;

  constructor(
    private carrinho: CarrinhoService,
    private lojaService: LojaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.paginator.iniciar();
  }

  public async adicionarProduto(produto: Produto): Promise<void> {
    await this.carrinho.adicionarProduto(produto);
    this.carrinho.abrirDialogProdutoAdicionado();
  }

  public abrirDetalhes(produto: Produto): void {
    this.router.navigate(['produtos', produto.id]);
  }

  public atualizarPagina(evento: PageEvent): void {
    if (typeof(evento.previousPageIndex) !== 'number') return;
    
    if (evento.previousPageIndex < evento.pageIndex) {
      this.paginator.proximaPagina();
    } else if (evento.previousPageIndex > evento.pageIndex) {
      this.paginator.paginaAnterior();
    }
  }
}
