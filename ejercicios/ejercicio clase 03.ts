function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(numero: number, otronumero?: number, base: number = 2) {
  return numero * base;
}

const resultado = multiplicar(5, 2, 5);
console.log(resultado);
