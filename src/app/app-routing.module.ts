import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjudaComponent } from './rotas/ajuda/ajuda.component';
import { SobreComponent } from './rotas/sobre/sobre.component';


const rotas: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./rotas/home/home.module').then(m => m.HomeModule) },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', loadChildren: () => import('./rotas/loja/loja.module').then(m => m.LojaModule) },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'carrinho', loadChildren: () => import('./rotas/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'admin', loadChildren: () => import('./rotas/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
