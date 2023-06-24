import { FormControl } from '@angular/forms';

export interface CartaoCreditoForms {
    numeroCartao: FormControl<string>;
    vencimento: FormControl<string>;
    cvv: FormControl<string>;
    nomeTitular: FormControl<string>;
}