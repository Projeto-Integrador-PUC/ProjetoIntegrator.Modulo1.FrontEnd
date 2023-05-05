import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/interfaces/produto';
import { RotasService } from 'src/app/shared/services/rotas.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.scss']
})
export class GerenciarProdutosComponent {
  public searchValue = '';
  public loading = false;
  public produtos: Produto[] = [];

  constructor(
    public rotas: RotasService,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.adminService.obterProdutos()
    .subscribe(produtos => this.produtos = produtos)
    .add(() => this.loading = false);
  }

  public adicionarProduto(): void {
    this.rotas.navegarPara('adicionar');
  }
}
