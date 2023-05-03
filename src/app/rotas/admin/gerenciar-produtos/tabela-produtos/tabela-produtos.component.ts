import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coluna } from 'src/app/shared/interfaces/coluna';
import { Produto } from 'src/app/shared/interfaces/produto';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TabelaProdutosComponent {
  public loading$ = new BehaviorSubject<boolean>(false);
  public produtos: Produto[] = [];
  public elementoExpandido!: Produto;
  public colunas: Coluna[] = [
    { nomePropriedade: 'nome', nomeColuna: 'Nome' },
    { nomePropriedade: 'preco', nomeColuna: 'Preço' },
    { nomePropriedade: 'quantidade', nomeColuna: 'Quantidade' },
    { nomePropriedade: 'destaque', nomeColuna: 'Destaque' },
    { nomePropriedade: 'nomeCategoria', nomeColuna: 'Categoria' },
    { nomePropriedade: 'imagem', nomeColuna: 'Imagem' },
  ];
  public colunasComExpandir: Coluna[] = [...this.colunas, { nomePropriedade: 'expandir', nomeColuna: '' }];
  public propriedades = this.colunasComExpandir.map(coluna => coluna.nomePropriedade);

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loading$.next(true);
    this.adminService.obterProdutos()
      .subscribe(produtos => this.produtos = produtos)
      .add(() => this.loading$.next(false));
  }

  teste(elemento: unknown, elementoExpandido: unknown) {
    console.log(elemento, elementoExpandido);
  }
}
