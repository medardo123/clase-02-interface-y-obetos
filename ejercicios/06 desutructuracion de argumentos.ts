interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 50,
};

const tv: Producto = {
  desc: 'Samsung',
  precio: 100,
};

const movil: Producto = {
  desc: 'Iphone',
  precio: 450,
};

function calcularIva(productos: Producto[]): [string, number, number, number] {
  let total = 0;
  let pro = 'Productos: ';
  productos.forEach(({ precio, desc }) => {
    total += precio;
    pro += desc + ': precio C/U:' + precio + ' ';
  });
  let iva = total * 0.12;
  let totaliva = total + iva;

  return [pro, totaliva, iva, total];
}

const articulos = [telefono, tv, movil];
const isv = calcularIva(articulos);
const [pro, totaliva, iva, total] = isv;

console.log(pro);
console.log('subtotal:', total);
console.log('iva:', iva);
console.log('Total:', totaliva);
