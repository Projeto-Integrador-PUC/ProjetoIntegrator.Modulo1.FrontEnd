import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-produto-adicionado',
  templateUrl: './dialog-produto-adicionado.component.html',
  styleUrls: ['./dialog-produto-adicionado.component.scss']
})
export class DialogProdutoAdicionadoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogProdutoAdicionadoComponent>,
    private router: Router,
  ) { }

  public fecharDialog(): void {
    this.dialogRef.close();
  }

  public irParaCarrinho(): void {
    this.router.navigate(['/carrinho']);
    this.dialogRef.close();
  }
}
