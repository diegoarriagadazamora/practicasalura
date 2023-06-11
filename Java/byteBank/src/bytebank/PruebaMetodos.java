package bytebank;

public class PruebaMetodos {
    
    static void main(String[] args) {
        
        Cuenta miCuenta = new Cuenta();
        miCuenta.saldo = 300;
        System.out.println("Su saldo es; " + miCuenta.saldo);
        
        miCuenta.depositar(200);
        System.out.println("Has depositado " + "Tu nuevo saldo es; " + miCuenta.saldo);
        
       miCuenta.retirar(100);
        System.out.println("Has retirado " + "Tu nuevo saldo es; " + miCuenta.saldo);
    
        Cuenta cuentaDeJimena = new Cuenta();
        cuentaDeJimena.depositar(1000);
        boolean puedeTransferir = cuentaDeJimena.transferir(400, miCuenta);
        
        if(puedeTransferir){
            System.out.println("Transferencia Exitosa!!!");
        }else {
            System.out.println("No es posible");
        }
        
        System.out.println("La cuenta de Jimena tiene; " +cuentaDeJimena.saldo);
        System.out.println("Tu nuevo saldo es; " + miCuenta.saldo);
    }
    
}