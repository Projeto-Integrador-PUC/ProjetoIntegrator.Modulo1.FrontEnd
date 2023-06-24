import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import { CartaoCreditoForms } from '../../interfaces/formulario-cartao-credito.interface';

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrls: ['./cartao-credito.component.scss'],
})
export class CartaoCreditoComponent implements OnInit {
  public formularioCartaoCredito!: FormGroup<CartaoCreditoForms>;

  get numeroCartaoInvalido(): boolean {
    return this.formularioCartaoCredito.controls.numeroCartao.errors?.['invalidCreditCardError'];
  }

  get vencimentoInvalido(): boolean {
    return this.formularioCartaoCredito.controls.vencimento.touched &&
      this.formularioCartaoCredito.controls.vencimento.errors?.['invalidCreditCardExpirationDateError'];
  }

  get cvvInvalido(): boolean {
    return this.formularioCartaoCredito.controls.cvv.touched &&
      this.formularioCartaoCredito.controls.cvv.errors?.['invalidCreditCardCvvError'];
  }

  get nomeTitularInvalido(): boolean {
    return this.formularioCartaoCredito.controls.nomeTitular.touched &&
      this.formularioCartaoCredito.controls.nomeTitular.errors?.['invalidCreditCardHolderNameError'];
  }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    this.formularioCartaoCredito = new FormGroup<CartaoCreditoForms>({
      numeroCartao: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, CustomValidators.validCreditCardNumber] }),
      vencimento: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, CustomValidators.validCreditCardExpirationDate] }),
      cvv: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, CustomValidators.validCreditCardCvv] }),
      nomeTitular: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, CustomValidators.validCreditCardHolderName] }),
    });
  }
}
