// ===== Elementos da tela =====
const cria        = document.getElementById("b");
const corpo       = document.getElementById("corpo");
const avatar      = document.getElementById("avatar-img");
const toggleClima = document.getElementById("toggle-clima");
const inputNome   = document.getElementById("input-nome");
const barraFome   = document.getElementById("barra-fome");
const statusTexto = document.getElementById("status-texto");

// ===== Imagens =====
const imagens = {
    normal:     "b_n.png",
    morto:      "b_d.png",
    comendo:    "b_c.png",
    feliz:      "b_a.png",
    fundoDia:   "bg.png",
    fundoNoite: "b_f.png",
};

// ===== Estado =====
const LIMITE_MORTE = 30;   // segundos sem comer até morrer

let contador       = 0;    // segundos desde a última refeição
let intervaloFome  = null; // timer da fome
let timeoutEstado  = null; // timer das animações de comer
let morto          = false;
let horas          = 0;    // relógio do ciclo dia/noite

// ===== Fome =====
function iniciarFome() {
    if (intervaloFome) clearInterval(intervaloFome);

    intervaloFome = setInterval(() => {
        if (morto) return;

        contador++;
        console.log("Tempo sem comer:", contador);
        atualizarBarra();

        if (contador >= LIMITE_MORTE) {
            matar();
        }
    }, 1000);
}

function matar() {
    morto = true;
    cria.src   = imagens.morto;
    avatar.src = imagens.morto;
    if (intervaloFome) clearInterval(intervaloFome);
    atualizarBarra();
    console.log("O personagem morreu e não pode mais renascer.");
}

// Atualiza a barra de fome e o texto de status
function atualizarBarra() {
    const restante = Math.max(0, LIMITE_MORTE - contador);
    const pct = (restante / LIMITE_MORTE) * 100;
    barraFome.value = pct;

    barraFome.classList.remove("progress-success", "progress-warning", "progress-error");

    if (morto) {
        barraFome.classList.add("progress-error");
        statusTexto.textContent = "💀 Morreu";
    } else if (pct > 60) {
        barraFome.classList.add("progress-success");
        statusTexto.textContent = "Saudável";
    } else if (pct > 30) {
        barraFome.classList.add("progress-warning");
        statusTexto.textContent = "Com fome";
    } else {
        barraFome.classList.add("progress-error");
        statusTexto.textContent = "Faminto!";
    }
}

// ===== Alimentar =====
function alimentar() {
    if (morto) return; // depois de morto não come mais

    contador = 0;
    cria.src = imagens.comendo;
    atualizarBarra();

    // cancela uma sequência de animação anterior, se houver
    if (timeoutEstado) clearTimeout(timeoutEstado);

    // comendo -> feliz
    timeoutEstado = setTimeout(() => {
        if (morto) return;
        cria.src   = imagens.feliz;
        avatar.src = imagens.feliz;

        // feliz -> normal
        timeoutEstado = setTimeout(() => {
            if (morto) return;
            cria.src   = imagens.normal;
            avatar.src = imagens.normal;
        }, 2000);
    }, 1000);
}

// ===== Ciclo dia/noite automático =====
function cicloDiaNoite() {
    setInterval(() => {
        horas++;
        if (horas >= 24) horas = 0;

        // só muda sozinho quando o toggle não está controlando manualmente
        if (!toggleClima.checked) {
            corpo.style.backgroundImage = horas >= 12
                ? `url('${imagens.fundoNoite}')`
                : `url('${imagens.fundoDia}')`;
        }
    }, 1000);
}

// Toggle manual de dia/noite
toggleClima.addEventListener("change", () => {
    corpo.style.backgroundImage = toggleClima.checked
        ? `url('${imagens.fundoNoite}')`
        : `url('${imagens.fundoDia}')`;
});

// Nome da criatura reflete no título da aba
inputNome.addEventListener("input", () => {
    const nome = inputNome.value.trim();
    document.title = nome ? `${nome} 🐾` : "Meu Pet Virtual";
});

// ===== Área secreta (foto surpresa) =====
const btnRevelar    = document.getElementById("btn-revelar");
const containerFoto = document.getElementById("container-foto");
const imagemSurpresa = "fer.jpeg"; // coloque o arquivo fer.jpeg na mesma pasta

btnRevelar.addEventListener("click", () => {
    containerFoto.innerHTML = "";

    const img = document.createElement("img");
    img.src = imagemSurpresa;
    img.alt = "Surpresa";
    img.style.maxWidth = "200px";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    // se a imagem não existir, mostra um aviso amigável em vez de quebrar
    img.onerror = () => {
        containerFoto.innerHTML =
            "<p style='color:#fff'>Coloque o arquivo <b>fer.jpeg</b> na mesma pasta. 💖</p>";
    };

    containerFoto.appendChild(img);

    btnRevelar.innerText = "Revelado!";
    btnRevelar.disabled = true;
});

// ===== Inicia tudo =====
iniciarFome();
cicloDiaNoite();
atualizarBarra();
