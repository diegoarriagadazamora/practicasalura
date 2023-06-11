package bytebank;

public class TestReferencias2 {
    public static void main(String[] args) {
        Cliente diego = new Cliente();
        diego.nombre = "Diego";
        diego.documento = "456789";
        diego.telefono = "977432272";
        
        Cuenta cuentaDeDiego = new Cuenta();
        cuentaDeDiego.titular = diego;
        
        System.out.println("Numero de documento " + cuentaDeDiego.titular.documento);
    }
    
}
