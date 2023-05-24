import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoCarrinhoComponent } from './conteudo-carrinho.component';

describe('ConteudoCarrinhoComponent', () => {
  let component: ConteudoCarrinhoComponent;
  let fixture: ComponentFixture<ConteudoCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
