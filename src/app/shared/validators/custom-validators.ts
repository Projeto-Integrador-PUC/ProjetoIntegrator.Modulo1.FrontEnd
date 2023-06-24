import { AbstractControl } from '@angular/forms';
import { cardholderName, cvv, expirationDate, number } from 'card-validator';

export class CustomValidators {
    public static validCreditCardNumber(control: AbstractControl): { invalidCreditCardError: boolean } | null  {
        const value = control.value;

        return number(value).isPotentiallyValid ? null : { invalidCreditCardError: true };

    }

    public static validCreditCardExpirationDate(control: AbstractControl): { invalidCreditCardExpirationDateError: boolean } | null {
        const value = control.value;

        return expirationDate(value).isValid ? null : { invalidCreditCardExpirationDateError: true };
    }

    public static validCreditCardCvv(control: AbstractControl): { invalidCreditCardCvvError: boolean } | null {
        const value = control.value;

        return cvv(value).isValid ? null : { invalidCreditCardCvvError: true };
    }

    public static validCreditCardHolderName(control: AbstractControl): { invalidCreditCardHolderNameError: boolean } | null {
        const value = control.value;

        return cardholderName(value).isValid ? null : { invalidCreditCardHolderNameError: true };
    }
}