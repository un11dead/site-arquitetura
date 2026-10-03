import { Link } from 'react-router-dom'

function ProjectCard({ projeto }) {
  return (
    <article className="project-card">
      <img
        className="project-card__imagem"
        src={projeto.imagem}
        alt={projeto.nome}
      />

      <div className="project-card__conteudo">
        <div>
          <h2>{projeto.nome}</h2>
          <p className="project-card__meta">
            {projeto.categoria} · {projeto.localizacao} · {projeto.ano}
          </p>
        </div>

        <p className="project-card__texto">{projeto.descricao}</p>

        <Link to={`/projetos/${projeto.id}`} className="botao botao--claro">
          Ver mais <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard