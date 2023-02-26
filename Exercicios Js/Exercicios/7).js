function baskhara(a,b,c){
    let x1,x2 = 0
    let delta = 0

    delta = (b **2) - 4 * a * c 

     

    x1 = -b + Math.sqrt(delta)
console.log(`   ${x1}
S =_  = ${x1 / (a*2)}
   ${a*2}`)



}

baskhara(2,3,-5)