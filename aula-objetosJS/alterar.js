const pessoa = {
    nome: "Gabi",
    profissao: "engenheira de softaware",
}
console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = "11 99999-9999"
console.log(pessoa.telefone);

pessoa.nome = "Gabi Baiao";
console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
}
// pessoa = novaPessoa; // não podemos
// fazer atribuição à variável constante. 
// Logo, isso é o que não podemos fazer, mas se tivermos 
// um objeto armazenado em uma variável constante, 
// podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.

