import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProdutoAdicionadoComponent } from './dialog-produto-adicionado.component';

describe('DialogProdutoAdicionadoComponent', () => {
  let component: DialogProdutoAdicionadoComponent;
  let fixture: ComponentFixture<DialogProdutoAdicionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProdutoAdicionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProdutoAdicionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
