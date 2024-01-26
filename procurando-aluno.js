const alunos = ["João", "Juliana","Ana","Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEmedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaAlunosEmedias[0].includes(aluno)){
        const [alunos,medias] = listaAlunosEmedias;
        
        const indice = listaAlunosEmedias[0].indexOf(aluno);
        const mediaDoAluno = listaAlunosEmedias[1][indice];
        console.log(`${aluno} tem a media ${mediaDoAluno}.`);
    }else{
        console.log('Aluno não encontrado!');
    }
}
exibeNomeENota('Ana');