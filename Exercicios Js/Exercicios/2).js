function triangulo(lado1, lado2,lado3){
    if(lado1 === lado2 && lado2 ===lado3){
        console.log('o triangulo é Equilátero')
    }else if (lado1 === lado2||
              lado1 === lado3||
              lado2 === lado3
              ){
        console.log('o triangulo é Isoceles')
    }else{
        console.log('o triangulo é Escaleno')
    }
}

triangulo(1,1,1)
triangulo(2,2,1)
triangulo(2,3,1)

 