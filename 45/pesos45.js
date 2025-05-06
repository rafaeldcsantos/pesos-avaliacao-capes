
// Data
const data = {
  name: "Raiz",
  info: "Categorias",
  children: [
    {
      name: "Programa", label: "1", weight: 100/3, info: "1",
      children: [
        {
          name: "Identidade e Condições de Funcionamento", label: "1.1", weight: 60, info: "1.1",
          children: [
            { name: "Identidade e condições de funcionamento (missão, infraestrutura, articulação interna)", label: "1.1.1", value: 60, info: "1.1.1" },
            { name: "Avaliação do Corpo Docente e grau de interdisciplinaridade (Portaria 81/2016)", label: "1.1.2", value: 20, info: "1.1.2" },
            { name: "Qualidade e envolvimento do Corpo Docente nas atividades do Programa", label: "1.1.3", value: 20, info: "1.1.3" },
          ]
        },
        {
          name: "Procedimentos e Usos da Autoavaliação", label: "1.2", info: "1.2", weight: 20,
          children: [
            { name: "Composição da comissão de autoavaliação", label: "1.2.1", value: 20, info: "1.2.1" },
            { name: "Descrição dos objetivos, metas, metodologias e resultados", label: "1.2.2", value: 30, info: "1.2.2" },
            { name: "Efetividade do processo de autoavaliação, identificação de problemas e busca de soluções", label: "1.2.3", value: 50, info: "1.2.3" },
          ]
        },
        {
          name: "Planejamento Estratégico em articulação com Plano de Desenvolvimento Institucional", label: "1.3", info: "1.3", weight: 20,
          children: [
            { name: "Planejamento Estratégico (metas e ações), apoio institucional, estratégias", label: "1.3.1", value: 100, info: "1.3.1" },
          ]
        }
      ]
    },
    {
      name: "Formação e Produção Intelectual", label: "2", weight: 100/3, info: "2",
      children: [
        {
          name: "Qualidade de Teses e Dissertações, adequação às áreas e linhas do programa", label: "2.1", weight: 25, info: "2.1",
          children: [
            { name: "Vinculação das teses e dissertações às linhas e projetos integradores", label: "2.1.1", value: 40, info: "2.1.1" },
            { name: "Composição das comissões avaliadoras das teses e dissertações", label: "2.1.2", value: 20, info: "2.1.2" },
            { name: "Qualidade e relevância de uma amostra das teses e dissertações", label: "2.1.3", value: 40, info: "2.1.3" }
          ]
        },
        {
          name: "Destino e Atuação dos Egressos", label: "2.2", weight: 25, info: "2.2",
          children: [
            { name: "Adequação dos procedimentos de acompanhamento dos egressos", label: "2.2.1",  value: 50, info: "2.2.1" },
            { name: "Destinos, atuações e impactos (acadêmicos, sociais, econômicos, profissionais)", label: "2.2.2", value: 50, info: "2.2.2" }
          ]
        },
        {
          name: "Qualidade da Produção Intelectual de Discentes e Egressos", label: "2.3", weight: 25, info: "2.3",
          children: [
            { name: "Participação de discentes e/ou egressos autores da pós-graduação", label: "2.3.1", value: 25, info: "2.3.1" },
            { name: "Produção intelectual com participação discente e de egressos autores", label: "2.3.2", value: 25, info: "2.3.2" },
            { name: "Produção estratificada do corpo discente e/ou egresso", label: "2.3.3", value: 50, info: "2.2.3" }
          ]
        },
        {
          name: "Qualidade das Atividades de Pesquisa e da Produção Intelectual Docente", label: "2.4", weight: 25, info: "2.4",
          children: [
            { name: "Produção total dos docentes permanentes do programa", label: "2.4.1", value: 35, info: "2.4.1" },
            { name: "Produção qualificada dos docentes permanentes nos estratos superiores", label: "2.4.2", value: 30, info: "2.4.2" },
            { name: "Avaliação qualitativa dos principais produtos dos docentes permanentes", label: "2.4.3", value: 35, info: "2.4.3" }
          ]
        }        
      ]
    },
    {
      name: "Impacto (Local, Regional, Nacional, Internacional)", label: "3", weight: 100/3, info: "3",
      children: [
        {
          name: "Inserção, Visibilidade, Popularização da Ciência", label: "3.1", weight: 30, info: "3.1",
          children: [
            { name: "Dimensões de internacionalização e inserção (local, regional, nacional, internacional)", label: "3.1.1",  value: 60, info: "3.1.1" },
            { name: "Popularização da Ciência", label: "3.1.2", value: 20, info: "3.1.2" },
            { name: "Visibilidade", label: "3.1.3", value: 20, info: "3.1.3" }
          ]
        },
        {
          name: "Inovação, Transferência e Compartilhamento de Conhecimento", label: "3.2", weight: 30, info: "3.2",
          children: [
            { name: "Dez casos de sucesso de transferência e compartilhamento de conhecimento", label: "3.2.1", value: 100, info: "3.2.1" },
          ]
        },
        {
          name: "Impactos do Programa para a Sociedade", label: "3.3", weight: 40, info: "3.3",
          children: [
            { name: "Cinco casos de sucesso de ações/produtos de ensino, pesquisa e inovação, e extensão", label: "3.3.1", value: 100, info: "3.3.1" },
          ]
        }        
      ]
    }
  ]
};