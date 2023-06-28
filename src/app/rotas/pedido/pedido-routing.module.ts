import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PedidoComponent } from './pedido.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':id', component: PedidoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PedidoRoutingModule { }