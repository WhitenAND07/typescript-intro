/*
    ===== Código de TypeScript =====
*/

interface PAsajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: PAsajero = {
    nombre: 'Antonio'
}

const pasajero2: PAsajero = {
    nombre: 'Natalia',
    hijos: ['Alberto','Juan']
}

function imprimirHijos(pasajero: PAsajero): void {
    //Si hijos es undefined devolvera 0
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
