//alert('Olá, mundo!')
function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    msg.innerHTML= `Agora são ${hora} horas`
    if(hora >= 6 && hora < 12){
        img.src = "imagens/manha.jpg"
        //imagens/bugdroid.png
        document.body.style.background = '#C6A56F'
        document.body.style.padding = '460px'
        document.body.style.background = 'linear-gradient(360deg, #503F2F, #CFBE92)'
        document.body.style.padding = '218.5px'
    }else if (hora >= 12 && hora < 17){
        img.src = "imagens/tarde.jpg"
        document.body.style.background ="#406286" 
        document.body.style.background = 'linear-gradient(360deg, #B5C7DB, #274368)'
        document.body.style.padding = '218.5px'
    }else if (hora >= 17 && hora <= 18){
        img.src = "imagens/fimdetarde.jpg"
        document.body.style.background = '#F68D0D'
        document.body.style.background = 'linear-gradient(360deg, #FAC716, #9C260C)'
        document.body.style.padding = '218.5px'
    }else{
        img.src = "imagens/noite.jpg"
        document.body.style.background = 'linear-gradient(360deg, #214774, #2B3147)'
        document.body.style.padding = '218.5px'
    }  

}

