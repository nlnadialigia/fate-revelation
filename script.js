const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#pergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Você não fez uma pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const inputValue = inputPergunta.value
  let pergunta;

  if (inputValue.includes("?")) {
    pergunta = `<div>${inputValue}</div>`
  } else {
    pergunta = `<div>${inputValue}?</div>`
  }
  
  const totalRespostas = respostas.length  
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  inputPergunta.value = ''

  setTimeout(() => {
    window.location.reload(false)
  }, 3000);
}
