
function img(){
    var n = 7
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#img')
    msg.innerHTML = 'agora'
     

    switch(n){
        case 0:
            msg.innerHTML = 'Voce é uma bebe!'
            img.src ="img15/bebem.webp"
            break
        case 1:
            msg.innerHTML = 'Você é um bebe'
            img.src = "img15/bebe.png"
            break
        case 2:
            msg.innerHTML = 'Você é uma garota!'
            img.src = "img15/garota.png" 
            break
        case 3:
            msg.innerHTML = 'Você é um garoto!'
            img.src ="img15/garoto.webp"
            break
        case 4:
            msg.innerHTML = 'Você é um homem adulto!'
            img.src = "img15/homem.webp"
            break
         case 5:
            msg.innerHTML = 'Você é uma mulher adulta!'
            img.src = "img15/mulher.png"
            break
        case 6:
            msg.innerHTML = 'Você é um homem idoso!'
            img.src = "img15/homemidoso.webp" 
            break
        case 7:
            msg.innerHTML = 'Você é uma mulher idosa!'
            img.src = "img15/mulheridosa.jpeg" 
            break    
        default:
    }
 
   

}


/*switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Erro')
}
*/