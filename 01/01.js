// console.log('Hello world');
// NUNCA se debe usar 'var' en React, Vue y Angular
// esto se debe a que no habra integridad dentro del programa
// var -> let,const

let nombre = "Jose Carrasco";

// scope, y decla
let apellido = "Encinas";
console.log(apellido);
if(true){
    let apellido = "Carrasco";
    console.log(apellido);
}
console.log(apellido);