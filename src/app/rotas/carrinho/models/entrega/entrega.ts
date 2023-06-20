import { EventEmitter } from '@angular/core';
import { CepResponse, PrecoPrazoRequest, calcularPrecoPrazo, consultarCep } from 'correios-brasil/dist';

import { TipoEntrega } from './enum/tipo-entrega.enum';
import { InfoEntrega } from './interface/info-entrega.interface';

export class Entrega {
    public prazos: InfoEntrega[] = [];
    public calculando = false;
    public endereco!: CepResponse;
    public onChanges = new EventEmitter();

    private _selecionada!: InfoEntrega;

    public get selecionada(): InfoEntrega {
        return this._selecionada;
    }

    public set selecionada(info: InfoEntrega) {
        this._selecionada = info;
        this.onChanges.emit();
    }

    public async calcularFrete(cepDestino: string): Promise<InfoEntrega[]> {
        const info: PrecoPrazoRequest = {
            sCepOrigem: '01001000',
            sCepDestino: cepDestino,
            nVlPeso: '1',
            nCdFormato: '1',
            nVlComprimento: '20',
            nVlAltura: '20',
            nVlLargura: '20',
            nCdServico: [TipoEntrega.PAC, TipoEntrega.SEDEX],
            nVlDiametro: '0',
        };
        this.calculando = true;
        this.prazos = [];

        const [endereco, prazos] = await Promise.all([consultarCep(cepDestino), calcularPrecoPrazo(info)]);
        
        if (prazos[0].Erro !== '0') {
            this.calculando = false;
            throw new Error(prazos[0].MsgErro);
        }

        endereco.cep = endereco.cep.replace('-', '');
        this.endereco = endereco;
        prazos.forEach((prazo) => {
            switch (prazo.Codigo) {
                case TipoEntrega.PAC:
                    this.prazos.push({
                        nome: 'PAC',
                        valor: +prazo.Valor.replace(',', '.'),
                        prazo: +prazo.PrazoEntrega,
                        tipoEntrega: TipoEntrega.PAC
                    });
                    break;
                case TipoEntrega.SEDEX:
                    this.prazos.push({
                        nome: 'SEDEX',
                        valor: +prazo.Valor.replace(',', '.'),
                        prazo: +prazo.PrazoEntrega,
                        tipoEntrega: TipoEntrega.SEDEX
                    });
                    break;
            }
        });

        this.calculando = false;
        this.onChanges.emit();
        return this.prazos;
    }

    public async obterEndereco(cep: string): Promise<void> {
        const endereco =  await consultarCep(cep);

        if (endereco.logradouro) {
            endereco.cep = endereco.cep.replace('-', '');
            this.endereco = endereco;
            this.onChanges.emit();
        }
    }
}