import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { LojaComponent } from './loja.component';

const routes: Routes = [
    { path: '', component: LojaComponent },
    { path: ':id', component: DetalhesProdutoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LojaRoutingModule { }