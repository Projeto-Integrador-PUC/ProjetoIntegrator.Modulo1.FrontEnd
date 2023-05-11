import { Produto } from '../../interfaces/produto';

export namespace Carrinho {
  export class AdicionarProduto {
    static readonly type = '[Carrinho] Adicionar Produto';
    constructor(public produto: Produto) { }
  }

  export class RemoverProduto {
    static readonly type = '[Carrinho] Remover Produto';
    constructor(public produto: Produto) { }
  }

  export class LimparCarrinho {
    static readonly type = '[Carrinho] Limpar Carrinho';
  }
}
