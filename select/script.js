
function Novocontrato() {
    let resposta = document.querySelector('div#res')
    let select = document.querySelector('select#alunos')
    let value = select.options[select.selectedIndex].value
    
    resposta.innerHTML = `Lorem ipsum dolor sit ${value}Quis.`}




function code(){
var redORnew = document.getElementsByName('ron')
if (redORnew[0].checked){
    Novocontrato()
}else{
    
}

}

/*

  <p>sexo:
                <input type="radio" name="radsex" id="masc" checked>
                <label for="masc">masculino</label>
                <input type="radio" name="radsex" id="fem">
                <label for="fem">feminino</label>
var fsex = document.getElementsByName('radsex')
            </p>*/