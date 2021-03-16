/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.dto;

import due.gruppo.Crudcondbserver.model.Prodotto;
import java.util.List;

/**
 *
 * @author lenovo
 */
public class ListaProdottiDto {
    
    List<Prodotto> prodotti;

    public ListaProdottiDto(List<Prodotto> prodotti) {
        this.prodotti = prodotti;
    }

    public List<Prodotto> getProdotti() {
        return prodotti;
    }

    public void setProdotti(List<Prodotto> prodotti) {
        this.prodotti = prodotti;
    }

    @Override
    public String toString() {
        return "ListaProdottiDto{" + "prodotti=" + prodotti + '}';
    }

    public ListaProdottiDto() {
    }
    
    
}
