import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarItem } from './side-bar.interfaces';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() close = new EventEmitter<void>();

  sideBarItems: SideBarItem[] = [
    { name: 'Produtos', route: 'produtos', icon: 'shopping_bag' },
  ]
}
