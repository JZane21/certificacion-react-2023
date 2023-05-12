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
let edadGil = BigInt(20493214123041238414231423959082340502348572349875209387429);
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





