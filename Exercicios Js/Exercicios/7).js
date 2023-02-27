function baskhara(a,b,c){
    let x1,x2 = 0
    let delta = 0
    let results = [] 

    delta = (b **2) - 4 * a * c 
    if(delta <0) return 'Delta negativo'
    x1 = -b + Math.sqrt(delta)
    x2 = -b - Math.sqrt(delta)
results = [`x1  ${x1.toFixed(2)}
S = _ =  ${(x1/a*2).toFixed(2)}
    ${a*2}`,
           `x2 ${x2.toFixed(2)}
S = _ = ${(x2/2).toFixed(2)}
    ${a*2}    ${(a*2/2).toFixed(2)}`]


return results
}

const vetorResults = baskhara(2,3,-3)
if(Array.isArray(vetorResults)){
    for(let i in vetorResults){
        console.log(vetorResults[i])
    }
}else{
    console.log(vetorResults)
}
