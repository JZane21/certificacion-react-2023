// Iteradores
const profes = [
    'paul',
    'alexis',
    'eynar',
    'hernan',
    'gil',
    'ricardo'
];

// solo recorre
const ob = profes.forEach(profe => {return profe});

// puede devolverte un valor en lo que recorre
const ob2 = profes.map(profe => {return profe});

console.log(ob);
console.log(ob2);

const libros = [
    { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 432 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 },
    { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }
];

const librosNuevos = [...libros.filter(item => item.paginas>=500)];

console.log(librosNuevos);

const colores = ["rojo","azul","blanco"];

// forma 1
colores.includes("rojo");

// forma 2
// console.log(colores.filter(i => i==="rojo").length !== 0);

const numero = [1,2,3,4,5];

// verificar si existe algun elemento que cumple una condicion
console.log(numero.some(i => i%2===0));
// console.log(numero.filter(i => i%2===0).length!==0);

// verificar si todos los elementos cumplen una condicion
console.log(numero.every(i => i%2===0));
// console.log(numero.filter(i => i%2===0).length===numero.length);

// sumar/restar/etc elementos de una lista
console.log(numero.reduce((a,b) => a+b));

