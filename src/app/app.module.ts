import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, NgxsModuleOptions } from '@ngxs/store';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { provideNgxMask } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './rotas/admin/admin.module';
import { AjudaComponent } from './rotas/ajuda/ajuda.component';
import { LojaComponent } from './rotas/loja/loja.component';
import { SobreComponent } from './rotas/sobre/sobre.component';
import { LinksComponent } from './shared/components/links/links.component';
import { CustomCurrencyMaskConfig } from './shared/constants/ngx-mask-config.const';
import { MatPaginatorPtBrService } from './shared/services/mat-paginator-pt-br.service';

const ngxsOptions: NgxsModuleOptions = {
  selectorOptions: { injectContainerState: false }
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    LojaComponent,
    AjudaComponent,
    HeaderComponent,
    LinksComponent,
    FooterComponent,
  ],
  imports: [
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    NgxsModule.forRoot([], ngxsOptions),
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false } },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: MatPaginatorIntl, useClass: MatPaginatorPtBrService },
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
