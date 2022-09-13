interface PersonajeWP {
  nombre: string;
  pv: number;
  mostrarPH: () => void;
}

function curar(personaje: PersonajeWP, curarX: number): void {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeWP = {
  nombre: 'Medardo',
  pv: 50,
  mostrarPH() {
    console.log('puntos de vida: ', this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPH();
