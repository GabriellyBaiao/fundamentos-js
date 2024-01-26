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

function ligaParaCliente(telefoneResidencial, telefoneComercial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome, 
    ...cliente.enderecos[0],
}
console.log(encomenda);