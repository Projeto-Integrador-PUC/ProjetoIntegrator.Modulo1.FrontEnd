import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seletor-quantidade',
  templateUrl: './seletor-quantidade.component.html',
  styleUrls: ['./seletor-quantidade.component.scss']
})
export class SeletorQuantidadeComponent implements OnInit {
  @Input() public quantidadeInicial = 1;
  @Output() public alterou = new EventEmitter<number>();

  protected quantidade!: number;

  ngOnInit(): void {
    this.quantidade = this.quantidadeInicial;
  }

  public aumentar(): void {
    this.quantidade += 1;
    this.emitirEvento();
  }

  public diminuir(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
    this.emitirEvento();
  }

  private emitirEvento(): void {
    this.alterou.emit(this.quantidade);
  }
}
