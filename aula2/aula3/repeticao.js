const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 95555-5555", "11 94444-4444"], 
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "Ap 934",
    },
];

for(let chave in cliente){
    let tipo = typeof cliente[chave];

    if(tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}