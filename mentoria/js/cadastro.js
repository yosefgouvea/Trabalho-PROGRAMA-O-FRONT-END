/* ================================================
   cadastro.js — validação e submit do formulário de cadastro
   Depende de: MENTORS (data.js) para a lista de matérias disponíveis
   ================================================ */

const form          = document.getElementById('formCadastro');
const alertaSucesso = document.getElementById('alerta-sucesso');
const materiasDiv   = document.getElementById('materias-checkboxes');
const materiasErro  = document.getElementById('materias-erro');

/** Popula os checkboxes de matérias a partir das matérias existentes nos dados. */
function popularCheckboxes() {
  const todas = MENTORS.flatMap(m => m.materias);
  const unicas = [...new Set(todas)].sort();

  materiasDiv.innerHTML = unicas.map((mat, i) => `
    <div class="col-sm-6">
      <div class="form-check">
        <input class="form-check-input" type="checkbox"
               value="${mat}" id="mat-${i}" name="materia">
        <label class="form-check-label" for="mat-${i}">${mat}</label>
      </div>
    </div>
  `).join('');
}

/** Retorna os checkboxes de matéria marcados. */
function getMateriasSelecionadas() {
  return [...document.querySelectorAll('input[name="materia"]:checked')]
    .map(cb => cb.value);
}

/** Trata o submit: valida campos, salva no localStorage e exibe sucesso. */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validação nativa do Bootstrap
  form.classList.add('was-validated');

  // Validação customizada de matérias
  const materias = getMateriasSelecionadas();
  if (materias.length === 0) {
    materiasErro.classList.remove('d-none');
    return;
  } else {
    materiasErro.classList.add('d-none');
  }

  // Se algum campo nativo for inválido, para aqui
  if (!form.checkValidity()) return;

  // Monta objeto do novo mentor
  const novoMentor = {
    id: Date.now(), // id temporário para uso em localStorage
    nome:         document.getElementById('nome').value.trim(),
    semestre:     parseInt(document.getElementById('semestre').value),
    materias:     materias,
    precoPorHora: parseFloat(document.getElementById('preco').value),
    bio:          document.getElementById('bio').value.trim(),
    rating:       0,      // sem avaliação ainda
    avaliacoes:   [],
    foto:         `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  };

  // Salva no localStorage (simula envio para back-end)
  const cadastros = JSON.parse(localStorage.getItem('mentoresCadastrados') || '[]');
  cadastros.push(novoMentor);
  localStorage.setItem('mentoresCadastrados', JSON.stringify(cadastros));

  // Exibe alerta de sucesso e reseta form
  alertaSucesso.classList.remove('d-none');
  alertaSucesso.scrollIntoView({ behavior: 'smooth' });
  form.reset();
  form.classList.remove('was-validated');
  materiasErro.classList.add('d-none');
});

// Inicialização
popularCheckboxes();
