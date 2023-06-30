import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { API } from 'src/app/shared/environment';
import { Produto } from 'src/app/shared/interfaces/produto';
import { Resposta } from 'src/app/shared/interfaces/resposta';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private httpClient: HttpClient) { }

  public obterProdutosPaginados(pagina: number, quantidade: number): Observable<(Produto & { totalProdutos: number })[]> {
    return this.httpClient.get<Resposta<(Produto & { totalProdutos: number })[]>>(`${API}/produtos/paginado?pagina=${pagina}&quantidade=${quantidade}`).pipe(
      map(resposta => resposta.dados)
    );
  }
}
