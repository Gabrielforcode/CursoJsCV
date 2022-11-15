


function codef(){
    let info = document.querySelector('input#number').value
    let text = document.querySelector('div#res')
    text.innerHTML = `Lorem ipsum dolor <strong>${info}</strong> sit amet, consectetur adipisicing elit. Velit architecto repudiandae magnam, cumque consequatur error`
}




function code(){
var redORnew = document.getElementsByName('ron')
if (redORnew[0].checked){
    codef()
}else{ 
    var item = document.createElement('input')
    var res = document.querySelector('div#res')
    item.type = "number"
    item.id = "ncontratos"    
    res.appendChild(item)    
    var ncontratos = document.querySelector('input#ncontratos').value
    window.alert(ncontratos)
    
    
}

}

/*function tabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    if( num.value.length == 0){
        window.alert('[ERRO] digite um número')        
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

} */