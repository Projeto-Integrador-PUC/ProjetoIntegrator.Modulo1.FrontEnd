import { IProdutoSelecionavel, Produto } from '../interfaces/produto';

export class ProdutoSelecionavel implements IProdutoSelecionavel {
    public quantidadeSelecionada: number;
    public id?: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public categoria: number;
    public nomeCategoria?: string;
    public imagem: string;
    public destaque: boolean;

    constructor(produto: Produto) {
        this.id = produto.id;
        this.nome = produto.nome;
        this.descricao = produto.descricao;
        this.preco = produto.preco;
        this.categoria = produto.categoria;
        this.nomeCategoria = produto.nomeCategoria;
        this.imagem = produto.imagem;
        this.destaque = produto.destaque;
        this.quantidadeSelecionada = 1;
    }
}