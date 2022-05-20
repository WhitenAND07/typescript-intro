/*
    ===== Código de TypeScript =====
*/

interface Detalles{
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 40,
    cancion: 'Hablando en plata',
    detalles: {
        autor: 'Melendi',
        anio: 2003
    }
}

const autor = 'Estopa';

const {volumen, segundo, cancion, detalles } = reproductor;
//AutorDetalle es la nomenclatura de la desestructuracion de el atributo autor
const {autor: autorDetalle} = detalles;

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La cancion actual de: ', cancion);
console.log('El autor es: ', autorDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//La destructuracion en arrays es con [] mientras que de un objeto es con {}
const [p1, , p3] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);