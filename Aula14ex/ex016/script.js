
function code(){
var inicio = Number(document.querySelector('input#inicio').value)
var fim = Number(document.querySelector('input#fim').value)
var passo = Number(document.querySelector('input#passo').value)
var res = document.querySelector('div#res')
var item = []
while(inicio <= fim){
    item.push(inicio)
    inicio += passo
}
res.innerHTML = item

//while(inicio <= fim){
//    res.innerHTML = `asdfasdf`
//    inicio += passo
//}
}


