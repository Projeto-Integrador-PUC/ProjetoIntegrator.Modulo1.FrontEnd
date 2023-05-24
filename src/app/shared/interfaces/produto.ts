export interface Produto {
    id?: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoria: number;
    nomeCategoria?: string;
    imagem: string;
    destaque: boolean;
}

export interface IProdutoSelecionavel extends Omit<Produto, 'quantidade' | 'image'> {
    quantidadeSelecionada: number;
}