/* ================================================
   data.js — dados mockados e constante de comissão
   Disponível globalmente em todas as páginas.
   ================================================ */

/**
 * Faixas de comissão — edite aqui para alterar regras globais.
 * Cada faixa: { min, max (inclusivos), rate (0–1) }
 */
const COMMISSION_TIERS = [
  { min: 4.8,  max: 5.0,  rate: 0.10 }, // 10%
  { min: 4.5,  max: 4.799, rate: 0.15 }, // 15%
  { min: 4.0,  max: 4.49, rate: 0.20 }, // 20%
  { min: 0,    max: 3.99, rate: 0.25 }, // 25%
];

/** Array de mentores mockados. */
const MENTORS = [
  {
    id: 1,
    nome: "Ana Souza",
    foto: "https://i.pravatar.cc/150?img=1",
    semestre: 5,
    materias: ["Matemática Discreta", "Álgebra Linear"],
    rating: 4.9,
    precoPorHora: 50,
    bio: "Sou estudante do 5º semestre de Ciência da Computação e apaixonada por lógica matemática. Já ajudei mais de 20 colegas a passarem em Discreta. Minha abordagem é prática: resolvemos exercícios juntos desde o primeiro encontro.",
    avaliacoes: [
      { aluno: "João Almeida",   nota: 5, comentario: "Ana é incrível! Em 2 horas entendi tudo que não consegui em 2 meses de aula." },
      { aluno: "Maria Clara",    nota: 5, comentario: "Muito paciente e didática. Super recomendo!" },
      { aluno: "Pedro Henrique", nota: 5, comentario: "Salvou minha vida na prova final. Obrigado!" }
    ]
  },
  {
    id: 2,
    nome: "Carlos Lima",
    foto: "https://i.pravatar.cc/150?img=3",
    semestre: 8,
    materias: ["Cálculo I", "Cálculo II"],
    rating: 4.7,
    precoPorHora: 60,
    bio: "8º semestre de Engenharia Elétrica. Cálculo foi minha maior dificuldade e hoje é minha especialidade — exatamente por isso sei onde está o problema de cada aluno. Foco em exercícios de provas antigas.",
    avaliacoes: [
      { aluno: "Luísa Fernandes", nota: 5, comentario: "Carlos explica limites de um jeito que nunca vi em aula. Recomendo demais!" },
      { aluno: "Rafael Souza",    nota: 4, comentario: "Muito bom, mas às vezes vai rápido demais. No geral, ótimo." },
      { aluno: "Camila Torres",   nota: 5, comentario: "Passei na prova! Obrigada Carlos." }
    ]
  },
  {
    id: 3,
    nome: "Beatriz Rocha",
    foto: "https://i.pravatar.cc/150?img=5",
    semestre: 6,
    materias: ["Programação em Python", "Programação em Java"],
    rating: 4.3,
    precoPorHora: 45,
    bio: "6º semestre de Sistemas de Informação com estágio como desenvolvedora. Trago exemplos do mundo real para as aulas. Ideal para aprender programação do zero ou avançar em orientação a objetos.",
    avaliacoes: [
      { aluno: "Gabriel Santos", nota: 4, comentario: "Boa explicação, aprendi bastante sobre POO em Java." },
      { aluno: "Isabela Costa",  nota: 5, comentario: "Finalmente entendi como funciona um loop! Muito boa!" },
      { aluno: "Thiago Nunes",   nota: 4, comentario: "Conhece bem o assunto. Recomendo para iniciantes em Python." }
    ]
  },
  {
    id: 4,
    nome: "Diego Santos",
    foto: "https://i.pravatar.cc/150?img=7",
    semestre: 3,
    materias: ["Física I", "Física II"],
    rating: 3.8,
    precoPorHora: 35,
    bio: "3º semestre de Física. Ainda desenvolvendo minha didática, mas domino bem a matéria e cobro preço justo para estudantes. Bom para revisões rápidas antes de provas.",
    avaliacoes: [
      { aluno: "Mariana Lima",  nota: 4, comentario: "Me ajudou na véspera da prova. Cumpriu o que prometeu." },
      { aluno: "Felipe Barros", nota: 3, comentario: "Sabe a matéria mas poderia explicar melhor. Melhorou na 2ª aula." },
      { aluno: "Aline Martins", nota: 4, comentario: "Preço bom e pontual. Recomendo para revisão rápida." }
    ]
  },
  {
    id: 5,
    nome: "Fernanda Alves",
    foto: "https://i.pravatar.cc/150?img=9",
    semestre: 7,
    materias: ["Estatística", "Probabilidade"],
    rating: 4.8,
    precoPorHora: 55,
    bio: "7º semestre de Matemática Aplicada com iniciação científica em Estatística. Já orientei TCCs e trabalhos acadêmicos. Uso R e Python nas aulas quando o aluno quiser ir além da teoria.",
    avaliacoes: [
      { aluno: "Bruno Carvalho", nota: 5, comentario: "Fernanda é excepcional. Transformou minha relação com probabilidade." },
      { aluno: "Larissa Melo",   nota: 5, comentario: "Me ajudei no TCC! Salvou meu semestre." },
      { aluno: "Victor Hugo",    nota: 5, comentario: "Didática impecável. Vale cada centavo." }
    ]
  },
  {
    id: 6,
    nome: "Gabriel Costa",
    foto: "https://i.pravatar.cc/150?img=11",
    semestre: 4,
    materias: ["Química Geral", "Química Orgânica"],
    rating: 4.5,
    precoPorHora: 40,
    bio: "4º semestre de Engenharia Química. Especialista em tornar reações e estequiometria acessíveis. Levo material próprio de apoio para cada aula.",
    avaliacoes: [
      { aluno: "Natália Pereira",    nota: 5, comentario: "Gabriel tem uma paciência incrível. Aprendi estequiometria de vez!" },
      { aluno: "Rodrigo Figueiredo", nota: 4, comentario: "Bom professor. Me ajudou bastante na prova de orgânica." },
      { aluno: "Juliana Ramos",      nota: 5, comentario: "Material de apoio dele é muito bom. Super recomendo." }
    ]
  },
  {
    id: 7,
    nome: "Helena Martins",
    foto: "https://i.pravatar.cc/150?img=13",
    semestre: 9,
    materias: ["Redes de Computadores", "Sistemas Operacionais"],
    rating: 4.2,
    precoPorHora: 65,
    bio: "Penúltimo semestre de Ciência da Computação, com projeto de pesquisa em segurança de redes. Aulas práticas com laboratório virtual para quem quer ir além da teoria do livro.",
    avaliacoes: [
      { aluno: "Eduardo Lopes", nota: 4, comentario: "Muito conhecimento técnico. Ideal para quem quer aprender de verdade." },
      { aluno: "Priscila Gomes", nota: 4, comentario: "Aula prática com Linux foi ótima! Aprendi mais que em aula." },
      { aluno: "Marcelo Cunha",  nota: 5, comentario: "Melhor mentor de redes que já tive. Recomendo muito." }
    ]
  },
  {
    id: 8,
    nome: "Igor Pereira",
    foto: "https://i.pravatar.cc/150?img=15",
    semestre: 2,
    materias: ["Introdução à Programação", "Lógica de Programação"],
    rating: 4.6,
    precoPorHora: 30,
    bio: "2º semestre de Análise e Desenvolvimento de Sistemas, com talento natural para ensinar. Especializado em alunos que nunca programaram antes. Preço acessível para quem está começando.",
    avaliacoes: [
      { aluno: "Amanda Silva",   nota: 5, comentario: "Igor tem o dom de ensinar! Programei pela primeira vez com ele." },
      { aluno: "Lucas Oliveira", nota: 4, comentario: "Muito bom para iniciantes. Explica com calma e paciência." },
      { aluno: "Renata Souza",   nota: 5, comentario: "Melhor investimento do semestre. Aprovada na cadeira!" }
    ]
  }
];
