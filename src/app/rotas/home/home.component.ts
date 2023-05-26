import { Component } from '@angular/core';

import { Categoria } from 'src/app/shared/interfaces/categoria';
import { Produto } from 'src/app/shared/interfaces/produto';
import { TelaService } from 'src/app/shared/services/tela.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public categorias!: Categoria[];
  public produtos!: Produto[];

  constructor(
    private homeService: HomeService,
    private telaService: TelaService
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
}
