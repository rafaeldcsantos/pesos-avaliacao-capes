
// Data
const data = {
  name: "Raiz",
  info: "Categorias",
  children: [
    {
      name: "Programa", label: "1", weight: 100/3, info: "1",
      children: [
        {
          name: "Identidade e Condições de Funcionamento", label: "1.1", weight: 50, info: "1.1",
          children: [
            { name: "Missão, corpo docente, infraestrutura, articulação e estrutura curricular", label: "1.1.1", value: 75, info: "1.1.1" },
            { name: "Avaliação dos projetos (de pesquisa, desenvolvimento e/ou inovação) com financiamento e com participação discente", label: "1.1.2", value: 25, info: "1.1.2" },
          ]
        },
        {
          name: "Princípios, procedimentos e usos dos resultados da autoavaliação", label: "1.2", info: "1.2", weight: 20,
          children: [
            { name: "Processo e procedimentos", label: "1.2.1", value: 30, info: "1.2.1" },
            { name: "Atores envolvidos", label: "1.2.2", value: 10, info: "1.2.2" },
            { name: "Periodicidade", label: "1.2.3", value: 10, info: "1.2.3" },
            { name: "Consistência com o Planejamento Estratégico", label: "1.2.4", value: 10, info: "1.2.4" },
            { name: "Monitoramento e utilização de resultados", label: "1.2.5", value: 40, info: "1.2.5" },
          ]
        },
        {
          name: "Planejamento Estratégico em articulação com Plano de Desenvolvimento Institucional", label: "1.3", info: "1.3", weight: 30,
          children: [
            { name: "Consistência do Planejamento Estratégico", label: "1.3.1", value: 30, info: "1.3.1" },
            { name: "Coerência do Plano Estratégico", label: "1.3.2", value: 30, info: "1.3.2" },
            { name: "Promoção de DEI e redução de assimetrias", label: "1.3.3", value: 40, info: "1.3.3" },
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
            { name: "Uniformidade em AC e LP e adequação da justificativa", label: "2.1.1", value: 20, info: "2.1.1" },
            { name: "Diversidade em bancas", label: "2.1.2", value: 10, info: "2.1.2" },
            { name: "Produção associada a teses e dissertações", label: "2.1.3", value: 70, info: "2.1.3" },
          ]
        },
        {
          name: "Destino e Atuação dos Egressos", label: "2.2", weight: 20, info: "2.2",
          children: [
            { name: "Egressos de Destaque", label: "2.2.1",  value: 100, info: "2.2.1" },
          ]
        },
        {
          name: "Qualidade da Produção Intelectual de Discentes e Egressos", label: "2.3", weight: 25, info: "2.3",
          children: [
            { name: "Publicações associada às teses", label: "2.3.1", value: 50, info: "2.3.1" },
            { name: "Publicações associadas às dissertações", label: "2.3.2", value: 15, info: "2.3.2" },
            { name: "Produção técnica/tecnológica", label: "2.3.3", value: 15, info: "2.3.3" },
            { name: "Internacionalização do Corpo Discente", label: "2.3.4", value: 20, info: "2.3.4" }
          ]
        },
        {
          name: "Qualidade das atividades de pesquisa e da produção intelectual do corpo docente", label: "2.4", weight: 30, info: "2.4",
          children: [
            { name: "Publicações", label: "2.4.1", value: 50, info: "2.4.1" },
            { name: "Índice h2 médio", label: "2.4.2", value: 15, info: "2.4.2" },
            { name: "Distribuição do índice h", label: "2.4.3", value: 15, info: "2.4.3" },
            { name: "Internacionalização do Corpo Docente", label: "2.4.4", value: 20, info: "2.4.4" },
          ]
        }        
      ]
    },
    {
      name: "Impacto (Local, Regional, Nacional, Internacional)", label: "3", weight: 100/3, info: "3",
      children: [
        {
          name: "Inserção, Visibilidade, Popularização da Ciência", label: "3.1", weight: 35, info: "3.1",
          children: [
            { name: "Inserção Internacional do Programa", label: "3.1.1",  value: 25, info: "3.1.1" },
            { name: "Inserção Nacional", label: "3.1.2", value: 25, info: "3.1.2" },
            { name: "Premiações e outros reconhecimentos", label: "3.1.3", value: 30, info: "3.1.3" },
            { name: "Visibilidade e popularização da ciência", label: "3.1.4", value: 20, info: "3.1.4" },
          ]
        },
        {
          name: "Inovação, Transferência e Compartilhamento de Conhecimento", label: "3.2", weight: 40, info: "3.2",
          children: [
            { name: "Inovação, Transferência e Compartilhamento de Conhecimento", label: "3.2.1", value: 100, info: "3.2.1" },
          ]
        },
        {
          name: "Impactos do Programa para a Sociedade", label: "3.3", weight: 25, info: "3.3",
          children: [
            { name: "Impacto do Programa para o desenvolvimento sustentável", label: "3.3.1", value: 75, info: "3.3.1" },
            { name: "Impacto das publicações em termos de indicadores para desenvolvimento sustentável - destaques", label: "3.3.2", value: 25, info: "3.3.2" },
          ]
        }        
      ]
    }
  ]
};