let valores = [8,1,7,4,2,9]

/*
for(let pos = 0; pos < valores.length; pos++){   // for usado para percursos em vetores
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/
 valores.indexOf(7)
 console.log(valores.indexOf(7))   //busca posição do 
for(let pos in valores){   //for simplificado usado para objetos
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}