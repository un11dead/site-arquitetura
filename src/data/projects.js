export const projetos = [
  {
    id: 1,
    nome: 'Residência Aurora',
    categoria: 'Residencial',
    localizacao: 'São Paulo - SP',
    ano: 2024,
    descricao:
      'Edifício residencial de volumes sobrepostos que se projetam em balanço, com grandes aberturas voltadas para a luz natural.',
    texto: [
      'A Residência Aurora nasceu da ideia de empilhar volumes de proporções diferentes, criando varandas generosas e áreas sombreadas ao longo de toda a fachada.',
      'Os materiais claros e as esquadrias contínuas reforçam a leveza do conjunto e garantem ventilação cruzada em todos os apartamentos.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-695492482-1024x1024.jpg',
  },
  {
    id: 2,
    nome: 'Torre Cristal',
    categoria: 'Corporativo',
    localizacao: 'Campinas - SP',
    ano: 2023,
    descricao:
      'Torre comercial com fachada de vidro e montantes metálicos, pensada para trazer eficiência energética e conforto térmico.',
    texto: [
      'A fachada em pele de vidro da Torre Cristal combina painéis de alto desempenho com uma modulação rigorosa, que organiza tanto o exterior quanto os layouts internos.',
      'Os pavimentos livres permitem diferentes arranjos de escritório, com iluminação natural em praticamente todas as estações de trabalho.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-807481498-1024x1024.jpg',
  },
  {
    id: 3,
    nome: 'Casa Horizonte',
    categoria: 'Residencial',
    localizacao: 'Atibaia - SP',
    ano: 2022,
    descricao:
      'Casa térrea de linhas horizontais, que integra sala, varanda e jardim em um único espaço contínuo.',
    texto: [
      'A Casa Horizonte se estende pelo terreno em um só nível, com uma laje fina que avança sobre a varanda e protege os ambientes do sol forte.',
      'Os grandes planos de vidro dissolvem o limite entre interior e exterior, enquanto o jardim paisagístico acompanha toda a extensão da casa.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-941237204-1024x1024.jpg',
  },
  {
    id: 4,
    nome: 'Galeria dos Arcos',
    categoria: 'Cultural',
    localizacao: 'Santos - SP',
    ano: 2021,
    descricao:
      'Espaço cultural com uma colunata de arcos que reinterpreta a arquitetura clássica com linguagem contemporânea.',
    texto: [
      'A Galeria dos Arcos organiza exposições, oficinas e eventos sob uma sequência de arcos que filtra a luz e cria um percurso coberto ao longo de toda a fachada.',
      'As cores quentes do revestimento dialogam com o entorno histórico e dão identidade ao edifício.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-1048358188-1024x1024.jpg',
  },
  {
    id: 5,
    nome: 'Edifício Terraços',
    categoria: 'Residencial',
    localizacao: 'Curitiba - PR',
    ano: 2024,
    descricao:
      'Edifício escalonado em terraços, que cria espaços verdes privativos em cada andar e valoriza a vista.',
    texto: [
      'Cada pavimento do Edifício Terraços recua em relação ao anterior, formando varandas amplas que funcionam como jardins suspensos.',
      'O escalonamento também permite que a luz alcance os andares inferiores, criando ambientes mais claros e agradáveis.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-1426813552-1024x1024.jpg',
  },
  {
    id: 6,
    nome: 'Casa do Vale',
    categoria: 'Residencial',
    localizacao: 'Campos do Jordão - SP',
    ano: 2020,
    descricao:
      'Casa de telhado em duas águas, pensada para o clima de montanha, com ambientes aconchegantes e amplas janelas.',
    texto: [
      'O telhado inclinado da Casa do Vale protege do frio e da chuva e cria um pé-direito alto na sala, que se abre para a paisagem.',
      'Os materiais naturais e a paleta suave integram a construção ao terreno, mantendo o conforto durante o ano todo.',
    ],
    imagem: '/imagens/imagenssp/istockphoto-1282518866-1024x1024.jpg',
  },
]
    
export const plantaBaixa = '/imagens/planta.svg'

export function buscarProjetoPorId(id) {
  return projetos.find((projeto) => projeto.id === Number(id))
}