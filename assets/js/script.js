//validação formulário

let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let nomeOk = false
let emailOk = false
let senhaOk = false

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    
    if(nome.value.length < 3){
        txtNome.innerHTML="Nome inválido (escolha um nome com mais de 3 letras)"
    } else {
        txtNome.innerHTML="Nome válido"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')==-1 || email.value.indexOf('.com')==-1 && email.value.indexOf('.org')==-1){
        txtEmail.innerHTML="Email inválido"
    } else {
        txtEmail.innerHTML="Email válido"
        emailOk = true
    }
}

function validaSenha(){
    let txtSenha = document.querySelector("#txtSenha")
    
    if(senha.value.length < 7){
        txtSenha.innerHTML="Senha inválida (escolha uma senha com mais de 6 dígitos)"
    } else {
        txtSenha.innerHTML="Senha válida"
        senhaOk = true
    }
}

function cadastro(){
    
    if(nomeOk==true && emailOk==true && senhaOk==true) {
        alert("Cadastro efetuado com sucesso!")
    } else {
        alert("Preencha os campos corretamente antes de cadastrar")
    }

}
