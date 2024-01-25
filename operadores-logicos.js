const notaFinal = 7;
const falta = 4;
const advertencias = 0;

if(notaFinal <= 7 && falta >= 4){
    console.log('Reprovado, boas festas')
}else{
    console.log('não foi reprovado por falta')
}

if (falta >= 2 && !advertencias){
    console.log('recebeu bonus')
}else{
    console.log('nnao recebeu bonus')
}