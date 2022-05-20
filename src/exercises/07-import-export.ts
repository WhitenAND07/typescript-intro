/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, Producto } from "./06-desestructuracion-argumentos";

const carritoCompras: Producto[] = [
    {
        description: 'Telefono 1',
        precio: 100
    },
    {
        description: 'Telefono 2',
        precio:150
    }
];

const [total, IVA] = calculaIVA(carritoCompras);

console.log('Total: ', total);
console.log('IVA: ', IVA);