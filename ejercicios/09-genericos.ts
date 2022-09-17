function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(14);
let soyarreglo = queTipoSoy([1, 2, 2, 3]);
let soyExplicito = queTipoSoy<number>(100);
