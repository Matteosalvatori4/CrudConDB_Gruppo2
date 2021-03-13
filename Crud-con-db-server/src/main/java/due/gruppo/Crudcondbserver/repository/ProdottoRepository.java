/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.repository;

import due.gruppo.Crudcondbserver.model.Prodotto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 *
 * @author lenovo
 */
public interface ProdottoRepository extends JpaRepository<Prodotto,String>{

    List<Prodotto> findByCodiceContains(String codice);
}
