import { IProdutoSelecionavel } from 'src/app/shared/interfaces/produto';

export interface QuantidadeAlteradaEvent {
    produto: IProdutoSelecionavel;
    novaQuantidade: number;
}