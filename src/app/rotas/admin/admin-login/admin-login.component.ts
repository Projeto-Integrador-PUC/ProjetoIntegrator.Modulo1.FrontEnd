import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  public mensagemErro = '';
  public loading = false;

  public credenciaisForm = new FormGroup({
    usuario: new FormControl('', { validators: [ Validators.required ], nonNullable: true }),
    senha: new FormControl('', { validators: [ Validators.required ], nonNullable: true }),
  });

  constructor(
    private adminService: AdminService,
    private router: Router,
  ) { }

  public logar(): void {
    if (this.credenciaisForm.invalid) return;

    const { usuario, senha } = this.credenciaisForm.value;

    if (!usuario || !senha) return;

    this.mensagemErro = '';
    this.loading = true;
    this.adminService.logar(usuario, senha).subscribe({
      next: (sucesso: boolean) => {
        if (sucesso) {
          this.router.navigate(['/admin/produtos']);
        } else {
          this.mensagemErro = 'Usuário ou senha inválidos';
        }
        this.loading = false;
      },
      error: () => {
        this.mensagemErro = 'Usuário ou senha inválidos';
        this.loading = false;
      },
    });
  }
}
