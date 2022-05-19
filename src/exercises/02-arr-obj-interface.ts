/*
    ===== Código de TypeScript =====
*/

//Declaracion de array
let habilidades: string [] = ['Bash', 'Java', 'Python'];

habilidades.push('C++')

//Declaracion de objetos
interface Personaje {
    nombre: string,
    healthy: number,
    habilidades: string[]
    puebloNatal?: string //El interrogante provoca que dicho atributo sea opcional
}

const personaje: Personaje = {
    nombre: 'Eric',
    healthy: 100,
    habilidades: ['Bash', 'Java', 'Python'],
}
personaje.puebloNatal = 'Sant Julià de Lòria'

console.table(personaje);