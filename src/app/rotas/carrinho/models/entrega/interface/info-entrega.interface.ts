import { TipoEntrega } from '../enum/tipo-entrega.enum';

export interface InfoEntrega {
    nome: string;
    valor: number;
    prazo: number;
    tipoEntrega: TipoEntrega;
}