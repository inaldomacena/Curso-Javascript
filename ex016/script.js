

function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[Erro] Faltam dados!') //aviso de falta de dados
    } else{
        resultado.innerHTML ='Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){  //passo menor ou igual a zero é considerado invalido
            alert('Passo invalido!')
            p = 1     //colocando zero ele assumira 1
        }
        if( i < f){
            for(let cont = 1; cont <= f; cont+=p ){
                resultado.innerHTML += `${cont} \u{1F449}`//codigo para colocar emoji
    
            }
           
        } else{
            for( let cont = i; cont >=f; cont-=p){
                resultado.innerHTML += `${cont} \u{1F449}` //codigo para colocar emoji
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}


