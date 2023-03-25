import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './rotas/home/home.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { LojaComponent } from './rotas/loja/loja.component';
import { AjudaComponent } from './rotas/ajuda/ajuda.component';
import { CarrinhoComponent } from './rotas/carrinho/carrinho.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    LojaComponent,
    AjudaComponent,
    CarrinhoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
