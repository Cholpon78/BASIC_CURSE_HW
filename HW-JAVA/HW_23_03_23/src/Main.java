import java.util.Scanner;

public class Main {
    // Глобальные переменные
    byte byteVariable;
    short shortVariable;
    int intVariable;
    long longVariable;
    float floatVariable;
    double doubleVariable;
    char charVariable;
    boolean booleanVariable;

    public static void main(String[] args) {
        // Локальные переменные
        byte byteLocal;
        short shortLocal;
        int intLocal;
        long longLocal;
        float floatLocal;
        double doubleLocal;
        char charLocal;
        boolean booleanLocal;

        // Считывание значений из консоли
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите byte: ");
        byteLocal = scanner.nextByte();
        System.out.println("Введите short: ");
        shortLocal = scanner.nextShort();
        System.out.println("Введите int: ");
        intLocal = scanner.nextInt();
        System.out.println("Введите long: ");
        longLocal = scanner.nextLong();
        System.out.println("Введите float: ");
        floatLocal = scanner.nextFloat();
        System.out.println("Введите double: ");

    }
}


