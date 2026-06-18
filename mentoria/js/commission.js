/* ================================================
   commission.js — cálculo de comissão e utilitários
   Depende de: COMMISSION_TIERS (data.js)
   ================================================ */

/**
 * Retorna a faixa de comissão aplicável para um dado rating.
 * @param {number} rating - Avaliação do mentor (0–5)
 * @returns {{ rate: number, percent: string }}
 */
function getCommission(rating) {
  const tier = COMMISSION_TIERS.find(t => rating >= t.min && rating <= t.max);
  // Fallback para maior comissão caso o rating não se enquadre (não deve ocorrer com dados válidos)
  const active = tier ?? COMMISSION_TIERS[COMMISSION_TIERS.length - 1];
  return {
    rate: active.rate,
    percent: `${(active.rate * 100).toFixed(0)}%`,
  };
}

/**
 * Calcula o valor líquido que o mentor recebe por hora após a comissão.
 * @param {number} precoPorHora - Preço bruto em R$
 * @param {number} rating - Avaliação do mentor
 * @returns {number} Valor líquido em R$
 */
function getNetPrice(precoPorHora, rating) {
  const { rate } = getCommission(rating);
  return precoPorHora * (1 - rate);
}

/**
 * Gera HTML de estrelas para um dado rating (arredondado ao inteiro mais próximo).
 * Usa ★ (preenchida) e ☆ (vazia) coloridas via classe CSS .stars.
 * @param {number} rating - Avaliação (0–5)
 * @returns {string} HTML string
 */
function renderStars(rating) {
  const filled = Math.round(rating);
  const empty  = 5 - filled;
  return `<span class="stars">${'★'.repeat(filled)}${'☆'.repeat(empty)}</span>`;
}
