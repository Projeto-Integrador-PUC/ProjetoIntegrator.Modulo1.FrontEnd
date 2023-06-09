import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    SharedModule
  ]
})
export class HomeModule { }
