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