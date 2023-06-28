import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';

import { MatStepper } from '@angular/material/stepper';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { ResumoPedido } from './interfaces/resumo-pedido.interface';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit, OnDestroy {
  
  @ViewChild('stepper') private stepper!: MatStepper;
  private readonly destroy$ = new Subject<boolean>();

  public resumo!: ResumoPedido;
  public loading = false;
  public qrCode!: string;

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
    .pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const id = params.get('id') ?? '';
        return this.pedidoService.obterResumoPedido(id);
      })
    )
    .subscribe(async (resumo) => {
      this.resumo = resumo;
      if (resumo.idPagamento === 2) {
        this.qrCode = await this.carrinhoService.gerarQRCodePagamento(resumo.subTotal + resumo.valorFrete);
      } 
      this.loading = false;
      setTimeout(() => {
        this.resumo.status.forEach(() => this.stepper.next());
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
