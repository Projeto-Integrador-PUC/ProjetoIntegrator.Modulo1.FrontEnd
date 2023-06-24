export interface PrecoPrazoResponse {
	prazos: PrecoPrazo[];
}

export interface PrecoPrazo {
	codigo: string;
	valor: string;
	prazoEntrega: string;
	valorSemAdicionais: string;
	valorMaoPropria: string;
	valorAvisoRecebimento: string;
	valorDeclarado: string;
	entregaDomiciliar: string;
	entregaSabado: string;
	erro: string;
	msgErro: string;
}