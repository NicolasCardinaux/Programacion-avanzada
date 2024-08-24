// Ejercicio 1: Creación de un Objeto Básico
const libro = {
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    añoDePublicacion: 1985
};

console.log(libro.titulo);
console.log(libro.autor);
console.log(libro.añoDePublicacion);

// Ejercicio 2: Anidación de Objetos
const estudiante = {
    nombre: "María López",
    edad: 25,
    direccion: {
        calle: "Calle 123",
        ciudad: "Buenos Aires",
        pais: "Argentina"
    }
};

console.log(`${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);

// Ejercicio 3: Métodos en Objetos
libro.descripcion = function() {
    return `${this.titulo} fue escrito por ${this.autor}.`;
};

console.log(libro.descripcion());

// Ejercicio 4: Iteración sobre Propiedades de un Objeto
const producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

// Ejercicio 5: Actualización de Propiedades
producto.precio = 1000;
console.log(producto);

// Ejercicio 6: Comprobación de Propiedades
function tienePropiedad(obj, prop) {
    return obj.hasOwnProperty(prop);
}

console.log(tienePropiedad(producto, "precio")); 
console.log(tienePropiedad(producto, "color"));  

// Ejercicio 7: Eliminación de Propiedades
console.log(producto);
delete producto.disponible;
console.log(producto);

// Ejercicio 8: Combinar Objetos
const persona1 = { nombre: "Ana", edad: 28 };
const persona2 = { profesion: "Ingeniera", ciudad: "Madrid" };
const nuevaPersona = Object.assign({}, persona1, persona2);

console.log(nuevaPersona);

// Ejercicio 9: Copiar Objetos
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.nombre = "Carlos Gómez";
console.log(estudiante);
console.log(copiaEstudiante);

// Ejercicio 10: Métodos Getters y Setters
Object.defineProperty(libro, 'año', {
    get: function() {
        return this.añoDePublicacion;
    },
    set: function(nuevoAño) {
        this.añoDePublicacion = nuevoAño;
    }
});

libro.año = 2021;
console.log(libro.año);
