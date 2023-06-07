//SCRIPT DO CARROSSEL

// inicialização do contador com o valor 1
let count = 1;

// marcar o radio button como 'checked'
document.getElementById("radio1").checked = true;

// configura um intervalo de 4 segundos para chamar a função 
setInterval(function () {
    nextImage();
}, 4000);

// função para avançar para a próxima imagem do slider
function nextImage() {
    // incrementar o contador "count" para ir para a próxima imagem
    count++;

    // aqui ele verifica se o contador "count" ultrapassou o número total de imagens
    if (count > 4) {
        // se ultrapassou reseta o contador e volta para a primeira imagem
        count = 1;
    }

    // marcar o radio button correspondente à imagem atual como (checked)
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
  


