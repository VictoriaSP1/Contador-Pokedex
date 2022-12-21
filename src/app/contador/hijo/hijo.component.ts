import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: []
})
export class HijoComponent implements OnInit{
  @Input() contador:number = 0; 
  @Output() cambioContador = new EventEmitter<number>();

  constructor () {}

  ngOnInit(): void {
    
  }

  multiplicar(): void {
    this.contador*=2;
    this.cambioContador.emit(this.contador);
  }

  dividir(): void {
    this.contador/=2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador:number): void {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);

  }

}
