import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { append, patch, removeItem, updateItem } from '@ngxs/store/operators';

import { Envio } from 'src/app/rotas/carrinho/interfaces/envio.interface';
import { InfoEntrega } from 'src/app/rotas/carrinho/models/entrega/interface/info-entrega.interface';
import { CartaoCredito } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/cartao-credito.interface';
import { OpcaoPagamento } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/opcoes-pagamento.interface';
import { IProdutoSelecionavel } from '../../interfaces/produto';
import { ProdutoSelecionavel } from '../../models/produto-selecionavel.model';
import { Carrinho } from './carrinho.actions';

export interface CarrinhoStateModel {
  produtos: IProdutoSelecionavel[];
  entrega: InfoEntrega | null;
  envio: Envio | null;
  pagamento: (OpcaoPagamento & { cartaoCredito: CartaoCredito | null }) | null;
}

export const carrinhoVazio = {
  produtos: [],
  entrega: null,
  envio: null,
  pagamento: null,
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

  @Selector([CarrinhoState])
  static entrega(state: CarrinhoStateModel) {
    return state.entrega;
  }

  @Selector([CarrinhoState])
  static envio(state: CarrinhoStateModel) {
    return state.envio;
  }

  @Selector([CarrinhoState])
  static pagamento(state: CarrinhoStateModel) {
    return state.pagamento;
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

  @Action(Carrinho.DefinirEntrega)
  definirEntrega(contexto: StateContext<CarrinhoStateModel>, { entrega }: Carrinho.DefinirEntrega) {
    contexto.setState(
      patch({
        entrega
      })
    );
  }

  @Action(Carrinho.DefinirEnvio)
  definirEnvio(contexto: StateContext<CarrinhoStateModel>, { envio }: Carrinho.DefinirEnvio) {
    contexto.setState(
      patch({
        envio
      })
    );
  }

  @Action(Carrinho.DefinirPagamento)
  definirPagamento(contexto: StateContext<CarrinhoStateModel>, { pagamento }: Carrinho.DefinirPagamento) {
    contexto.setState(
      patch({
        pagamento
      })
    );
  }
}
