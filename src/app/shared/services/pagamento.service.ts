import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { API } from '../environment';
import { Resposta } from '../interfaces/resposta';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private httpClient: HttpClient) { }

  public gerarPixCopiaCola(valor: number): Observable<string> {
    const queryParams = new HttpParams().append('valor', valor.toString());
    return this.httpClient.post<Resposta<string>>(API + '/pagamento/qr-code', null, { params: queryParams }).pipe(
      tap(resposta => {
        if (!resposta.sucesso || !resposta.dados) {
          throw new Error(resposta.mensagem);
        }
      }),
      map(resposta => resposta.dados)
    );
  }
}
