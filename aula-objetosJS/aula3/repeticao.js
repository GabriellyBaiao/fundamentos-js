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
console.log('-----------------------')
const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }

   let dados = "";
   for (let info in paciente) {
   if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
     continue
   } else {
    dados += `${info} ==> ${paciente[info]}
     `}
   };
   console.log(dados)