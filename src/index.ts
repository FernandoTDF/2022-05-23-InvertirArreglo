let tamanoArreglo:number = Number(prompt("ingrese el tamano del arreglo"));
let arregloNumeros:number[] = new Array(tamanoArreglo);
let indice:number;
let arregloNumerosInvertido:number[] = new Array(tamanoArreglo);
let indiceInvertido:number = tamanoArreglo-1;

for (indice = 0; indice < tamanoArreglo; indice++){
  arregloNumeros[indice] = Number(prompt(`Ingrese el valor del elemento en la posicion ${indice}`));
  arregloNumerosInvertido[indiceInvertido]=arregloNumeros[indice];
  indiceInvertido-=1;
}

console.log(arregloNumeros);
console.log(arregloNumerosInvertido);





