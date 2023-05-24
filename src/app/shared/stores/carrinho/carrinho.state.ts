import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';

import { IProdutoSelecionavel } from '../../interfaces/produto';
import { ProdutoSelecionavel } from '../../models/produto-selecionavel.model';
import { Carrinho } from './carrinho.actions';

export interface CarrinhoStateModel {
  produtos: IProdutoSelecionavel[];
}

export const carrinhoVazio = {
  produtos: []
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
    return state.produtos.reduce((total, produto) => total + (produto.quantidadeSelecionada * produto.preco), 0);
  }

  @Action(Carrinho.AdicionarProduto)
  adicionarProduto(contexto: StateContext<CarrinhoStateModel>, { produto }: Carrinho.AdicionarProduto) {
    contexto.setState(
      patch({
        produtos: append([produto])
      })
    );
  }

  @Action(Carrinho.AlterarQuantidade)
  aumentarQuantidade(contexto: StateContext<CarrinhoStateModel>, { id, novaQuantidade }: Carrinho.AlterarQuantidade) {
    contexto.setState(
      patch({
        produtos: updateItem<ProdutoSelecionavel>((item) => item.id === id, patch({ quantidadeSelecionada: novaQuantidade }))
      })
    );
  }

  @Action(Carrinho.RemoverProduto)
  removerProduto(contexto: StateContext<CarrinhoStateModel>, { id }: Carrinho.RemoverProduto) {
    contexto.setState(
      patch({
        produtos: removeItem<ProdutoSelecionavel>((item) => item.id === id)
      })
    );
  }

  @Action(Carrinho.LimparCarrinho)
  limparCarrinho(contexto: StateContext<CarrinhoStateModel>) {
    contexto.setState(carrinhoVazio);
  }
}
