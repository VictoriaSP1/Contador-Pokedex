import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './app.interface';
import { ApiState } from './app.interface';
import { DecrementarAction, IncrementarAction } from './states/contador/contador.actions';
import { PokeApiService } from '././services/poke-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'redux-app';
  urlApi: string = 'https://pokeapi.co/api/v2/pokemon'
  contador: number = 0;
  Pokemon: any = [];

  constructor ( private store:Store<AppState>, 
                private pokemonService: PokeApiService,
                private storeApi:Store<ApiState>) {

    //El contador devuelve directamente en consola (state) el
    //parámetro contador, se suscribe e iguala la var contador
    //de app.component.ts a la que se devuelve por suscripción 
    this.store.select('contador').subscribe (
      contador => {
        this.contador = contador;
      }
    )
    
    this.storeApi.select('getPokemones').subscribe (
      getPokemones => {
        this.Pokemon = getPokemones;
      }
    )

  }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.limpiarSet();
    const accion = new IncrementarAction();
    this.store.dispatch( accion );
  }

  decrementar(): void {
    this.limpiarSet();
    const accion = new DecrementarAction();
    this.store.dispatch( accion );
  }

  obtenerPokemon () {
    this.pokemonService.getPokemon(this.contador)
      .subscribe(
          (data: []) => {
            this.Pokemon = data;
            console.log(this.Pokemon)
          }
      )
      
    this.existePokemon();
  }

  limpiarSet () {
    if (this.Pokemon != null) {
        this.Pokemon = null
    }
  }

  existePokemon () {
    if (this.Pokemon.length == 0) {
      this.limpiarSet
    }
  }

}
