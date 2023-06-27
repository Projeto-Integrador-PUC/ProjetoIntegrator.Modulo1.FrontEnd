import { Envio } from 'src/app/rotas/carrinho/interfaces/envio.interface';
import { InfoEntrega } from 'src/app/rotas/carrinho/models/entrega/interface/info-entrega.interface';
import { CartaoCredito } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/cartao-credito.interface';
import { OpcaoPagamento } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/opcoes-pagamento.interface';
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

  export class DefinirEntrega {
    static readonly type = '[Carrinho] Definir Entrega';
    constructor(public entrega: InfoEntrega) { }
  }

  export class DefinirEnvio {
    static readonly type = '[Carrinho] Definir Envio';
    constructor(public envio: Envio) { }
  }

  export class DefinirPagamento {
    static readonly type = '[Carrinho] Definir Pagamento';
    constructor(public pagamento: OpcaoPagamento & { cartaoCredito: CartaoCredito | null }) { }
  }
}
