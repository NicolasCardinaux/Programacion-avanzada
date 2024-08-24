// Ejercicio 1: Función Suma
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); 
console.log(sumar(10, 20)); 

// Ejercicio 2: Función que Multiplica
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5)); 
console.log(multiplicar(7, 6));

// Ejercicio 3: Función con Parámetro por Defecto
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}`;
}

console.log(saludar()); 
console.log(saludar("Ernesto")); 

// Ejercicio 4: Función que Devuelve un Objeto
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

const persona = crearPersona("María", 30);
console.log(persona); 

// Ejercicio 5: Función que Modifica un Objeto
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

actualizarEdad(persona, 35);
console.log(persona); 

// Ejercicio 6: Función Recursiva
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(7)); 

// Ejercicio 7: Función con Función Interna
function despedir() {
    function adios() {
        return "Adiós!";
    }
    return adios();
}

console.log(despedir()); 

// Ejercicio 8: Función que Usa Otra Función
function procesarArray(arr, func) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(func(arr[i]));
    }
    return resultado;
}

const array = [1, 2, 3, 4];
const resultado = procesarArray(array, function(num) {
    return num * 2;
});

console.log(resultado); 

// Ejercicio 9: Función que Devuelve Otra Función
function crearMultiplicador(x) {
    return function(y) {
        return y * x;
    };
}

const multiplicadorPor3 = crearMultiplicador(3);
console.log(multiplicadorPor3(5)); 

// Ejercicio 10: Función Anónima
const sumarAnonima = function(a, b) {
    return a + b;
};

console.log(sumarAnonima(4, 6)); 
