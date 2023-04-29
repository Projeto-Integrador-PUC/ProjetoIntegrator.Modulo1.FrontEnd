import { Component } from '@angular/core';
import { RotasService } from 'src/app/shared/services/rotas.service';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.scss']
})
export class GerenciarProdutosComponent {
  searchValue = '';

  constructor(public rotas: RotasService) { }

  public adicionarProduto(): void {
    this.rotas.navegarPara('adicionar');
  }
}
