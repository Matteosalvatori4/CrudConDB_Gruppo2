import { AddEvent, ConfermaEvent, ModificaEvent, RicercaEvent, AnnullaEvent, RimuoviEvent, SelezionaEvent } from './automa/eventi';
import { Automabile } from './automa/state';
import { Automa } from './automa/automa';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto';
import { Event } from './automa/event';
import { ProdottoDto } from 'src/app/prodotto-dto';
import { ListaProdottiDto } from 'src/app/ListaProdottiDto';
import { CriterioDiRicercaDto } from './criterioDiRicercaDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile, OnInit {
  prodotto: Prodotto = new Prodotto();
  prodotti: Prodotto[] = [];

  searchCriterion: string = "";
  automa: Automa;

  // proprietà gui
  buttonNuovaVisible: boolean = false;
  formDivVisible: boolean = false;
  campiNonEditabili: boolean = false;
  confAnnVisible: boolean = false;
  searchVisible: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // TODO: caricare lista prodotti all'inizio
    this.aggiorna();
    this.automa = new Automa(this);
  }

  goToAggiungi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToModifica() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToRicerca() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = false;
    // this.campiNonEditabili = true;
    // this.confAnnVisible = true;
    this.searchVisible = true;
  }

  goToRimuovi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToVisualizza() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = false;
    this.searchVisible = true;
  }

  nuova() {
    this.automa.next(new AddEvent());
  }

  modifica() {
    this.automa.next(new ModificaEvent());
  }

  conferma() {
    let dto: ProdottoDto = new ProdottoDto();
    dto.prodotto = this.prodotto;
    let oss: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      "http://localhost:8080/conferma", dto);
    oss.subscribe(v => this.prodotti = v.ListaProdotti);
    this.prodotto.codice = "";
    this.prodotto.descrizione = "";
    this.prodotto = new Prodotto();
    this.automa.next(new ConfermaEvent());
  }

  annulla() {
    this.prodotto.codice = "";
    this.prodotto.descrizione = "";
    this.prodotto = new Prodotto();
    this.automa.next(new AnnullaEvent());
  }

  rimuovi(p: Prodotto) {
    let dto: ProdottoDto = new ProdottoDto;
    dto.prodotto = p;
    // chiamo il servizio REST e con la risposta aggiorno la tabella
    let ox: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      "http://localhost:8080/rimuovi",
      dto
    );
    ox.subscribe(v => this.prodotti = v.ListaProdotti);


    this.automa.next(new RimuoviEvent());
  }

  cerca() {
    let dto: CriterioDiRicercaDto= new CriterioDiRicercaDto;
    dto.criterio= this.searchCriterion;
    let ox: Observable<ListaProdottiDto> = this.http.post<ListaProdottiDto>(
      "http://localhost:8080/cerca",
      dto
    );
    ox.subscribe(v => this.prodotti = v.ListaProdotti);
    this.automa.next(new RicercaEvent());
  }

  seleziona(prod: Prodotto) {
    this.automa.next(new SelezionaEvent());
  }

  aggiorna() {
    let oss: Observable<ListaProdottiDto> = this.http.get<ListaProdottiDto>('http://localhost:8080/aggiorna-lista');
    oss.subscribe(r => this.prodotti = r.ListaProdotti);
  }
}