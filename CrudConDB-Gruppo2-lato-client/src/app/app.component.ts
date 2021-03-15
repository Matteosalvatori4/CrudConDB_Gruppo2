import { Component } from '@angular/core';
import { Prodotto } from './Prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudConDB-Gruppo2-lato-client';
  prodotto:Prodotto;

  aggiungiModifica(){}

  rimuovi(){}

  cerca(s:string){}

  seleziona(p: Prodotto){}
}