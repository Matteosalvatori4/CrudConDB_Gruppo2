/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.service.impl;

import due.gruppo.Crudcondbserver.dto.ListaProdottiDto;
import due.gruppo.Crudcondbserver.model.Prodotto;
import due.gruppo.Crudcondbserver.repository.ProdottoRepository;
import due.gruppo.Crudcondbserver.service.CrudService;
import java.util.ArrayList;
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
    public ListaProdottiDto rimuovi(Prodotto p) {
        prodottoRepository.delete(p);
        return aggiornaLista();
    }

    @Override
    public ListaProdottiDto cerca(String criterio) {
        List<Prodotto> filtrati =  prodottoRepository.findByCodiceContains(criterio);
        return new ListaProdottiDto(filtrati);
    }
    
    @Override
    public ListaProdottiDto conferma(Prodotto p) {
        prodottoRepository.save(p);
         return aggiornaLista();
    }
    
    @Override
     public ListaProdottiDto aggiornaLista(){
           ListaProdottiDto dto = new ListaProdottiDto();
        List<Prodotto> lista = prodottoRepository.findAll();
        if (lista == null) {
            dto.setProdotti(new ArrayList<>());
        } else {
            dto.setProdotti(lista);
        }
        return dto;
     }

    }
    
    
