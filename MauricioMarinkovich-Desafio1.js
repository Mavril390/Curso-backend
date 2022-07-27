// Desafio: Clases.

class usurio {
  constructor(nombre, apellido, libros, mascotas) {
    libros = [];
    mascotas = [];

    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `Tu nombre completo es ${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return `Total de mascotas de ${this.nombre}: ${this.mascotas.length}`;
  }

  addBook(nombre, autor) {
    let obj = {
      nombre: nombre,
      autor: autor,
    };

    this.libros.push(obj);
  }

  getBookNames() {
    let arr = [];
    for (let i = 0; i < this.libros.length; i++) {
      let obj = {};
      obj = { nombre: this.libros[i].nombre };
      arr.push(obj);
    }
    return arr;
  }
}

/*
let usuario1 = new usurio("pepe", "pepito");
usuario1.addMascota("dana");
usuario1.addMascota("canela");
usuario1.addBook("el señor de los anillos", "William Golding");
usuario1.addBook("Fundacion", "Isaac Asimov");

console.log(usuario1);
console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
*/
