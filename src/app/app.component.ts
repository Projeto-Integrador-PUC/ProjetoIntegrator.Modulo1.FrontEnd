import { Component } from '@angular/core';
import { RotasService } from './shared/services/rotas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public rotas: RotasService) { }
}
