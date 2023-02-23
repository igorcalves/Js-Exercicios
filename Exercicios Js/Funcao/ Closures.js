const x = 'Glocal'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)