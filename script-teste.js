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

/* ----------- */

function validarDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    if (nome.length < 2) {
      alert("Por favor, insira um nome válido com pelo menos 2 caracteres.");
    } else if (email.length < 5) {
      alert("Por favor, insira um email válido.");
    } else if (email.indexOf("@") < 3) {
      alert("Por favor, insira um email válido com o caractere '@' na quarta posição ou posterior.");
    } else if (mensagem.length < 2) {
      alert("Por favor, insira uma mensagem válida com pelo menos 2 caracteres.");
    } else {
      alert("Dados válidos! Enviando o formulário.");
    }
  }
  


