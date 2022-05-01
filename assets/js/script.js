class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombrePropetario = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario() {
        return (`</li>El nombre del dueño es: ${this.nombrePropetario}. 
            El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono} </li>
            <li>El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombre}
             y la enfermedad es: ${this.enfermedad}</li>`);
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedadMascota) {
        super(nombre, direccion, telefono, tipo);
        this._nombre = nombreMascota;
        this._enfermedad = enfermedadMascota;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
}

const evaluacion = (event) => {
    event.preventDefault();

    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');

    if (tipo == 'perro') {
        let perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `${perro.datosPropietario()}`;
    } else if (tipo == 'gato') {
        let gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `${gato.datosPropietario()}`;
    } else {
        let conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
        resultado.innerHTML = `${conejo.datosPropietario()}`;
    }

    // NO ME FUNCIONO NINGUNO DE ESTOS PARA MOVER LA PAGINA AL RESULTADO
    resultado.scrollTo();
    resultado.focus();
}

const formulario = document.querySelector('form');
formulario.addEventListener('submit', evaluacion);