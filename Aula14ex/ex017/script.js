
function code(){
var inicio = Number(document.querySelector('input#inicio').value)
var inc = inicio
var fim = Number(document.querySelector('input#fim').value)
var passo = Number(document.querySelector('input#passo').value)
var res = document.querySelector('div#res')
var tabuada = document.querySelector('div#tabuada')
var item = []
var tab = []

while(inicio <= fim){
    item.push(inicio)
    inicio += passo
}
var c = 1
while(c <= 10){    
    tab.push(inc * c)
    c ++
}
res.innerHTML = item
tabuada.innerHTML = tab
window.alert(tab)


//while(inicio <= fim){
//    res.innerHTML = `asdfasdf`
//    inicio += passo
//}
}


