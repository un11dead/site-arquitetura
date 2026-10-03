import { useState } from 'react'
import { projetos } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import TituloPagina from '../components/TituloPagina.jsx'

const POR_PAGINA = 3

function Projetos() {
  const [pagina, setPagina] = useState(1)

  const totalPaginas = Math.ceil(projetos.length / POR_PAGINA)
  const inicio = (pagina - 1) * POR_PAGINA
  const projetosDaPagina = projetos.slice(inicio, inicio + POR_PAGINA)

  function mudarPagina(novaPagina) {
    setPagina(novaPagina)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <TituloPagina leve="Nossos" forte="Projetos" />

      <div className="projetos-lista">
        {projetosDaPagina.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>

      <div className="paginacao">
        <span className="paginacao__atual">
          {String(pagina).padStart(2, '0')}
        </span>
        <span className="paginacao__barra" aria-hidden="true"></span>
        <span className="paginacao__total">
          {String(totalPaginas).padStart(2, '0')}
        </span>

        <button
          onClick={() => mudarPagina(pagina - 1)}
          disabled={pagina === 1}
          aria-label="Página anterior"
        >
          ←
        </button>
        <button
          onClick={() => mudarPagina(pagina + 1)}
          disabled={pagina === totalPaginas}
          aria-label="Próxima página"
        >
          →
        </button>
      </div>
    </main>
  )
}

export default Projetos