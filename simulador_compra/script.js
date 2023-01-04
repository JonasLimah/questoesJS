class Compras {
    carrinho = []
    add(x) {
        return x = this.carrinho.push(x)
    }
    remove() {
        return this.carrinho.pop();

    }
}

let compras = new Compras()
compras.add("melao");
compras.add("uva");
compras.add("manga");
compras.add("goiaba");
compras.add("pera");
compras.remove();
console.log(compras)

