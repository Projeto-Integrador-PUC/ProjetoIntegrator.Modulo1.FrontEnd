import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GerenciarProdutosComponent } from "./gerenciar-produtos/gerenciar-produtos.component";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: '', redirectTo: 'produtos', pathMatch: 'full' },
        { path: 'produtos', component: GerenciarProdutosComponent }
    ] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }