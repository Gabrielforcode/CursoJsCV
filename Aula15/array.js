let vaga = [5,8,2,9,3]
vaga.push(1)

vaga.sort()
console.log(vaga)
console.log(`O vetor tem ${vaga.length}`)
console.log(`O primeiro valor do vetor é ${vaga[0]}`)
for(c=0;c< vaga.length; c++){
    console.log(vaga[c])
}
for( c in vaga ){
    console.log(vaga[c])
}

console.log(`O valor 8 esta na posição ${vaga.indexOf(8)}`)
console.log(`caso o valor procurado pela função indexOf não for encontrato a função retorna -1`)
var item = 5
if(vaga.indexOf(5) == -1){
    console.log(`O valor procurado não está na função`)

}else{
    console.log(`O valor procurado está na posição ${vaga.indexOf(item)}`)
}