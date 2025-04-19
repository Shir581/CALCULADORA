let Pantalla = document.getElementById("pantalla")
let operacion = "";

function agregarNumero(numero){
    operacion += numero;
    actualizarPantalla();
}

function agregarOperador(operador){
    if(operacion !== "" && !/[\+\-\*\/]$/.test(operacion)){
        operacion += operador;
        actualizarPantalla();}
    }

function calcularResultado() {
    try{
        operacion = eval(operacion).toString();
        actualizarPantalla();
    } catch (error){
        operacion = "Error";
    }
}

function limpiarPantalla() {
    operacion = "";
    actualizarPantalla();
}

function actualizarPantalla(){
    pantalla.value = operacion;
}
