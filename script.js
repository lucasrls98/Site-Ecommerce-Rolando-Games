//SCRIPT DO CARROSSEL

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();

}, 4000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}


//SCRIPT DO FORMULÁRIO

function validarDados() {
    
    //aqui a função pega os dados inseridos no formulário 
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    //aqui ele valida os dados do formulário
    //garante que o nome tenha pelo menos dois caracteres
    if (nome.length < 2) {
      alert("Por favor, insira um nome válido.");
    } 
    
    //verfica se o email tem no mínimo 5 caracteres e se o @ está na 4 posição ou posterior 
    else if (email.length < 5) {
      alert("Por favor, insira um email válido.");
    } else if (email.indexOf("@") < 3) {
      alert("Por favor, insira um email válido com o caractere '@'.");
    } 
    
    //verifica se a mensagem tem pelo menos 2 caracteres 
    else if (mensagem.length < 2) {
      alert("Por favor, insira uma mensagem válida.");
    } 
    
    //mensagem de validação
    else {
      alert("Dados válidos! Enviando o formulário.");
    }
  }
  


