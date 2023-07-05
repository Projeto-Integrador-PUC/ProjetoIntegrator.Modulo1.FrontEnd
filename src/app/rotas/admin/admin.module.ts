import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxMaskDirective } from 'ngx-mask';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { AdicionarProdutoComponent } from './gerenciar-produtos/adicionar-produto/adicionar-produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { TabelaProdutosComponent } from './gerenciar-produtos/tabela-produtos/tabela-produtos.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    GerenciarProdutosComponent,
    AdicionarProdutoComponent,
    TabelaProdutosComponent,
    AdminLoginComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  exports: [
    AdminComponent,
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
