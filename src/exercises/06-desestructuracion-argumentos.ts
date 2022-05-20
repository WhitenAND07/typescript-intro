/*
    ===== Código de TypeScript =====
*/

interface Producto {
    description : string;
    precio : number;
}

const telefono: Producto = {
    description: 'Iphone 12 PRO',
    precio: 900
}

const tablet: Producto = {
    description: 'IPad Air',
    precio: 700
}

function calculaIVA(productos: Producto[]): [number, number] {
    let total: number = 0;
    
    //Destrucuturacion de argumentos

    //productos.forEach((producto) => {
    //    total += producto.precio;
    //})
    
    productos.forEach(({precio}) => {
        total += precio;
    })
    
    return [total, total *0.21];
}

const articulos: Producto[] = [telefono, tablet];

//const IVA: [number, number] = calculaIVA(articulos);
const [total, IVA] = calculaIVA(articulos);

console.log('Total: ', total);
console.log('IVA: ', IVA);