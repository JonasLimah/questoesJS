class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    saque(x) {
        return this.saldo -= x;
    }
    deposito(x) {
        return this.saldo += x;
    }
}
let conta = new Conta(1000);
console.log("saldo total")
console.log(conta.saldo);
console.log("saldo após saque 250")
conta.saque(250);
console.log(conta.saldo);
console.log("saldo após deposito 3330")
conta.deposito(3330);
console.log(conta.saldo);