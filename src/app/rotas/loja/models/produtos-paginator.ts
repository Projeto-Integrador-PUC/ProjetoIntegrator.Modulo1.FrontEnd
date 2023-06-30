import { lastValueFrom } from 'rxjs';

import { Produto } from 'src/app/shared/interfaces/produto';
import { LojaService } from '../loja.service';

export class ProdutosPaginator {
    private _pagina = 1;
    private _quantidade = 8;
    private _lojaService: LojaService;
    private _loading = false;
    private _produtos: Produto[] = [];
    private _totalProdutos = 0;

    constructor(lojaService: LojaService) {
        this._lojaService = lojaService;
    }

    public get pagina(): number {
        return this._pagina;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get loading(): boolean {
        return this._loading;
    }

    public get produtos(): Produto[] {
        return this._produtos;
    }

    public get totalProdutos(): number {
        return this._totalProdutos;
    }

    public async iniciar(): Promise<void> {
        this._loading = true;
        const produtos = await lastValueFrom(this._lojaService.obterProdutosPaginados(this._pagina, this._quantidade));
        this._produtos = produtos;
        this._totalProdutos = produtos[0].totalProdutos;
        this._loading = false;
    }

    public async proximaPagina(): Promise<void> {
        this._pagina++;
        this._loading = true;
        this._produtos = await lastValueFrom(this._lojaService.obterProdutosPaginados(this._pagina, this._quantidade));
        this._loading = false;
    }

    public async paginaAnterior(): Promise<void> {
        if (this._pagina === 1) return;
        this._pagina--;
        this._loading = true;
        this._produtos = await lastValueFrom(this._lojaService.obterProdutosPaginados(this._pagina, this._quantidade));
        this._loading = false;
    }
}