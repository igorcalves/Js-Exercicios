class pessoa{
    constructor(nome){
        this.nome = nome 
    }
    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

function criarPessoa(nome){
    return {
        nome,
        falar(nome){
            console.log(`Meu Nome é ${nome}`)
        }
    }
}

criarPessoa().falar('igor')

function Pessoa3(nome){
    this.nome = nome

    this.falar = function(){
        console.log (`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa3 ('lgo')
p1.falar()