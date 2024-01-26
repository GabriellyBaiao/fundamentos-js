const notas = [10, 6, 8, 5.5,10];
notas.pop();

console.log(notas);
const medias = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`media é ${medias.toFixed(2)}`);
