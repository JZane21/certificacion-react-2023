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
Object.seal(ESTUDIANTE);
ESTUDIANTE.FALTAS = 2;
delete ESTUDIANTE.FALTAS;
console.table(ESTUDIANTE);


