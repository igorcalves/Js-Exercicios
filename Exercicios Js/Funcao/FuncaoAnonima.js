const soma = function (x,y){
    return x + y
}

const impriprir = function (a,b, opereracao = soma){
console.log(opereracao(a,b))
}

impriprir(3,4)
impriprir(3,4, function (x,y){
    return x - y
})

impriprir(3,4, (x,y) => x *y)

const pessoa = {
    falar: function(){
        console.log('opa ')
    }
}

pessoa.falar()