/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.service;

import due.gruppo.Crudcondbserver.dto.ListaProdottiDto;
import due.gruppo.Crudcondbserver.model.Prodotto;
import java.util.List;

/**
 *
 * @author lenovo
 */
public interface CrudService {

    ListaProdottiDto rimuovi(Prodotto p);

    ListaProdottiDto cerca(String criterio);

    ListaProdottiDto conferma(Prodotto p);
    
    ListaProdottiDto aggiornaLista();

}
