import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable, combineLatest, lastValueFrom } from 'rxjs';

import { Produto } from '../interfaces/produto';
import { Carrinho } from '../stores/carrinho/carrinho.actions';
import { CarrinhoState, CarrinhoStateModel, carrinhoVazio } from '../stores/carrinho/carrinho.state';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public carrinho$ = new BehaviorSubject<CarrinhoStateModel>(carrinhoVazio);
  public produtos$ = new BehaviorSubject<Produto[]>([]);
  public total$ = new BehaviorSubject<number>(0);

  public get carrinho(): CarrinhoStateModel {
    return this.carrinho$.value;
  }

  public get produtos(): Produto[] {
    return this.produtos$.value;
  }

  public get total(): number {
    return this.total$.value;
  }

  @Select(CarrinhoState.carrinho)
  private carrinhoState!: Observable<CarrinhoStateModel>;

  @Select(CarrinhoState.produtos)
  private produtosState!: Observable<Produto[]>;

  @Select(CarrinhoState.total)
  private totalState!: Observable<number>;

  constructor(private store: Store) {
    combineLatest([this.carrinhoState, this.produtosState, this.totalState])
      .subscribe(([carrinho, produtos, total]) => {
        this.carrinho$.next(carrinho);
        this.produtos$.next(produtos);
        this.total$.next(total);
    });
  }

  public async adicionarProduto(produto: Produto): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.AdicionarProduto(produto)));
  }

  public async removerProduto(produto: Produto): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.RemoverProduto(produto)));
  }

  public async limparCarrinho(): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.LimparCarrinho()));
  }
}
