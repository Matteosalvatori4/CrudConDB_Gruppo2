import { Prodotto } from "./Prodotto";

interface State {

    prodotto: Prodottos;

    aggiungi();

    seleziona();

    rimuovi();

    modifica();

    cerca();

    annulla();

    conferma(b: boolean);
}

export class Prodottos {

    statoCorrente: State;
    public ricerca: State;
    public visualizza: State;
    public rimuovi: State;
    public aggiungi: State;
    public modifica: State;

    constructor(p: Prodottos) {
        this.ricerca = new Ricerca();
        this.visualizza = new Visualizza();
        this.rimuovi = new Rimuovi();
        this.modifica = new Modifica();
        this.aggiungi = new Aggiungi();
        
        this.setState(this.ricerca);
    }

    public getState(): State {
        return this.statoCorrente
    }

    public setState(s: State) {
        this.statoCorrente = s;
    }
}

class Ricerca implements State {

    public prodotto: Prodottos;

    constructor() { }

    annulla() {
        console.log("Evento Inatteso");
    }
    conferma() {
        console.log("Evento Inatteso");
    }

    cerca() {
        console.log("Ricerca effettuata");
    }
    aggiungi() {
        this.prodotto.setState(this.prodotto.aggiungi);
    }
    seleziona() {
        this.prodotto.setState(this.prodotto.visualizza);
    }
    rimuovi() {
        console.log("Evento Inatteso");
    }
    modifica() {
        console.log("Evento Inatteso");
    }
}

class Aggiungi implements State {

    public prodotto: Prodottos;

    constructor() { }
    annulla() {
        this.prodotto.setState(this.prodotto.ricerca);
    }
    conferma(b: boolean) {
        if (b) {
            this.prodotto.setState(this.prodotto.visualizza);
        } else {
            console.log("Conferma non valida");
        }

    }
    seleziona() {
        console.log("Evento Inatteso");
    }

    aggiungi() {
        console.log("Evento Inatteso");
    }
    cerca() {
        console.log("Evento Inatteso");
    }
    rimuovi() {
        console.log("Evento Inatteso");
    }
    modifica() {
        console.log("Evento Inatteso");
    }


}

class Modifica implements State {

    public prodotto: Prodottos;

    constructor() { }

    annulla() {
        this.prodotto.setState(this.prodotto.visualizza);
    }
    conferma(b: boolean) {
        this.prodotto.setState(this.prodotto.visualizza);
    }
    seleziona() {
        console.log("Evento Inatteso");
    }
    aggiungi() {
        console.log("Evento Inatteso");
    }
    cerca() {
        console.log("Evento Inatteso");
    }
    rimuovi() {
        console.log("Evento Inatteso");
    }
    modifica() {
        console.log("Evento Inatteso");
    }
}
class Rimuovi implements State {

    public prodotto: Prodottos;

    constructor() { }

    annulla() {
        this.prodotto.setState(this.prodotto.visualizza);
    }
    conferma(b: boolean) {
        this.prodotto.setState(this.prodotto.ricerca);
    }
    seleziona() {
        console.log("Evento Inatteso");
    }
    aggiungi() {
        console.log("Evento Inatteso");
    }
    cerca() {
        console.log("Evento Inatteso");
    }
    rimuovi() {
        console.log("Evento Inatteso");
    }
    modifica() {
        console.log("Evento Inatteso");
    }


}
class Visualizza implements State {

    public prodotto: Prodottos;

    constructor() { }
    annulla() {
        console.log("Evento Inatteso");
    }
    conferma(b: boolean) {
        console.log("Evento Inatteso");
    }
    seleziona() {
        console.log("Oggetto Selezionato");
    }
    aggiungi() {
        this.prodotto.setState(this.prodotto.aggiungi);
    }
    cerca() {
        this.prodotto.setState(this.prodotto.ricerca);
    }
    rimuovi() {
        this.prodotto.setState(this.prodotto.rimuovi);
    }
    modifica() {
        this.prodotto.setState(this.prodotto.modifica);
    }



}
