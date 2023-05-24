import { IProdutoSelecionavel } from '../../interfaces/produto';

export namespace Carrinho {
  export class AdicionarProduto {
    static readonly type = '[Carrinho] Adicionar Produto';
    constructor(public produto: IProdutoSelecionavel) { }
  }
  
  export class RemoverProduto {
    static readonly type = '[Carrinho] Remover Produto';
    constructor(public id: number) { }
  }
  
  export class AlterarQuantidade {
    static readonly type = '[Carrinho] Alterar Quantidade';
    constructor(public id: number, public novaQuantidade: number) { }
  }
  
  export class LimparCarrinho {
    static readonly type = '[Carrinho] Limpar Carrinho';
  }
}
