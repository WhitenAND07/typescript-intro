/*
    ===== Código de TypeScript =====
*/

//Declaracion de funciones
function concat(a: string, b: string) : string{
    return a + b;
}
const resultado = concat('Fernando', 'Aguilar');
console.log('Result: ' + resultado);


function sumar(a: number, b: number) : number{
    return a + b;
}
const resultado2 = sumar(100, 200);
console.log('Result 2: ' + resultado2);


function multiplicar(numero: number, otroNumero?: number, base: number = 2) : number{
    return numero * base;
}
const resultado3 = multiplicar(400,10);
const resultado4 = multiplicar(4, 10, 20);
console.log('Result 3: ' + resultado3);
console.log('Result 4: ' + resultado4);


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//Declaracion de funciones con objectos como argumentos
interface PersonajeGeek {
    nombre: string;
    healthy: number;
    mostrarHeathy: () => void;
}

function curar(personaje: PersonajeGeek, curarX: number): void {
    personaje.healthy += curarX;
}

const Geek: PersonajeGeek = {
    nombre: 'Steve',
    healthy: 50,
    mostrarHeathy() {
        console.log('Healthy of ' + nombre + ' : ' + this.healthy);
    }
}

Geek.mostrarHeathy();
curar(Geek, 40);
Geek.mostrarHeathy();
