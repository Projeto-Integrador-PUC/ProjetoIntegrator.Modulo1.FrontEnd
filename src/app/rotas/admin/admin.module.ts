import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    GerenciarProdutosComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ImageCropperModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
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
