const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@dominio.com",
    telefone: ["11 95555-5555", "11 94444-4444"], 
    saldo: 200, 
    efetuaPagamento: function (valor){
        if(valor> this.saldo){
            console.log('Saldo insuficiente');
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado, novo saldo ${this.saldo}`);
        } 
    }
};
cliente.efetuaPagamento(25);
