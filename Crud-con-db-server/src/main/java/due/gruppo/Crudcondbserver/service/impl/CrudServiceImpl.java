/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.service.impl;

import due.gruppo.Crudcondbserver.model.Prodotto;
import due.gruppo.Crudcondbserver.repository.ProdottoRepository;
import due.gruppo.Crudcondbserver.service.CrudService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lenovo
 */
@Service
public class CrudServiceImpl implements CrudService{
    
    @Autowired
    ProdottoRepository prodottoRepository;
    

    @Override
    public List<Prodotto> rimuovi(Prodotto p) {
        prodottoRepository.delete(p);
        return aggiornaLista();
    }

    @Override
    public List<Prodotto> cerca(String codice) {
        return prodottoRepository.findByCodiceContains(codice);
    }
    
    @Override
    public List<Prodotto> conferma(Prodotto p) {
        prodottoRepository.save(p);
         return aggiornaLista();
    }
    
    @Override
     public List<Prodotto> aggiornaLista(){
         return prodottoRepository.findAll();
     }

    }
    
    
