import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { BehaviorSubject, Observable, combineLatest, finalize, lastValueFrom, map } from 'rxjs';
import { CalcularFreteDialogComponent } from './../../rotas/carrinho/calcular-frete-dialog/calcular-frete-dialog.component';

import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Envio } from 'src/app/rotas/carrinho/interfaces/envio.interface';
import { Entrega } from 'src/app/rotas/carrinho/models/entrega/entrega';
import { CartaoCredito } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/cartao-credito.interface';
import { OpcaoPagamento } from 'src/app/rotas/carrinho/selecionar-pagamento/interfaces/opcoes-pagamento.interface';
import { DialogProdutoAdicionadoComponent } from '../components/dialog-produto-adicionado/dialog-produto-adicionado.component';
import { API } from '../environment';
import { IProdutoSelecionavel, Produto } from '../interfaces/produto';
import { Resposta } from '../interfaces/resposta';
import { ProdutoSelecionavel } from '../models/produto-selecionavel.model';
import { Carrinho } from '../stores/carrinho/carrinho.actions';
import { CarrinhoState, CarrinhoStateModel, carrinhoVazio } from '../stores/carrinho/carrinho.state';

@Injectable()
export class CarrinhoService {
  private carrinho$ = new BehaviorSubject<CarrinhoStateModel>(carrinhoVazio);
  private produtos$ = new BehaviorSubject<IProdutoSelecionavel[]>([]);
  private total$ = new BehaviorSubject<number>(0);
  private entrega$ = new BehaviorSubject<Entrega>(new Entrega());

  public get carrinho(): CarrinhoStateModel {
    return this.carrinho$.value;
  }

  public get produtos(): IProdutoSelecionavel[] {
    return this.produtos$.value;
  }

  public get total(): number {
    return this.total$.value;
  }

  public get entrega(): Entrega {
    return this.entrega$.value;
  }

  @Select(CarrinhoState.carrinho)
  private carrinhoState!: Observable<CarrinhoStateModel>;

  @Select(CarrinhoState.produtos)
  private produtosState!: Observable<IProdutoSelecionavel[]>;

  @Select(CarrinhoState.total)
  private totalState!: Observable<number>;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private store: Store,
  ) {
    combineLatest([this.carrinhoState, this.produtosState, this.totalState])
      .subscribe(([carrinho, produtos, total]) => {
        this.carrinho$.next(carrinho);
        this.produtos$.next(produtos);
        this.total$.next(total);
    });
    this.entrega$.value.onChanges.subscribe(() => {
      this.store.dispatch(new Carrinho.DefinirEntrega(this.entrega$.value.selecionada));
    });
  }

  public async adicionarProduto(produto: Produto): Promise<void> {
    const produtoJaAdicionado = this.carrinho.produtos.find((p) => p.id === produto.id);

    if (produtoJaAdicionado) {
      await this.alterarQuantidade(new ProdutoSelecionavel(produto), produtoJaAdicionado.quantidadeSelecionada + 1);
    } else {
      await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.AdicionarProduto(new ProdutoSelecionavel(produto))));
    }
  }

  public async removerProduto(id: number): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.RemoverProduto(id)));
  }

  public async alterarQuantidade(produto: IProdutoSelecionavel, novaQuantidade: number): Promise<void> {
    if (!produto.id) return;

    if (novaQuantidade <= 0) {
      await this.removerProduto(produto.id);
    } else {
      await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.AlterarQuantidade(produto.id, novaQuantidade)));
    }
  }

  public async limparCarrinho(): Promise<void> {
    await lastValueFrom<CarrinhoStateModel>(this.store.dispatch(new Carrinho.LimparCarrinho()));
  }

  public abrirDialogProdutoAdicionado(): void {
    this.dialog.open(DialogProdutoAdicionadoComponent);
  }

  public async calcularFretes(endereco: string): Promise<void> {
    await this.entrega$.value.calcularFrete(endereco);
  }

  public abrirDialogCalcularFrete(): void {
    this.dialog.open(CalcularFreteDialogComponent, {
      data: this.entrega$.value,
    });
  }

  public definirEnvio(envio: Envio): void {
    this.store.dispatch(new Carrinho.DefinirEnvio(envio));
  }

  public async definirPagamento(pagamento: OpcaoPagamento & { cartaoCredito: CartaoCredito | null }): Promise<void> {
    return lastValueFrom(this.store.dispatch(new Carrinho.DefinirPagamento(pagamento)));
  }

  public finalizarCompra(): Promise<string> {
    const pedido = this.store.selectSnapshot(CarrinhoState.carrinho);
    
    return lastValueFrom(this.httpClient.post<Resposta<string>>(`${API}/pagamento/checkout`, pedido)
      .pipe(
        map(resposta => resposta.dados),
        finalize(() => this.limparCarrinho()),
      ));
  }
}
