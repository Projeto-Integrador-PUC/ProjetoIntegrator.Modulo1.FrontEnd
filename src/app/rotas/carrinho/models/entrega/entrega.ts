import { EventEmitter } from '@angular/core';
import { CepResponse, consultarCep } from 'correios-brasil/dist';

import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { TipoEntrega } from './enum/tipo-entrega.enum';
import { InfoEntrega } from './interface/info-entrega.interface';
import { PrecoPrazo, PrecoPrazoResponse } from './interface/preco-prazo.interface';
import { API } from 'src/app/shared/environment';

export class Entrega {
    private _selecionada!: InfoEntrega;
    private _httpClient = new HttpClient(new HttpXhrBackend({
        build: () => new XMLHttpRequest() 
    }));

    public prazos: InfoEntrega[] = [];
    public calculando = false;
    public endereco!: CepResponse;
    public onChanges = new EventEmitter();


    public get selecionada(): InfoEntrega {
        return this._selecionada;
    }

    public set selecionada(info: InfoEntrega) {
        this._selecionada = info;
        this.onChanges.emit();
    }

    public async calcularFrete(cepDestino: string): Promise<InfoEntrega[]> {
        this.calculando = true;
        this.prazos = [];

        const [endereco, prazos] = await Promise.all([consultarCep(cepDestino), this.obterPrecoPrazos(cepDestino)]);

        if (prazos[0].erro !== '0') {
            this.calculando = false;
            throw new Error(prazos[0].msgErro);
        }

        endereco.cep = endereco.cep.replace('-', '');
        this.endereco = endereco;
        prazos.forEach((prazo) => {
            switch (prazo.codigo) {
                case TipoEntrega.PAC:
                    this.prazos.push({
                        nome: 'PAC',
                        valor: +prazo.valor.replace(',', '.'),
                        prazo: +prazo.prazoEntrega,
                        tipoEntrega: TipoEntrega.PAC
                    });
                    break;
                case TipoEntrega.SEDEX:
                    this.prazos.push({
                        nome: 'SEDEX',
                        valor: +prazo.valor.replace(',', '.'),
                        prazo: +prazo.prazoEntrega,
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

    public async obterPrecoPrazos(cepDestino: string): Promise<PrecoPrazo[]> {
        const queryParams = new URLSearchParams();
        queryParams.append('cepOrigem', '01001000');
        queryParams.append('cepDestino', cepDestino);
        queryParams.append('peso', '1');
        queryParams.append('comprimento', '20');
        queryParams.append('altura', '20');
        queryParams.append('largura', '20');
        queryParams.append('diametro', '0');
        queryParams.append('codigoServicos', TipoEntrega.PAC);
        queryParams.append('codigoServicos', TipoEntrega.SEDEX);

        const response = await lastValueFrom(this._httpClient.get<PrecoPrazoResponse>(`${API}/pagamento/preco-e-prazo?${queryParams.toString()}`));
        return response.prazos;
    }

    public resetarPrecoPrazos(): void {
        this.prazos = [];
        this._selecionada = {} as InfoEntrega;
        this.onChanges.emit();
    }
}