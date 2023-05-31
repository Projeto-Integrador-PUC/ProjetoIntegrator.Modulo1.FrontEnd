import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable, combineLatest, lastValueFrom } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { DialogProdutoAdicionadoComponent } from '../components/dialog-produto-adicionado/dialog-produto-adicionado.component';
import { IProdutoSelecionavel, Produto } from '../interfaces/produto';
import { ProdutoSelecionavel } from '../models/produto-selecionavel.model';
import { Carrinho } from '../stores/carrinho/carrinho.actions';
import { CarrinhoState, CarrinhoStateModel, carrinhoVazio } from '../stores/carrinho/carrinho.state';

@Injectable()
export class CarrinhoService {
  private carrinho$ = new BehaviorSubject<CarrinhoStateModel>(carrinhoVazio);
  private produtos$ = new BehaviorSubject<IProdutoSelecionavel[]>([]);
  private total$ = new BehaviorSubject<number>(0);

  public get carrinho(): CarrinhoStateModel {
    return this.carrinho$.value;
  }

  public get produtos(): IProdutoSelecionavel[] {
    return this.produtos$.value;
  }

  public get total(): number {
    return this.total$.value;
  }

  @Select(CarrinhoState.carrinho)
  private carrinhoState!: Observable<CarrinhoStateModel>;

  @Select(CarrinhoState.produtos)
  private produtosState!: Observable<IProdutoSelecionavel[]>;

  @Select(CarrinhoState.total)
  private totalState!: Observable<number>;

  constructor(
    private store: Store,
    private dialog: MatDialog,
  ) {
    combineLatest([this.carrinhoState, this.produtosState, this.totalState])
      .subscribe(([carrinho, produtos, total]) => {
        this.carrinho$.next(carrinho);
        this.produtos$.next(produtos);
        this.total$.next(total);
    });
  }

  public async adicionarProduto(produto: Produto): Promise<void> {
    const produtoJaAdicionado = this.carrinho.produtos.find((p) => p.id === produto.id);

    if (produtoJaAdicionado) {
      await this.alterarQuantidade(new ProdutoSelecionavel(produto), produtoJaAdicionado.quantidadeSelecionada + 1);
    } else {
      await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.AdicionarProduto(new ProdutoSelecionavel(produto))));
    }
  }

  public async removerProduto(id: number): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.RemoverProduto(id)));
  }

  public async alterarQuantidade(produto: IProdutoSelecionavel, novaQuantidade: number): Promise<void> {
    if (!produto.id) return;

    if (novaQuantidade <= 0) {
      await this.removerProduto(produto.id);
    } else {
      await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.AlterarQuantidade(produto.id, novaQuantidade)));
    }
  }

  public async limparCarrinho(): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.LimparCarrinho()));
  }

  public abrirDialogProdutoAdicionado(): void {
    this.dialog.open(DialogProdutoAdicionadoComponent);
  }
}
