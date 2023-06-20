import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormularioEnvio } from '../interfaces/formulario-envio.interface';
import { Entrega } from '../models/entrega/entrega';

@Component({
  selector: 'app-detalhes-envio',
  templateUrl: './detalhes-envio.component.html',
  styleUrls: ['./detalhes-envio.component.scss']
})
export class DetalhesEnvioComponent {
  public formulario!: FormGroup<FormularioEnvio>;

  @Input() entrega!: Entrega;
  @Output() validacao = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.inicializarFormulario();
    this.entrega.onChanges.subscribe(() => {
      if (this.entrega.endereco) {
        this.formulario.patchValue({
          logradouro: this.entrega.endereco.logradouro + ', ' + this.entrega.endereco.bairro,
          cidade: this.entrega.endereco.localidade,
          estado: this.entrega.endereco.uf,
          cep: this.entrega.endereco.cep,
          complemento: this.entrega.endereco.complemento,
        });
      }
    });
    this.formulario.valueChanges.subscribe(() => {
      if (this.formulario.valid && this.entrega.selecionada) {
        this.validacao.emit(true);
      } else {
        this.validacao.emit(false);
      }
    });
    this.entrega.onChanges.subscribe(() => {
      if (this.formulario.valid && this.entrega.selecionada) {
        this.validacao.emit(true);
      } else {
        this.validacao.emit(false);
      }
    });
  }

  private inicializarFormulario(): void {
    this.formulario = new FormGroup<FormularioEnvio>({
      nome: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      sobrenome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      logradouro: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      complemento: new FormControl(''),
      cidade: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      estado: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      cep: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      freteGratis: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
    });
  }

  public calcularEntregas(endereco: string): void {
    this.entrega.calcularFrete(endereco);
  }

  public cepDigitado(): void {
    const cep = this.formulario.get('cep')?.value;
    if (cep?.length === 8) {
      this.entrega.obterEndereco(cep);
    }
  }
}
