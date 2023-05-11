import { FormControl } from '@angular/forms';

export interface FormularioProduto {
    nome: FormControl<string>;
    descricao: FormControl<string>;
    preco: FormControl<number>;
    quantidade: FormControl<number>;
    categoria: FormControl<number>;
    imagem: FormControl<string>;
    destaque: FormControl<boolean>;
}