import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEnvioComponent } from './detalhes-envio.component';

describe('DetalhesEnvioComponent', () => {
  let component: DetalhesEnvioComponent;
  let fixture: ComponentFixture<DetalhesEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEnvioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
