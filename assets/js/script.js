let alto = prompt("Ingrese el alto del rectángulo (cm)");
for (let i = 0; i<2; i++){
    if (alto>0){
        break;
    } else if (alto == 0) {
        alto = prompt("Valor no ingresado. Ingrese el alto del rectángulo (cm)");
    }
}

let ancho = prompt("Ingrese el ancho del rectángulo (cm)");
if (ancho == 0){
        ancho = prompt("No se ingreso un valor para ancho, vuelva a aceptar para confirmar el cálculo como un cuadrado, si no, ingrese un valor para el ancho (cm)");
}

const opPerimetro = (a, b) => (2 * a) + (2 * b);
const opArea = (a, b) => a * b;

let perimetro;
if (ancho == 0){
    perimetro = opPerimetro(alto, alto);
} else {
    perimetro = opPerimetro (alto, ancho);
}

let area;
if (ancho == 0){
    area = opArea(alto, alto);
} else{
    area = opArea(alto, ancho);
}

let resultado;
if ((alto == ancho) || (ancho == 0)){
    resultado = `Es un cuadrado.\nPerimetro: ${perimetro} cm\nArea: ${area} cm²`;
}else {
    resultado = `Es un rectángulo.\nPerimetro: ${perimetro} cm\nArea: ${area} cm²`;
}

alert(resultado);