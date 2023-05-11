import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem } from '@ngxs/store/operators';

import { Produto } from '../../interfaces/produto';
import { Carrinho } from './carrinho.actions';

export interface CarrinhoStateModel {
  produtos: Produto[];
  total: number;
}

export const carrinhoVazio = {
  produtos: [],
  total: 0
};

@State<CarrinhoStateModel>({
  name: 'carrinho',
  defaults: carrinhoVazio
})
@Injectable()
export class CarrinhoState {

  @Selector([CarrinhoState])
  static carrinho(state: CarrinhoStateModel) {
    return state;
  }

  @Selector([CarrinhoState])
  static produtos(state: CarrinhoStateModel) {
    return state.produtos;
  }

  @Selector([CarrinhoState])
  static total(state: CarrinhoStateModel) {
    return state.total;
  }

  @Action(Carrinho.AdicionarProduto)
  adicionarProduto(contexto: StateContext<CarrinhoStateModel>, { produto }: Carrinho.AdicionarProduto) {
    contexto.setState(
      patch({
        produtos: append([produto]),
        total: (total) => total + (produto.preco * produto.quantidade)
      })
    );
  }

  @Action(Carrinho.RemoverProduto)
  removerProduto(contexto: StateContext<CarrinhoStateModel>, { produto }: Carrinho.RemoverProduto) {
    contexto.setState(
      patch({
        produtos: removeItem<Produto>((item) => item.id === produto.id),
        total: (total) => total - (produto.preco * produto.quantidade)
      })
    );
  }

  @Action(Carrinho.LimparCarrinho)
  limparCarrinho(contexto: StateContext<CarrinhoStateModel>) {
    contexto.setState(carrinhoVazio);
  }
}
