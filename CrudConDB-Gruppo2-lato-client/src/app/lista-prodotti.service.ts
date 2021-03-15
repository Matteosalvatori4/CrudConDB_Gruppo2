import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaProdottiDto } from './ListaProdottiDto';
import { Prodotto } from './Prodotto';

@Injectable({
  providedIn: 'root'
})
export class ListaProdottiService {
  prodotti: Array<Prodotto>;

  constructor(private http: HttpClient) { 
    this.aggiornaLista();
  }

  aggiornaLista(){
    const oss: Observable<ListaProdottiDto> = this.http
    .get<ListaProdottiDto>('http://localhost:8080/aggiorna-lista');
    oss.subscribe(s => this.prodotti = s.prodotti);
  }
}
