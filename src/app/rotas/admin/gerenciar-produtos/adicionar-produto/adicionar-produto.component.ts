import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject } from 'rxjs';
import { Categoria } from 'src/app/shared/interfaces/categoria';
import { Produto } from 'src/app/shared/interfaces/produto';
import { RotasService } from 'src/app/shared/services/rotas.service';
import { AdminService } from '../../admin.service';
import { FormularioProduto } from './interfaces/formulario-produto';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent {

  public categorias: Categoria[] = [];
  public alteracaoImagem!: Event;
  public formulario!: FormGroup<FormularioProduto>;
  public loading$ = new BehaviorSubject<boolean>(false);

  get imagem(): string {
    return this.formulario.controls.imagem.value;
  }

  constructor(
    private rotas: RotasService,
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.obterCategorias();
  }

  public voltar(): void {
    this.rotas.voltar();
  }

  public recortarImagem(event: ImageCroppedEvent): void {
    this.formulario.controls.imagem.setValue(event.base64 ?? '');
  }
  
  public alterarImagem(event: Event): void {
    this.alteracaoImagem = event;
  }

  public adicionarProduto(): void {
    this.loading$.next(true);
    const produto: Produto = {
      nome: this.formulario.controls.nome.value,
      descricao: this.formulario.controls.descricao.value,
      preco: this.formulario.controls.preco.value,
      quantidade: this.formulario.controls.quantidade.value,
      categoria: this.formulario.controls.categoria.value,
      imagem: this.formulario.controls.imagem.value,
      destaque: this.formulario.controls.destaque.value,
    };
    this.adminService.adicionarProduto(produto)
      .subscribe(() => this.voltar())
      .add(() => this.loading$.next(false));
  }

  public obterCategorias(): void {
    this.adminService.obterCategorias().subscribe(categorias => this.categorias = categorias);
  }

  private inicializarFormulario(): void {
    this.formulario = new FormGroup<FormularioProduto>({
      nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      descricao: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      preco: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0.01)] }),
      quantidade: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
      categoria: new FormControl(0, { nonNullable: true, validators: [Validators.required] }),
      imagem: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      destaque: new FormControl(false, { nonNullable: true }),
    });
  }
}
