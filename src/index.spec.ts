import { calcularFactorial, valorEnFibonacci } from './ejercicio2';

describe('Función Factorial', () => {
    test('el factorial de 6 debe salir 720', () => {
        expect(calcularFactorial(6)).toBe(720);
    });

    test('el factorial de 0 debe ser 1', () => {
        expect(calcularFactorial(0)).toBe(1);
    });
});

describe('Función Fibonacci', () => {
    test('el veintiavo elemento de Fibonacci debe ser 6765', () => {
        expect(valorEnFibonacci(20)).toBe(6765);
    });

    test('el primer elemento de Fibonacci debe ser 0', () => {
        expect(valorEnFibonacci(0)).toBe(0);
    });
});