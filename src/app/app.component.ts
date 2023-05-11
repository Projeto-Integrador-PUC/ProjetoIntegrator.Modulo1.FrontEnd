import { Component } from '@angular/core';
import { RotasService } from './shared/services/rotas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public rotas: RotasService) { }

  get classeHeader(): string {
    switch (this.rotas.rotaAtual) {
      case 'home':
        return 'header-home';
      case 'sobre':
        return 'header-sobre';
      case 'loja':
        return 'header-loja';
      case 'ajuda':
        return 'header-ajuda';
      case 'carrinho':
        return 'header-carrinho';
      default:
        return '';
    }
  }
}
