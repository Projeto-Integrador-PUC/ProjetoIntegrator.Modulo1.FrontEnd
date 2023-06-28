import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code-pagamento',
  templateUrl: './qr-code-pagamento.component.html',
  styleUrls: ['./qr-code-pagamento.component.scss']
})
export class QrCodePagamentoComponent {
  @Input() public qrCode!: string;
  @Input() public valor!: number;
  @ViewChild('qrCodeImage') public qrCodeElement!: ElementRef<HTMLCanvasElement>;

  public ngAfterViewInit(): void {
    QRCode.toCanvas(this.qrCodeElement.nativeElement, this.qrCode);
  }

  public copiarParaAreaDeTransferencia(): void {
    navigator.clipboard.writeText(this.qrCode);
  }
}
