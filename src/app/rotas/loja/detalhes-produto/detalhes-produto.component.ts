import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';

import { Produto } from 'src/app/shared/interfaces/produto';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss']
})
export class DetalhesProdutoComponent {
  private readonly destroy$ = new Subject<boolean>();
  public produto!: Produto;

  get loading(): boolean {
    return this.produtosService.loading;
  }

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private carrinho: CarrinhoService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.produtosService.obterDetalhesProduto(id);
      })
    )
    .subscribe(produto => this.produto = produto);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  public adicionarAoCarrinho(): void {
    this.carrinho.adicionarProduto(this.produto).then(() => this.carrinho.abrirDialogProdutoAdicionado());
  }
}

