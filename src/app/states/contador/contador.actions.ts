import { Action } from "@ngrx/store";

export const Incrementar = '[Contador] Incrementar';
export const Decrementar = '[Contador] Decrementar';
//export const ObtenerNombrePokemon = '[Pokemon] ObtenerNombrePokemon';

export class IncrementarAction implements Action {
    readonly type = Incrementar;
}

export class DecrementarAction implements Action {
    readonly type = Decrementar;
}

/*export class ObtenerNombrePokemonAction implements Action {
    
    readonly type = ObtenerNombrePokemon;

    constructor (public payloadPokemones: string) {}
}*/

export type acciones =  IncrementarAction |
                        DecrementarAction
                        //ObtenerNombrePokemonAction;