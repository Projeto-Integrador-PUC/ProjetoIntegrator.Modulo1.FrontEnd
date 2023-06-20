import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Entrega } from '../models/entrega/entrega';
import { InfoEntrega } from '../models/entrega/interface/info-entrega.interface';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent {
  @Input() public subtotal!: number;
  @Input() public entrega!: Entrega;
  @Output() public calcularEntrega = new EventEmitter();

  public get entregaEscolhida(): InfoEntrega | undefined {
    return this.entrega.prazos.find((p) => p.tipoEntrega === this.entrega.selecionada?.tipoEntrega);
  }
}
