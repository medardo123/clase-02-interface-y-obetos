interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'fer',
};

const pasajero2: Pasajero = {
  nombre: 'fer',
  hijos: ['luis', 'cralos'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);
