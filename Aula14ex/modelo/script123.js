
function contar(){
    let ini = document.querySelector('input#tsti').value
    let fim = document.querySelector('input#txtf').value
    let passo = document.querySelector('input#txtp').value
    let res = document.querySelector('div#res')
    
    if(ini.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('erro')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)
        if (p == 0){
            window.alert('Considerando passo 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c +=p){
                res.innerHTML += `${c} ❤️,`
            }
           
        }else{
            for( let c = i; c >=f; c -=p)
                res.innerHTML += `${c} ❤️,`
        }
        res.innerHTML += `🔚`
    }
}

