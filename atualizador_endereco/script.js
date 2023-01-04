class Endereco {
    constructor(rua,bairro,cidade,estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade =  cidade;
        this.estado = estado;
    }   

    set novaRua(novaRua) {
         this.rua =  novaRua;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}
let endereco = new Endereco("a ","b ","x "," b");
endereco.novaRua = "conego climerio";
endereco.novoBairro = "timbauba";
endereco.novaCidade = "juazeiro do norte";
endereco.novoEstado = "CE";
console.log(endereco)
endereco.novaRua = "São damiao";
console.log(endereco);
