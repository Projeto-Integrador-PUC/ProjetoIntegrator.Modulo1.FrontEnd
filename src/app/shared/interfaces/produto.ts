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