// Función para comprobar si una palabra es un palíndromo.
export function esPalindromo(palabra: string): boolean {
    const palabraNormalizada = palabra.toLowerCase().replace(/[\W_]/g, '');
    return palabraNormalizada === palabraNormalizada.split('').reverse().join('');
}

// Función para comprobar si dos palabras son anagramas.
export function sonAnagramas(palabra1: string, palabra2: string): boolean {
    const normalizar = (palabra: string) => palabra.toLowerCase().replace(/[\W_]/g, '').split('').sort().join('');
    return normalizar(palabra1) === normalizar(palabra2);
}

// Función para comprobar si una palabra es un isograma.
export function esIsograma(palabra: string): boolean {
    const palabraNormalizada = palabra.toLowerCase().replace(/[\W_]/g, '');
    const letrasUnicas = new Set(palabraNormalizada);
    return letrasUnicas.size === palabraNormalizada.length;
}

// Función para ejecutar todas las comprobaciones.
export function analizarPalabras(palabra1: string, palabra2: string) {
    console.log(`Palíndromo Palabra 1: ${esPalindromo(palabra1)}`);
    console.log(`Palíndromo Palabra 2: ${esPalindromo(palabra2)}`);
    console.log(`Anagramas: ${sonAnagramas(palabra1, palabra2)}`);
    console.log(`Isograma Palabra 1: ${esIsograma(palabra1)}`);
    console.log(`Isograma Palabra 2: ${esIsograma(palabra2)}`);
}
