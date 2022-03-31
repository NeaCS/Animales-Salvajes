import {
    Animal
} from './animal.js'

    class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir() {
        return this.sonido;
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {
        return this.sonido;
    }

}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir() {
        return this.sonido;
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear() {
        return this.sonido;
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar() {
        return this.sonido;
    }
}

export {
    Aguila,
    Serpiente,
    Lobo,
    Leon,
    Oso
}

