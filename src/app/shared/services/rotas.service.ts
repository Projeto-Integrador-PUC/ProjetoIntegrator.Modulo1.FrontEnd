import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotasService {
  rotasSemHeader = ['/admin'];

  constructor(
    private router: Router,
  ) { }

  public get exibirHeader(): boolean {
    return !this.rotasSemHeader.some(rota => this.router.url.startsWith(rota));
  }

  public get ultimaRota(): string {
    return this.router.url.split('/').pop() ?? '';
  }

  public get rotaAtual(): string {
    return this.router.url.split('/')[1];
  }

  public navegarPara(rota: string): void {
    this.router.navigateByUrl(this.router.url + '/' + rota);
  }

  public voltar(): void {
    this.router.navigateByUrl(this.router.url.split('/').slice(0, -1).join('/'));
  }
}
