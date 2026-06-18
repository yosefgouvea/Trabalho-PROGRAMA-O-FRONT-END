/* ================================================
   perfil.js — renderiza o perfil de um mentor a partir de ?id=X
   Depende de: MENTORS (data.js), getCommission, getNetPrice, renderStars (commission.js)
   ================================================ */

const container = document.getElementById('perfil-content');

/** Gera HTML do avatar de iniciais de um nome. */
function avatarIniciais(nome) {
  const inicial = nome.trim().charAt(0).toUpperCase();
  return `<div class="avatar-initials">${inicial}</div>`;
}

/** Gera HTML de uma avaliação individual. */
function renderAvaliacao(av) {
  return `
    <div class="d-flex gap-3 mb-3">
      ${avatarIniciais(av.aluno)}
      <div>
        <div class="d-flex align-items-center gap-2 mb-1">
          <strong>${av.aluno}</strong>
          <span class="stars" style="font-size: 0.9rem;">${'★'.repeat(av.nota)}${'☆'.repeat(5 - av.nota)}</span>
        </div>
        <p class="mb-0 text-muted">${av.comentario}</p>
      </div>
    </div>
  `;
}

/** Renderiza a página completa do perfil. */
function renderPerfil(m) {
  const { percent } = getCommission(m.rating);
  const net = getNetPrice(m.precoPorHora, m.rating);

  container.innerHTML = `
    <div class="container">

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="mentores.html">Mentores</a></li>
          <li class="breadcrumb-item active" aria-current="page">${m.nome}</li>
        </ol>
      </nav>

      <div class="row g-4">

        <!-- COLUNA ESQUERDA: dados principais -->
        <div class="col-md-4 text-center text-md-start">
          <img src="${m.foto}" alt="Foto de ${m.nome}" class="mentor-photo-lg mb-3">

          <h2 class="fw-bold mb-1">${m.nome}</h2>
          <p class="text-muted mb-2">${m.semestre}º semestre</p>

          <div class="mb-3">
            ${renderStars(m.rating)}
            <span class="ms-1 text-muted">${m.rating} (${m.avaliacoes.length} avaliações)</span>
          </div>

          <div class="d-flex flex-wrap gap-1 justify-content-center justify-content-md-start mb-4">
            ${m.materias.map(mat => `<span class="badge badge-materia">${mat}</span>`).join('')}
          </div>

          <!-- Precificação -->
          <div class="card border-0 shadow-sm mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted">Preço/hora</span>
                <strong>R$ ${m.precoPorHora},00</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted">Comissão plataforma</span>
                <span class="badge commission-badge">${percent}</span>
              </div>
              <hr class="my-2">
              <div class="d-flex justify-content-between">
                <span class="text-muted">Mentor recebe</span>
                <strong class="text-success">R$ ${net.toFixed(2)}/h</strong>
              </div>
            </div>
          </div>

          <button class="btn btn-primary btn-lg w-100"
                  data-bs-toggle="modal" data-bs-target="#modalAgendar">
            📅 Agendar aula
          </button>
        </div>

        <!-- COLUNA DIREITA: bio + avaliações -->
        <div class="col-md-8">
          <h4 class="fw-bold mb-3">Sobre o mentor</h4>
          <p class="text-muted mb-4" style="line-height: 1.7;">${m.bio}</p>

          <h4 class="fw-bold mb-3">O que ele ensina</h4>
          <div class="d-flex flex-wrap gap-2 mb-4">
            ${m.materias.map(mat => `
              <div class="card border-0 shadow-sm px-3 py-2">
                <span class="fw-semibold" style="color: #3B5BDB;">${mat}</span>
              </div>
            `).join('')}
          </div>

          <h4 class="fw-bold mb-3">Avaliações dos alunos</h4>
          <div class="card border-0 shadow-sm p-4">
            ${m.avaliacoes.map(renderAvaliacao).join('<hr class="my-3">')}
          </div>
        </div>

      </div>
    </div>
  `;
}

/** Renderiza mensagem de erro quando mentor não é encontrado. */
function renderErro() {
  container.innerHTML = `
    <div class="container text-center py-5">
      <h2 class="fw-bold mb-3">😕 Mentor não encontrado</h2>
      <p class="text-muted mb-4">O link que você acessou pode estar desatualizado ou incorreto.</p>
      <a href="mentores.html" class="btn btn-primary">Ver todos os mentores</a>
    </div>
  `;
}

// Lê o id da query string e renderiza
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'), 10);
const mentor = MENTORS.find(m => m.id === id);

if (mentor) {
  renderPerfil(mentor);
} else {
  renderErro();
}
