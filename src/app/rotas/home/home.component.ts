import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/interfaces/categoria';
import { Produto } from 'src/app/shared/interfaces/produto';
import { TelaService } from 'src/app/shared/services/tela.service';
import { ProdutosService } from '../../shared/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public categorias!: Categoria[];
  public produtos!: Produto[];

  constructor(
    private homeService: ProdutosService,
    private telaService: TelaService,
    private router: Router,
  ) { }

  get ehMobile(): boolean {
    return this.telaService.ehMobile;
  }

  get loading(): boolean {
    return this.homeService.loading;
  }

  ngOnInit(): void {
    this.homeService
      .obterCategorias()
      .subscribe(res => this.categorias = res);
    
    this.homeService
      .obterProdutosDestaque()
      .subscribe(res => this.produtos = res);
  }

  public navegarParaDetalhesDoProduto(produto: Produto): void {
    this.router.navigate(['/produtos', produto.id]);
  }
}
