// tipos de variable

// bool
let cancelado = true;
console.log(typeof cancelado);

// number
let edad = 15;
let dinero = 9.99;
console.log(typeof dinero);

// BigInit
// averiguar para que sirve la n
let edadGil = BigInt(123841423142909809099870987809879878787);
console.log(edadGil);
console.log(typeof edadGil);

// No se puede:
// console.log(edadGil + edad); o en si: number+BigInit

// undefined
let course = null;
// null es un tipo de objeto
console.log(typeof course);

// undefined -> no se sabe que valor
// null -> decir que el valor de algo es nulo

// Lo que ocurre es que undefined es un valor que denota que no
// hay valor porque no se ha definido todavía, mientras que null
// se usa para indicar que no hay valor porque así lo hemos
// querido indicar expresamente.

let nota;
console.log(nota?.nombre);

// Symbol
// cada variable va a crear una instancia diferente
let badani = Symbol("Pablo");
let acker = Symbol("Pablo");

console.log(badani);
console.log(acker);

if(badani === acker){
    console.log("iguales");
}else{
    console.log("diferentes");
}





