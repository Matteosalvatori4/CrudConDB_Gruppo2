import { AddEvent, SelezionaEvent } from "./eventi";
import { State } from "./State";

export class RicercaState implements State {
    next(e: Event): State {
        if (e instanceof AddEvent) {
            return new AggiungiState();
        }else if (e instanceof SelezionaEvent){
            return new VisualizzaState();
        }else if (e instanceof RicercaState){
            return new RicercaState();
        }

        };
}
   
}

export class AggiungiState implements State {
    next(event: Event): State {
        throw new Error("Method not implemented.");
    }

}

export class VisualizzaState implements State {
    next(event: Event): State {
        throw new Error("Method not implemented.");
    }

}

export class RimuoviState implements State {
    next(event: Event): State {
        throw new Error("Method not implemented.");
    }

}

export class ModificaState implements State {
    next(event: Event): State {
        throw new Error("Method not implemented.");
    }

}