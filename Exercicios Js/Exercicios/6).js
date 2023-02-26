function jurosSimples(capitalInicial,taxaDeJuros, tempoDeAplicacao){
    const juros = (capitalInicial * taxaDeJuros) * tempoDeAplicacao

    console.log(`em um periodo de ${tempoDeAplicacao}
    gerou ${juros} de juros e o total é ${ capitalInicial + juros}`)
}
//jurosSimples(600,0.12,5)

function jurosComposto(capitalInicial,taxaDeJuros, tempoDeAplicacao){
    let montante = capitalInicial*(1+taxaDeJuros) ** tempoDeAplicacao
    const jurosCompostos = montante - capitalInicial
    console.log("montante "+montante.toFixed(2)+" juros " +jurosCompostos.toFixed(2))
}
console.log(1+0.01)
jurosComposto(1000,0.12,2)