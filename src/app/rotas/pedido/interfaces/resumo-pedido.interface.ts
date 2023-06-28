import { SituacaoPedido } from '../enums/situacao-pedido.enum';

export interface    ResumoPedido {
    idPagamento: number;
    idFrete: number;
    prazoFrete: number;
    valorFrete: number;
    subTotal: number,
    logradouro: string,
    complemento: string,
    estado: string,
    cidade: string,
    cep: string,
    status: [
        {
            situacao: SituacaoPedido,
            descricao: string,
            dataStatus: Date
        }
    ],
    produtos: [
        {
            idProduto: number,
            nome: string,
            imagem: string,
            quantidade: number,
            valorUnitario: number
        }
    ]
}
