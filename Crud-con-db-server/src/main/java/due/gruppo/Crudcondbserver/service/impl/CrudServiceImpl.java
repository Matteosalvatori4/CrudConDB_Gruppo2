/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.service.impl;

import due.gruppo.Crudcondbserver.model.Prodotto;
import due.gruppo.Crudcondbserver.repository.ProdottoRepository;
import due.gruppo.Crudcondbserver.service.CrudService;
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
    public void rimuovi(Prodotto p) {
        prodottoRepository.delete(p);
    }

    @Override
    public void cerca() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void annulla() {
    }
    
    @Override
    public void conferma(Prodotto p) {
        prodottoRepository.save(p);
       
    }

    @Override
    public void modifica() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    }
    
    
