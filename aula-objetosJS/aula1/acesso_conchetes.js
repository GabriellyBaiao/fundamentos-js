const cliente = {
    nome: "André",
    idade: 32,
    cpf: "121212121",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é: ${cliente["nome"]} e essa pessoa tem ${cliente
    ["idade"]} anos. `
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
