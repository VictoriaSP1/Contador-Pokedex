import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: []
})
export class NietoComponent {
  @Input() contador:number = 0; 
  @Output() contadorNieto = new EventEmitter<number>();

  constructor () {}

  reset(): void{
    this.contador=0;
    this.contadorNieto.emit(0);
  }
}
