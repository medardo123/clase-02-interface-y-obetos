let habilidades: String[] = ['juan'];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  pueblonatal?: string;
}

const personaje: Personaje = {
  nombre: 'lucho',
  hp: 110,
  habilidades: ['bash', 'hola'],
};

personaje.pueblonatal = 'quito';

console.log(personaje);
