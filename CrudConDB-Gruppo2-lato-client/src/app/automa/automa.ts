import { State } from "./State";
import { RicercaState } from "./stati";

export class Automa implements State {

    private stato: State;

    constructor() {
        this.stato = new RicercaState();
    }


    next(event: Event): State {
        throw new Error("Method not implemented.");
    }

}