import { Link } from 'react-router-dom'
import { projetos } from '../data/projects.js'
import TituloPagina from '../components/TituloPagina.jsx'

const numeros = [
  { valor: '15+', rotulo: 'Anos de experiência' },
  { valor: '120', rotulo: 'Projetos entregues' },
  { valor: '8', rotulo: 'Profissionais na equipe' },
]

const valores = [
  {
    titulo: 'Clareza',
    texto:
      'Explicamos cada decisão de projeto de forma simples, para que você acompanhe tudo com segurança, da ideia à obra.',
  },
  {
    titulo: 'Luz natural',
    texto:
      'Cada espaço é pensado para aproveitar a luz do dia, trazendo conforto, economia de energia e bem-estar.',
  },
  {
    titulo: 'Atenção aos detalhes',
    texto:
      'É nos detalhes de acabamento, de material e de proporção que um projeto deixa de ser bom e passa a ser memorável.',
  },
]

function Sobre() {
  return (
    <main>
      <TituloPagina leve="Conheça a" forte="Linha Arquitetura" />

      {/* Apresentação */}
      <section className="sobre-intro">
        <img src={projetos[2].imagem} alt="Projeto do escritório Linha Arquitetura" />

        <div>
          <p className="sobre-intro__destaque">
            Somos um escritório de arquitetura que acredita que bons espaços
            nascem de boas conversas.
          </p>
          <p>
            Há mais de 15 anos desenvolvemos projetos residenciais, comerciais
            e culturais, sempre com foco em clareza, luz natural e atenção aos
            detalhes. Nossa equipe acompanha cada etapa, do estudo preliminar à
            entrega da obra.
          </p>
          <p>
            Cada projeto é único: partimos da necessidade de quem vai usar o
            espaço, do terreno e do entorno para criar soluções que sejam
            bonitas, funcionais e duradouras.
          </p>
        </div>
      </section>

      {/* Números */}
      <section className="numeros">
        {numeros.map((item) => (
          <div key={item.rotulo}>
            <span className="numeros__valor">{item.valor}</span>
            <span className="numeros__rotulo">{item.rotulo}</span>
          </div>
        ))}
      </section>

      {/* Valores */}
      <section className="valores">
        <h2 className="secao-titulo">Nossos valores</h2>

        <div className="valores__grade">
          {valores.map((valor, indice) => (
            <div key={valor.titulo} className="valor">
              <span className="valor__numero">
                {String(indice + 1).padStart(2, '0')}
              </span>
              <h3>{valor.titulo}</h3>
              <p>{valor.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Convite */}
      <section className="sobre-cta">
        <h2>Vamos conversar sobre o seu projeto?</h2>
        <Link to="/contato" className="botao botao--escuro">
          Fale conosco <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  )
}

export default Sobre