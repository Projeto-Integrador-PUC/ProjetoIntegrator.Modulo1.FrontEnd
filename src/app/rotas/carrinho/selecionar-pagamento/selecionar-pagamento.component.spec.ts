import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarPagamentoComponent } from './selecionar-pagamento.component';

describe('SelecionarPagamentoComponent', () => {
  let component: SelecionarPagamentoComponent;
  let fixture: ComponentFixture<SelecionarPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarPagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
