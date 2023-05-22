//js
//Adicionando um evento click ao icone de olho!
const eyePass = document.querySelector(".fa-eye");
const inputUser = document.querySelector("input[id='inputUsuario']");
const inputPass = document.querySelector("input[id='inputSenha']");
const msg = document.querySelector("#msg");

//CRIANDO OBJETOS
let usuario1 = {
    nomeCompleto : "Alexandre Melhor Prof",
    nomeUsuario : "Alexandre",
    senhaUsuario: "135791"
}

let usuario2 = {
    nomeCompleto : "Dolores Fuertes de Barriga",
    nomeUsuario : "dolores",
    senhaUsuario: "123456"
}

let usuario3 = {
    nomeCompleto : "Napoleão Sem Medo e Sem Mácula",
    nomeUsuario : "OmaisBrabo",
    senhaUsuario: "123456"
}
//CRIANDO UMA LISTA DE OBJETOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
listaDeUsuarios.push(usuario3);

function submitForm(){
    const usuarioLogado = {
        nomeUsuarioLogado : inputUser.value,
        senhaUsuarioLogado: inputPass.value
    }

    //CRIANDO UMA ITERAÇÃO PARA VALIDAR A LISTA DE OBJETOS COM O OBJETO DO USUÁRIO VALIDADO
    let validado=false;
    listaDeUsuarios.forEach((usuario)=>{

        if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
            validado=true;
            //return true;
        }
    });
    if (validado){
        return true;
    }else{
        msg.innerHTML = "Usuário ou Senha Inválida!"
        return false;
    }
}
//====================================================