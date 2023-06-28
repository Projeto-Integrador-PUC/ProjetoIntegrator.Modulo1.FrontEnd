import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { API } from 'src/app/shared/environment';
import { Resposta } from 'src/app/shared/interfaces/resposta';
import { ResumoPedido } from './interfaces/resumo-pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  public obterResumoPedido(guid: string): Observable<ResumoPedido> {
    return this.httpClient.get<Resposta<ResumoPedido>>(`${API}/pagamento/resumo/${guid}`)
    .pipe(
      tap(resposta => {
        if (!resposta.sucesso || !resposta.dados) {
          throw new Error(resposta.mensagem);
        }
      }),
      map(resposta => resposta.dados)
    );
  }
}
