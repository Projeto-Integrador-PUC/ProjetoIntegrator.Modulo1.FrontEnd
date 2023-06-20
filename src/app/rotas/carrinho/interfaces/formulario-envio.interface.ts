import { FormControl } from '@angular/forms';

export interface FormularioEnvio {
    nome: FormControl<string>;
    sobrenome: FormControl<string>;
    logradouro: FormControl<string>;
    complemento: FormControl<string | null>;
    cidade: FormControl<string>;
    estado: FormControl<string>;
    cep: FormControl<string>;
    email: FormControl<string>;
    freteGratis: FormControl<boolean>;
}