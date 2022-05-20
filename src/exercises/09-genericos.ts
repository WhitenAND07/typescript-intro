/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString: string = queTipoSoy('Hola Mundo');
let soyNumero: number = queTipoSoy(100);
let soyArray: number[] = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<string>('Adios Mundo');
