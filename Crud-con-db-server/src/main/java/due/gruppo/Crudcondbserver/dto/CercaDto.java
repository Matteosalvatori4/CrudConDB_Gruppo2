package due.gruppo.Crudcondbserver.dto;

public class CercaDto {

    private String codice;

    public CercaDto() {
    }

    public CercaDto(String codice) {
        this.codice = codice;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    @Override
    public String toString() {
        return "ricercaDto{" +
                "codice='" + codice + '\'' +
                '}';
    }
}
