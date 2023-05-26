import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

import { API } from 'src/app/shared/environment';
import { Categoria } from 'src/app/shared/interfaces/categoria';
import { Produto } from 'src/app/shared/interfaces/produto';
import { Resposta } from 'src/app/shared/interfaces/resposta';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public get loading(): boolean {
    return this._loading.value;
  }

  public obterCategorias(): Observable<Categoria[]> {
    this._loading.next(true);
    return this.http.get<Resposta<Categoria[]>>(API + '/produtos/categorias')
      .pipe(
        tap(resposta => {
          if (!resposta.sucesso) {
            throw new Error(resposta.mensagem);
          }
        }),
        map(resposta => resposta.dados ?? []),
        tap(() => this._loading.next(false))
      );
  }

  public obterProdutosDestaque(): Observable<Produto[]> {
    this._loading.next(true);
    return this.http.get<Resposta<Produto[]>>(API + '/produtos/destaques')
      .pipe(
        tap(resposta => {
          if (!resposta.sucesso) {
            throw new Error(resposta.mensagem);
          }
        }),
        map(resposta => resposta.dados ?? []),
        tap(() => this._loading.next(false))
      );
  }
}
