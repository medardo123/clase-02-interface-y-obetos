interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalle: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'los camiuno',
  detalle: {
    autor: 'Julio J',
    anio: 2016,
  },
};

const { cancion, segundo, detalle } = reproductor;
const { autor } = detalle;

console.log(cancion, 'segundo', segundo);
console.log('autor', autor);

const dbz: string[] = ['goki', 'vegeuta', 'zell'];

const [, , p3] = dbz;

console.log(p3);
