// un objeto en js
const ESTUDIANTE = {
    NOMBRE : "hugo",
    APELLIDO : "apaza",
    EDAD : 20,
}

console.log(ESTUDIANTE);
console.table(ESTUDIANTE);

ESTUDIANTE.EDAD = 21;
console.table(ESTUDIANTE);

// congelar un objeto, en si, todo lo que se encuentra en él
// Object.freeze(ESTUDIANTE);
// ESTUDIANTE.EDAD = 22;
// console.table(ESTUDIANTE);

// Agregar atributo
ESTUDIANTE.PROMEDIO = 97.6;
console.table(ESTUDIANTE);

// Eliminar atributo
delete ESTUDIANTE.PROMEDIO;
delete ESTUDIANTE.EDAD;
console.table(ESTUDIANTE);

// Si queremos bloquear el poder agregar o eliminar
// atributos en un objeto
// Object.seal(ESTUDIANTE);
// ESTUDIANTE.FALTAS = 2;
// delete ESTUDIANTE.FALTAS;
// console.table(ESTUDIANTE);

// Destructurar objetos
const { PROMEDIO } = ESTUDIANTE;

const { NOMBRE: nombreEstudiante, APELLIDO: apellidoEstudiante } = ESTUDIANTE;

console.log(nombreEstudiante,apellidoEstudiante);

// Combinar objetos

const auto = {
    placa: "5719HHP",
    marca: "Ford",
};

const conductor = {
    nombre: "Jose",
    licencia: "6746987",
};

const year = 2023;
// forma 1 pero larga
// const nuevoObjeto = {
//     placa: auto.placa
//     year
// };

// forma 2 pero corta
const nuevoObjeto = {
    ...auto,
    ...conductor,
    licencia: "3421423",
    year,
}
console.table(nuevoObjeto);

// "ARRAYS"

// Objeto no existe array
const array = [2, 4, "paul", () => {alert("HUGOOOOO");}, 3.14159];

// destructurar arrays
const [laNota, practica, profe,f, pi] = array;

console.log(profe);
console.log(f);

const objeto3 = [...array,...Object.keys(nuevoObjeto).map(key => nuevoObjeto[key]),2];

objeto3.forEach(i => console.log(i));

