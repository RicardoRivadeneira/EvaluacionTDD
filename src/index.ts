// index.ts
import { calcularFactorial, valorEnFibonacci } from './ejercicio2';

const numeroParaFactorial = 4;
const posicionEnFibonacci = 10;

console.log(`El factorial de ${numeroParaFactorial} es ${calcularFactorial(numeroParaFactorial)}`);
console.log(`El valor en la posición ${posicionEnFibonacci} de la sucesión de Fibonacci es ${valorEnFibonacci(posicionEnFibonacci)}`);
