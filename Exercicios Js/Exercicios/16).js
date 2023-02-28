function operacoes(numero1, numero2, operacoes){
    switch(operacoes){
      case '+': return console.log(numero1 + numero2)
      case '-': return console.log(numero1 - numero2)
      case '*': return console.log(numero1 * numero2)
      case '/': return console.log(numero1 / numero2)
    }

}

operacoes(10,2,'/')