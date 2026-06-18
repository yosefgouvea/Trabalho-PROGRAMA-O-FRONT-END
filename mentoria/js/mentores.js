/* ================================================
   mentores.js — lista de mentores com filtro e ordenação
   Depende de: MENTORS (data.js), getCommission, getNetPrice, renderStars (commission.js)
   ================================================ */

const grid      = document.getElementById('mentores-grid');
const semResult = document.getElementById('sem-resultados');
const contador  = document.getElementById('contador');
const selMateria = document.getElementById('filtroMateria');
const selOrdem   = document.getElementById('filtroOrdem');

/** Popula o dropdown de matérias com valores únicos do array MENTORS. */
function popularMaterias() {
  const todas = MENTORS.flatMap(m => m.materias);
  const unicas = [...new Set(todas)].sort();
  unicas.forEach(mat => {
    const opt = document.createElement('option');
    opt.value = mat;
    opt.textContent = mat;
    selMateria.appendChild(opt);
  });
}

/**
 * Gera o HTML de um card de mentor.
 * @param {object} m - Objeto mentor do array MENTORS
 * @returns {string} HTML string do card
 */
function renderCard(m) {
  const { percent } = getCommission(m.rating);
  const net = getNetPrice(m.precoPorHora, m.rating);
  return `
    <div class="col-sm-6 col-lg-4">
      <div class="card mentor-card h-100" onclick="location.href='perfil.html?id=${m.id}'"
           role="button" aria-label="Ver perfil de ${m.nome}">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <img src="${m.foto}" alt="Foto de ${m.nome}" class="rounded-circle me-3"
                 width="60" height="60" style="object-fit: cover;">
            <div>
              <h5 class="fw-bold mb-0">${m.nome}</h5>
              <small class="text-muted">${m.semestre}º semestre</small>
            </div>
          </div>

          <div class="mb-2">
            ${renderStars(m.rating)}
            <small class="text-muted ms-1">${m.rating} (${m.avaliacoes.length} avaliações)</small>
          </div>

          <div class="mb-3 d-flex flex-wrap gap-1">
            ${m.materias.map(mat => `<span class="badge badge-materia">${mat}</span>`).join('')}
          </div>

          <hr class="my-2">

          <div class="d-flex justify-content-between align-items-end">
            <div>
              <div class="fw-bold fs-5">R$ ${m.precoPorHora}/h</div>
              <small class="text-muted">Mentor recebe: R$ ${net.toFixed(2)}/h</small>
            </div>
            <span class="badge commission-badge">Comissão ${percent}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** Filtra e ordena o array MENTORS conforme os selects e re-renderiza o grid. */
function renderGrid() {
  const materia = selMateria.value;
  const ordem   = selOrdem.value;

  let lista = materia
    ? MENTORS.filter(m => m.materias.includes(materia))
    : [...MENTORS];

  if (ordem === 'rating')      lista.sort((a, b) => b.rating - a.rating);
  if (ordem === 'preco-asc')   lista.sort((a, b) => a.precoPorHora - b.precoPorHora);
  if (ordem === 'preco-desc')  lista.sort((a, b) => b.precoPorHora - a.precoPorHora);

  grid.innerHTML = lista.map(renderCard).join('');
  contador.textContent = `${lista.length} mentor${lista.length !== 1 ? 'es' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;
  semResult.classList.toggle('d-none', lista.length > 0);
}

// Inicialização
popularMaterias();
renderGrid();

// Eventos de filtro
selMateria.addEventListener('change', renderGrid);
selOrdem.addEventListener('change', renderGrid);
