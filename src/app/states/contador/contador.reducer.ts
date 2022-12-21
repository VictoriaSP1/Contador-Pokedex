import { Action } from "@ngrx/store";
import { Decrementar, Incrementar } from "./contador.actions";

export function contadorReducer (state: number = 10, action: Action) {
    switch (action.type) {
        case Incrementar:
            return state+1;
        case Decrementar:
            return state-1;
        default:
            return state;
    }
}

