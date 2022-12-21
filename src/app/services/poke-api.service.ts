import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contadorReducer } from '../states/contador/contador.reducer'; 

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  urlApi: string = 'https://pokeapi.co/api/v2/pokemon'
  getResults: any;

  constructor( private http: HttpClient) { }

  getPokemon (idPokemon: number) {

    this.getResults = this.http.get(this.urlApi+'/'+idPokemon);
    
    return this.getResults;
  }

  getFormPokemon (idPokemon: number) {
    
    this.getResults = this.http.get(this.urlApi+'-form/'+idPokemon);
    
    return this.getResults;
  }

}
