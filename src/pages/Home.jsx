import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projetos } from '../data/projects.js'
import FormularioContato from '../components/FormularioContato.jsx'

const destaques = projetos.slice(0, 3)
const projetosDaGrade = projetos.slice(0, 5)

function Home() {
  const [indice, setIndice] = useState(0)
  const atual = destaques[indice]

  function anterior() {
    setIndice((indice - 1 + destaques.length) % destaques.length)
  }

  function proximo() {
    setIndice((indice + 1) % destaques.length)
  }

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero__texto">
          <h1 className="hero__titulo">
            <span className="hero__leve">Projeto</span>
            <span className="hero__forte">{atual.nome}</span>
          </h1>

          <div className="paginacao">
            <span className="paginacao__atual">
              {String(indice + 1).padStart(2, '0')}
            </span>
            <span className="paginacao__barra" aria-hidden="true"></span>
            <span className="paginacao__total">
              {String(destaques.length).padStart(2, '0')}
            </span>

            <button onClick={anterior} aria-label="Projeto anterior">←</button>
            <button onClick={proximo} aria-label="Próximo projeto">→</button>
          </div>
        </div>

        <div className="hero__imagem">
          <img src={atual.imagem} alt={atual.nome} />
          <Link
            to={`/projetos/${atual.id}`}
            className="botao botao--claro hero__botao"
          >
            Ver projeto <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre-home">
        <div className="sobre-home__imagens">
          <img src={projetos[3].imagem} alt="" />
          <img src={projetos[4].imagem} alt="" />
        </div>

        <div className="sobre-home__texto">
          <h2 className="secao-titulo">Sobre</h2>
          <p>
            A Linha Arquitetura é um escritório dedicado a projetos
            residenciais, comerciais e culturais. Da primeira conversa até a
            entrega da obra, trabalhamos com clareza, luz natural e atenção aos
            detalhes para transformar ideias em espaços onde as pessoas queiram
            estar.
          </p>
          <Link to="/sobre" className="botao botao--claro">
            Saiba mais <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Missão e foco */}
      <section className="missao">
        <h2 className="secao-titulo">Missão e foco</h2>

        <div className="missao__itens">
          <div className="missao__item">
            <span className="missao__numero">1</span>
            <p>
              Projetar espaços que unem funcionalidade, beleza e conforto,
              sempre a partir da necessidade real de cada cliente.
            </p>
          </div>

          <div className="missao__item">
            <span className="missao__numero">2</span>
            <p>
              Acompanhar cada etapa, do estudo preliminar à obra, com
              transparência, prazos claros e compromisso com a sustentabilidade.
            </p>
          </div>
        </div>
      </section>
          
      <section className="projetos-home">
        <h2 className="secao-titulo">Nossos projetos</h2>

        <div className="projetos-home__grade">
          {projetosDaGrade.map((projeto) => (
            <Link
              key={projeto.id}
              to={`/projetos/${projeto.id}`}
              className="projeto-tile"
            >
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="projeto-tile__overlay">
                <h3>{projeto.nome}</h3>
                <span>Ver mais →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="projetos-home__rodape">
          <Link to="/projetos" className="botao botao--escuro">
            Todos os projetos <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Fale conosco */}
      <section className="contato-home">
        <h2 className="secao-titulo">Fale conosco</h2>

        <div className="contato-home__grid">
          <FormularioContato />
          <img
            className="contato-home__imagem"
            src={projetos[1].imagem}
            alt=""
          />
        </div>
      </section>
    </main>
  )
}

export default Home