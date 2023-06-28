import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodePagamentoComponent } from './qr-code-pagamento.component';

describe('QrCodePagamentoComponent', () => {
  let component: QrCodePagamentoComponent;
  let fixture: ComponentFixture<QrCodePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodePagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
