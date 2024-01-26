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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error('Erro. É necessário ter um endereço cadastrado')
}