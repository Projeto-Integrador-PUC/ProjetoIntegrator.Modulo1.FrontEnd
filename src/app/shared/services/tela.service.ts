import { Injectable, OnDestroy, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelaService implements OnDestroy {

  private renderer: Renderer2;
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  private removerListener: () => void;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.removerListener = this.renderer.listen('window', 'resize', () => {
      this.screenWidth.next(window.innerWidth);
    });
  }

  public get largura(): number {
    return this.screenWidth.value;
  }

  public get ehMobile(): boolean {
    return this.screenWidth.value < 800;
  }

  ngOnDestroy(): void {
    this.removerListener();
  }
}
