/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author lenovo
 */
@Entity
public class Prodotto {

    @Id
    private String codice;
    
    @Column
    private String descrizione;

    public Prodotto() {
    }

    public Prodotto(String codice, String descrizione) {
        this.codice = codice;
        this.descrizione = descrizione;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    @Override
    public String toString() {
        return "Prodotto{" + "codice=" + codice + ", descrizione=" + descrizione + '}';
    }

}
