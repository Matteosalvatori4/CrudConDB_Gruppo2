/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.service;

import due.gruppo.Crudcondbserver.model.Prodotto;

/**
 *
 * @author lenovo
 */
public interface CrudService {

    void rimuovi(Prodotto p);

    void cerca();

    void annulla();

    void conferma(Prodotto p);

    void modifica();
    
}
