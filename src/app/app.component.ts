import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rotasSemHeader = ['/admin'];

  get exibirHeader(): boolean {
    return !this.rotasSemHeader.some(rota => this.router.url.startsWith(rota));
  }

  constructor(public router: Router) { }
}
