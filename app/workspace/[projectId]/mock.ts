import { Board } from "@/app/types";

export let loadLists: Board[] = [
  {
    title: "Tarefas",
    color: "red",
    creatable: true,
    cards: [
      {
        id: 1,
        content: "Verificar status para serem todfos iguais no momento de filtrar nas grids",
        labels: ["#7159c1"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 2,
        content: "Incluir opçao de apoio no formulario de fornecedores (semelhante ao COI)",
        labels: ["#7159c1"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 3,
        content: "Modificar input de adicionar paises",
        labels: ["#7159c1"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 4,
        content: 'Verificar como usuario conseguiu enviar solicitaçao sem preencher pergunta 3 Subcontract"',
        labels: ["#54e1f7"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 5,
        content: "Gravar testes e deploy ReactJS",
        labels: ["#54e1f7"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 6,
        content: "Gravar testes e deploy ReactJS",
        labels: ["#54e1f7"],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
    ],
  },
  {
    title: "Fazendo",
    creatable: false,
    color: "blue",
    cards: [
      {
        id: 6,
        content: "FAZER O DEPLOY EM HOMOLOG",
        labels: [],
        user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
    ],
  },
  // {
  //   title: "Pausado",
  //   creatable: false,
  //   color: "gray",
  //   cards: [
  //     {
  //       id: 7,
  //       content: "Desenvolver logica de permitir visualizaçao da request quando cancelada",
  //       labels: ["#7159c1"],
  //       user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
  //       description:
  //         " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
  //     },
  //     {
  //       id: 8,
  //       content:
  //         "postal quando o país for BR? Temos que ver como adicionar campo Bairro ao lado de complemento ou não trazer o bairro, se país = Brasil",
  //       labels: ["#54e1f7"],
  //       user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
  //       description:
  //         " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
  //     },
  //     {
  //       id: 9,
  //       content: "Ajustes na biblioteca unform",
  //       labels: [],
  //       description:
  //         " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
  //     },
  //   ],
  // },
  {
    title: "Concluído",
    creatable: false,
    color: "ligthGreen",
    cards: [
      {
        id: 10,
        content: "O campo quantidade de empregados está populado com zero. Não popular.",
        labels: [],
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 12,
        content: "Países em que opera – quando usuário escolher um país e quiser adicionar outro, sempre limpar campo depois de adicionado.  ",
        labels: ["#54e1f7"],
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
      {
        id: 13,
        content: "Adicionar mais uma coluna Pais (endereço) na tabela do formulario Fornecedores",
        labels: ["#7159c1"],
        description:
          " O artigo analisa o impacto das redes sociais na saúde mental dos adolescentes, considerando diversos estudos e pesquisas recentes. Ele destaca que, embora as redes sociais ofereçam oportunidades de conexão e interação, também podem contribuir para o aumento do estresse, ansiedade, e depressão entre os adolescentes.",
      },
    ],
  },
];
