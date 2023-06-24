import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Entrega } from '../models/entrega/entrega';
import { InfoEntrega } from '../models/entrega/interface/info-entrega.interface';

@Component({
  selector: 'app-calcular-frete-dialog',
  templateUrl: './calcular-frete-dialog.component.html',
  styleUrls: ['./calcular-frete-dialog.component.scss']
})
export class CalcularFreteDialogComponent implements OnInit {
  public cep = '';
  public entregaEscolhida!: InfoEntrega;
  public exibirCepInvalido = false;

  constructor(
    private readonly dialog: MatDialogRef<CalcularFreteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public entrega: Entrega
    ) {}
  
  ngOnInit(): void {
    if (this.entrega.endereco) {
      this.cep = this.entrega.endereco.cep;
      this.validarCep(this.cep);
    }
  }

  public validarCep(cep: string): void {
    this.exibirCepInvalido = false;
    if (cep.length === 8) {
      this.entrega.calcularFrete(this.cep).catch((err) => {
        this.exibirCepInvalido = true;
        throw new Error(err);
      });
    }
  }

  public fechar(): void {
    this.dialog.close();
  }

  public confirmar(): void {
    this.entrega.selecionada = this.entregaEscolhida;
    this.dialog.close(this.cep);
  }
}
