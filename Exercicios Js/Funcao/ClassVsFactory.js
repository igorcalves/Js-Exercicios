class pessoa{
    constructor(nome){
        this.nome = nome 
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('igor')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu Nome é ${nome}`)
    }
}

const p2 = criarPessoa('Igor')
p2.falar()