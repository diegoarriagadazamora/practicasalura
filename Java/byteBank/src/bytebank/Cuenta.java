package bytebank;

public class Cuenta {

    private double saldo;
    int agencia;
    int numero;
    Cliente titular;
    
    public void depositar(double valor){
        //saldo = saldo + valor;
        //mismo resultado de arriba con this
        this.saldo = this.saldo + valor;
    }
    
    // dentro de la clase Cuenta
public void deposita(double valor){

    this.saldo += valor;
}

public boolean saca(double valor){

    if(this.saldo >= valor){
        this.saldo -= valor;
        return true;
    } else {
        return false;
    }
}

public boolean transfiere(double valor, Cuenta destino){

    if(this.saldo >= valor){
        this.saldo -= valor;
        destino.deposita(valor);    
        return true;
    }
    return false;
}
    
    public boolean retirar (double valor){
        if (this.saldo >= valor){
        this.saldo = this.saldo - valor;
        return true;
                } else {
        return false;
        }
    }
    public boolean transferir(double valor, Cuenta cuenta){
        if (this.saldo >= valor){
            this.saldo = this.saldo - valor;
            cuenta.depositar(valor);
            return true;
        }else {
        return false;
        }
    }
}