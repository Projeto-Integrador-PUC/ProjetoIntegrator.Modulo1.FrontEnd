import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './rotas/ajuda/ajuda.component';
import { CarrinhoComponent } from './rotas/carrinho/carrinho.component';

import { HomeComponent } from './rotas/home/home.component';
import { LojaComponent } from './rotas/loja/loja.component';
import { SobreComponent } from './rotas/sobre/sobre.component';


const rotas: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'admin', loadChildren: () => import('./rotas/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
