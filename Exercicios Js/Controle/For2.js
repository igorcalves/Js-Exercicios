const notas = [8,8,9,5,6,4,2,3,4,2]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome:'ana',
    sobrenome: "Carla",
    idade: 30,
    peso: 'xx'
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}