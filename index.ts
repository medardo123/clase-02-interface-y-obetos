import {
  calcularIva,
  Producto,
} from './ejercicios/06-desestructuracion-de-argumentos';

const carritoCompras: Producto[] = [
  {
    desc: 'telefono 1',
    precio: 34,
  },
  {
    desc: 'telefono 2',
    precio: 57,
  },
];

const [total, iva] = calcularIva(carritoCompras);

console.log('total:', total);
console.log('iva:', iva);
