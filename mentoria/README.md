# MentorIA — Plataforma de Mentores Acadêmicos

Front-end estático de um marketplace que conecta mentores (estudantes avançados) com alunos que precisam de ajuda em matérias acadêmicas. Trabalho de faculdade — sem back-end real.

## Como rodar

**Sem instalar nada:**

1. Clone ou baixe o repositório.
2. Abra a pasta `mentoria/` no explorador de arquivos.
3. Dê duplo clique em `index.html` — o browser abre direto.

> Todos os recursos externos (Bootstrap 5) são carregados via CDN. É necessária conexão com a internet para estilização.

**Alternativa com servidor local (recomendado para evitar erros de CORS em browsers mais restritivos):**

Se tiver Python instalado:
```bash
cd mentoria
python -m http.server 8080
```
Acesse: `http://localhost:8080`

Se tiver Node.js / npx:
```bash
cd mentoria
npx serve .
```

## Estrutura de pastas

```
mentoria/
├── index.html          # Landing page
├── mentores.html       # Lista de mentores com filtro e ordenação
├── perfil.html         # Perfil individual (recebe ?id=N na URL)
├── cadastro.html       # Formulário de cadastro de mentor
├── comissao.html       # Tabela e calculadora de comissão
├── css/
│   └── styles.css      # Estilos customizados sobre Bootstrap 5
└── js/
    ├── data.js         # Dados mockados (MENTORS) e faixas (COMMISSION_TIERS)
    ├── commission.js   # Funções: getCommission(), getNetPrice(), renderStars()
    ├── mentores.js     # Filtro, ordenação e renderização da lista
    ├── perfil.js       # Renderização do perfil via query string
    └── cadastro.js     # Validação e submit do formulário
```

## Regra de comissão

Definida em `js/data.js` como a constante `COMMISSION_TIERS`. Para alterar as faixas, edite apenas esse array — o resto do código se adapta automaticamente.

| Avaliação   | Comissão |
|-------------|----------|
| 4.8 – 5.0   | 10%      |
| 4.5 – 4.79  | 15%      |
| 4.0 – 4.49  | 20%      |
| Abaixo 4.0  | 25%      |

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis customizadas (CSS Custom Properties)
- JavaScript ES6+ (sem framework, sem bundler)
- Bootstrap 5.3 via CDN
- i.pravatar.cc para avatares de demonstração
