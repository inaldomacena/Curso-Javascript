




function carregar(){


var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 

var data = new Date()
var hora = data.getHours()
/* var hora = 13 para testar horarios exemplo: 13 horas*/
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
   // hora.innerHTML= 'bom dia'
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >=12 && hora <=18){
    //boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
}else{
    //hora.innerHTML = 'boa noite'
    img.src ='noite.jpg'
    document.body.style.background = '#515154'


 }

}