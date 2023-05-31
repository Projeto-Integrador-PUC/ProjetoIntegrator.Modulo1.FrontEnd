export interface Resposta<T = void> {
    sucesso: boolean;
    mensagem: string;
    dados: T;
}