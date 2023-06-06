//JS do carrossel

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "instant",
      inline: "center",
      block: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

//JS de validação do form
function validateForm(event) {
  event.preventDefault();

  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');

  if (!nomeInput.value || !emailInput.value || !mensagemInput.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alert('Formulário enviado com sucesso!');
}

const form = document.querySelector('.form');
form.addEventListener('submit', validateForm);




// JS DA PAGINA TESTE 


