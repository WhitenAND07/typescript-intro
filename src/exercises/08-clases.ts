/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
    constructor(
        public nombre: string, 
        public direccion: string
        ){}
}

class Heroe extends PersonaNormal {
    //Se pueden declarar directamente en el constructor
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;
    
    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string,
        direccion: string
        ){
        super(nombreReal, direccion);
        //this.alterEgo = alterEgo;
        //this.edad = edad;
        //this.nombreReal = nombreReal;
    }

    imprimirNombre(): string {
        return this.alterEgo + ' ' + this.edad + ' ' + this.nombreReal;
    }
}

const ironMan = new Heroe('Iron Man',35, 'Tony Stark', 'Stark Tower, NY, USA');

console.log(ironMan);