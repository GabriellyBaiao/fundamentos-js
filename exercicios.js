const numeroPares = [];

for(let i = 0; i <= 100; i+=2){
    numeroPares.push(i);
}
console.log(numeroPares);

console.log('-------------------------------');
const nome = "Alura";
let nomeMaiusculas = "";

for(let i = 0; i < nome.length; i++ ){
    nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas);
console.log('-----------------------------------------')
const nomeDoCurso = 'Fundamentos de JS';
const nomeDaPlataforma = ' Alura';

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto);
