function sumatoria(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
const numeros = [1, 2, 3, 4, 5];
const resultado = sumatoria(numeros);
console.log("El resultado de la sumatoria de los numeros:"+numeros+" es: "+resultado); 

