// ---------- Questão 4 ----------
// Revela os dados do jogador ao clicar no botão "Revelar".
function revelar() {
    // 1) Troca a imagem principal pelo arquivo do jogador
    const imagem = document.getElementById("imgJogador");
    imagem.src = "img/_vinicius_junior.png";
    imagem.alt = "Vinícius Júnior";

    // 2) Preenche cada <span> com as informações do perfil
    const dados = {
        Nome: "Vinícius José Paixão de Oliveira Júnior",
        Rank: "9,5",
        Data_Nas: "12/07/2000 (25 anos)",
        Altura: "1,76 m",
        Posicao: "Ponta-esquerda / Atacante"
    };

    // Percorre cada item, atualiza o texto e ajusta as classes
    for (const id in dados) {
        const elemento = document.getElementById(id);
        elemento.textContent = dados[id];

        // 3) Remove a classe "placeholder"
        elemento.classList.remove("placeholder");

        // 4) Aplica a classe "card-text" para finalizar a estilização
        elemento.classList.add("card-text");
    }

    // Remove o efeito de carregamento (placeholder-glow) dos elementos pais
    document.querySelectorAll(".placeholder-glow").forEach(function (el) {
        el.classList.remove("placeholder-glow");
    });
}
