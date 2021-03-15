import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaProdottiService } from './lista-prodotti.service';
import { ListaProdottiDto } from './ListaProdottiDto';
import { Prodotto } from './Prodotto';
import { ProdottoDto } from './ProdottoDto';
import { Prodottos } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudConDB-Gruppo2-lato-client';
  prodotto:Prodotto;
  prodottoS: Prodottos;

  constructor(private http: HttpClient, public listaProdotti: ListaProdottiService){
  }

  aggiungiModifica(){
    let dto: ProdottoDto = new ProdottoDto();
    dto.prodotto = this.prodotto;
    const oss: Observable<ListaProdottiDto> = this.http
    .post<ListaProdottiDto>('http://localhost:8080/conferma',dto);
    oss.subscribe(s => this.listaProdotti.prodotti = s.prodotti);
  }

  rimuovi(){}

  cerca(s:string){}

  seleziona(p: Prodotto){}

  nuova(){}

  annulla(){}
}