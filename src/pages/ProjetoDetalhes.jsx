import { Link, useParams } from 'react-router-dom'
import { buscarProjetoPorId, plantaBaixa } from '../data/projects.js'
import TituloPagina from '../components/TituloPagina.jsx'

function ProjetoDetalhes() {
  const { id } = useParams()
  const projeto = buscarProjetoPorId(id)

  if (!projeto) {
    return (
      <main>
        <TituloPagina leve="Projeto" forte="não encontrado" />
        <p>Não encontramos nenhum projeto com o id "{id}".</p>
        <Link to="/projetos" className="botao botao--escuro">
          ← Voltar aos projetos
        </Link>
      </main>
    )
  }

  return (
    <main>
      <TituloPagina leve={projeto.categoria} forte={projeto.nome} />

      <img className="detalhe__capa" src={projeto.imagem} alt={projeto.nome} />

      <section className="detalhe__corpo">
        <dl className="detalhe__ficha">
          <div>
            <dt>Categoria</dt>
            <dd>{projeto.categoria}</dd>
          </div>
          <div>
            <dt>Localização</dt>
            <dd>{projeto.localizacao}</dd>
          </div>
          <div>
            <dt>Ano</dt>
            <dd>{projeto.ano}</dd>
          </div>
        </dl>

        <div className="detalhe__texto">
          <p className="detalhe__resumo">{projeto.descricao}</p>
          {projeto.texto.map((paragrafo, indice) => (
            <p key={indice}>{paragrafo}</p>
          ))}
        </div>
      </section>

      <img
        className="detalhe__planta"
        src={plantaBaixa}
        alt={`Planta baixa do projeto ${projeto.nome}`}
      />

      <Link to="/projetos" className="botao botao--escuro">
        ← Voltar aos projetos
      </Link>
    </main>
  )
}

export default ProjetoDetalhes