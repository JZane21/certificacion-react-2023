// funciones
function saludar() {
    console.log("hola 1");
};
saludar();

const saludar2 = function() {
    console.log("hola 2");
};
saludar2();

// arrow functions
// prototipado
// no tienen un scope interno, comparten con uno que ya existe
const saludar3 = () => {
    console.log("hola 3");
};
saludar3();