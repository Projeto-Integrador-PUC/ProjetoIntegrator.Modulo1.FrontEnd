import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { RotasService } from './shared/services/rotas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public rotas: RotasService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.registerIcons();
  }

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

  private registerIcons(): void {
    this.matIconRegistry
      .addSvgIcon('pix-logo', this.sanitizedUrl('assets/icons/pix-logo.svg'));
  }

  private sanitizedUrl(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
