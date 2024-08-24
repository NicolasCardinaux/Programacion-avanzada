// 1. Agregar y Eliminar Elementos
let frutas = ["manzana", "banana", "pera"];
frutas.push("naranja"); // Agregar al final
console.log('Después de push:', frutas);
frutas.pop(); // Eliminar la última fruta
console.log('Después de pop:', frutas);

// 2. Array Bidimensional
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Elemento 5 en la matriz:', matriz[1][1]);

// 3. Iterar sobre un Array
for (let i = 0; i < frutas.length; i++) {
    console.log('Fruta:', frutas[i]);
}

// 4. Uso de map
function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
}
const numeros = [1, 2, 3, 4];
const numerosCuadrados = elevarAlCuadrado(numeros);
console.log('Números elevados al cuadrado:', numerosCuadrados);

// 5. Uso de filter
function filtrarMayoresDe(numeros, valorReferencia) {
    return numeros.filter(numero => numero > valorReferencia);
}
const numerosFiltrados = filtrarMayoresDe(numeros, 2);
console.log('Números mayores que 2:', numerosFiltrados);

// 6. Uso de reduce
function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
const sumaTotal = sumarElementos(numeros);
console.log('Suma de todos los elementos:', sumaTotal);

// 7. Uso de some
const hayMayorQueDiez = numeros.some(numero => numero > 10);
console.log('¿Hay algún número mayor que 10?:', hayMayorQueDiez);

// 8. Uso de every
const todosPositivos = numeros.every(numero => numero > 0);
console.log('¿Todos los números son positivos?:', todosPositivos);

// 9. Uso de find
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 35 },
    { nombre: "María", edad: 28 }
];
const personaMayorDe30 = personas.find(persona => persona.edad > 30);
console.log('Primera persona mayor de 30 años:', personaMayorDe30);

// 10. Uso de sort
const palabras = ["perro", "gato", "elefante", "ardilla"];
palabras.sort();
console.log('Palabras ordenadas alfabéticamente:', palabras);
