// Función para calcular el factorial de un número de manera recursiva
export function calcularFactorial(n: number): number {
    if (n === 0) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

// Función para calcular el valor de un elemento según su posición en la sucesión de Fibonacci de manera recursiva
export function valorEnFibonacci(posicion: number): number {
    if (posicion <= 1) {
        return posicion;
    }
    return valorEnFibonacci(posicion - 1) + valorEnFibonacci(posicion - 2);
}
