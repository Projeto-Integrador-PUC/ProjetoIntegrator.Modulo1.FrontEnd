import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API } from 'src/app/shared/environment';
import { Produto } from 'src/app/shared/interfaces/produto';
import { Resposta } from 'src/app/shared/interfaces/resposta';
import { Categoria } from '../../shared/interfaces/categoria';

@Injectable()
export class AdminService {
    produtosEndpoint = API + '/produtos';

    constructor(private http: HttpClient) { }

    public obterCategorias(): Observable<Categoria[]> {
        return this.http.get<Resposta<Categoria[]>>(this.produtosEndpoint + '/categorias')
            .pipe(map(resposta => resposta.dados ?? []));
    }

    public obterProdutos(): Observable<Produto[]> {
        return this.http.get<Resposta<Produto[]>>(this.produtosEndpoint)
            .pipe(map(resposta => resposta.dados ?? []));
    }

    public adicionarProduto(produto: Produto): Observable<Resposta> {
        return this.http.post<Resposta>(this.produtosEndpoint, produto);
    }
}
