const fabricantes = ['Mercedes', 'Audi', 'BMW']
function impriprir (nome,indi3ce){
    console.log(`${indi3ce + 1}. ${nome}`)
}

fabricantes.forEach(impriprir)
fabricantes.forEach(function (nome){
    console.log(`${nome}`)
})
