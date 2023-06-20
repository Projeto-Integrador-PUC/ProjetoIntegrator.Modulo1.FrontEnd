import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularFreteDialogComponent } from './calcular-frete-dialog.component';

describe('CalcularFreteDialogComponent', () => {
  let component: CalcularFreteDialogComponent;
  let fixture: ComponentFixture<CalcularFreteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularFreteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularFreteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
