import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskPipe } from 'ngx-mask';

import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pedido.component';



@NgModule({
  declarations: [PedidoComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    NgxMaskPipe,
    PedidoRoutingModule,
    SharedModule,
  ]
})
export class PedidoModule { }
