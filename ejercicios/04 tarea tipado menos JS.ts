interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}

interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 20,
  direccion: {
    calle: 'Gasca',
    pais: 'Ecuador',
    ciudad: 'quito',
  },

  mostrarDireccion() {
    return (
      this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.ciudad
    );
  },
};

const direcion = superHeroe.mostrarDireccion();
console.log(direcion);
