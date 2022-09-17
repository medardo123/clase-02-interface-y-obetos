class PersonaNomal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNomal {
  // ego: string;
  // edad: number;
  // nombreReal: string;

  constructor(
    public ego: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'Quito steet');
  }
}

const iroman = new Heroe('juanito', 45, 'pablo');

console.log(iroman);
