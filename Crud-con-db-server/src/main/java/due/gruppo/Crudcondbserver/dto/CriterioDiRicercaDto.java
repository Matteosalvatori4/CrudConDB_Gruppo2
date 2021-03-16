/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package due.gruppo.Crudcondbserver.dto;

/**
 *
 * @author lenovo
 */
public class CriterioDiRicercaDto {
    String criterio;

    @Override
    public String toString() {
        return "CriterioDiRicercaDto{" + "criterio=" + criterio + '}';
    }

    public String getCriterio() {
        return criterio;
    }

    public void setCriterio(String criterio) {
        this.criterio = criterio;
    }

    public CriterioDiRicercaDto() {
    }

    public CriterioDiRicercaDto(String criterio) {
        this.criterio = criterio;
    }
    
}
