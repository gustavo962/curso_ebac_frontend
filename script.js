// Selecionando elementos do HTML
const botao = document.getElementById("botao");
const texto = document.getElementById("texto");

// Função que será executada ao clicar
botao.addEventListener("click", () => {
  texto.textContent = "Você clicou no botão! 😄";
  botao.textContent = "Clique novamente!";
});
