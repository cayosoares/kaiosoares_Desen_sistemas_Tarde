//EXECUTAR MASCARAS

//DEFINE O OBJETO E CHAMA A FUNÇÃO
function mascara(o,f) {
    objeto=o
    funcao=f
    setTimeout "executaMascara()", 1
}

function executaMascara() {
    objeto.value=funcao(objeto.value)
}

//MASCARAS

//Mascara do telefone
function telefone(variavel) {
    variavel=variavel.replace /\D/g,"" //Remove tudo o que não é dígito
    //A linha abaixo é responsável de adicionar parenteses de volta dos dois primeiros dígitos
    variavel=variavel.replace /^(\d\d)(\d)/g,"($1) $2"

    //A linha abaixo é responsável de adicionar o hífen entre o quarto e quinto dígito

    variavel=variavel.replace /(\d{4})(\d)/, "$1-$2"
    
}