// ---------- Questão 3 ----------
// Insere dinamicamente a imagem da tabela de jogos ao final da página.
function mostrarTabela() {
    const espaco = document.getElementById("espaco-da-tabela");

    // Evita inserir a imagem mais de uma vez
    if (document.getElementById("imgTabela")) {
        return;
    }

    const imagem = document.createElement("img");
    imagem.id = "imgTabela";
    imagem.src = "Tabela_Jogos.png";
    imagem.alt = "Tabela Oficial de Jogos - Copa do Mundo FIFA 2026";

    espaco.appendChild(imagem);
}
