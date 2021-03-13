import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Prodotto} from '../Prodotto';

@Component({
  selector: 'app-tabella-prodotti',
  templateUrl: './tabella-prodotti.component.html',
  styleUrls: ['./tabella-prodotti.component.css']
})
export class TabellaProdottiComponent implements OnInit {
prodotti: Array<Prodotto>;
codiceRicerca: string;
@Output() selezioneEvent: EventEmitter<Prodotto> = new EventEmitter<Prodotto>();
@Output() cercaEvent: EventEmitter<string> = new EventEmitter<string>();
@Output() nuovaEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  cerca(): void {
    this.cercaEvent.emit(this.codiceRicerca);
  }

  seleziona(p: Prodotto): void {
    this.selezioneEvent.emit(p);
  }

  nuova(): void {
    this.nuovaEvent.emit();
  }
}
