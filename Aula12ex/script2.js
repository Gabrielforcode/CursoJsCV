function verificar (){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = Number(document.querySelector('input#txtano').value)
    var res = document.querySelector('div#res')
    if(fAno == 0 || fAno > ano || fAno < 1900){
        window.alert(`O ano ${fAno} não é valido [ERRO]`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            sex = 'Homem'
            if( idade >= 0 && idade < 10){
                img.setAttribute('src','img15/bebe.png')
            }else if (idade <= 21){
                img.setAttribute('src','img15/garoto.webp')
            }else if (idade <= 50){
                img.setAttribute('src','img15/homem.webp')
            }else{
                img.setAttribute('src','img15/homemidoso.webp')
            }
        }else{
            sex = 'Mulher'
            if( idade >= 0 && idade < 10){
                img.setAttribute('src','img15/bebem.webp')
            }else if (idade <= 21){
                img.setAttribute('src','img15/garota.png')
            }else if (idade <= 50){
                img.setAttribute('src','img15/mulher.png')
            }else{
                img.setAttribute('src','img15/mulheridosa.jpeg')                
            }
            
        }
        
        res.innerHTML = `Detectamos ${sex} com ${idade} anos`
        res.appendChild(img)
        res.style.textAlign = 'center'
    }

}

/*

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
  */