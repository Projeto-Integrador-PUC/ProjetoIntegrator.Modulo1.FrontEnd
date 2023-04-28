import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminService } from './admin.service';



@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    GerenciarProdutosComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    AdminComponent,
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
