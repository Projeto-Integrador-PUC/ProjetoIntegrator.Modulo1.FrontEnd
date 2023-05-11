import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdicionarProdutoComponent } from './gerenciar-produtos/adicionar-produto/adicionar-produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';

const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: '', redirectTo: 'produtos', pathMatch: 'full' },
        { path: 'produtos', component: GerenciarProdutosComponent, children: [
            { path: 'adicionar', component: AdicionarProdutoComponent },
        ] }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }