import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Coluna } from 'src/app/shared/interfaces/coluna';
import { Produto } from 'src/app/shared/interfaces/produto';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TabelaProdutosComponent {

  @Input() produtos: Produto[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dados = new MatTableDataSource<Produto>([]);
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

  ngAfterViewInit(): void {
    this.dados = new MatTableDataSource<Produto>(this.produtos);
    this.dados.paginator = this.paginator;
  }
}
