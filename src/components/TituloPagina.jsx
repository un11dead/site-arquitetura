function TituloPagina({ leve, forte }) {
  return (
    <div className="titulo-pagina">
      <h1>
        <span className="titulo-pagina__leve">{leve}</span>
        <span className="titulo-pagina__forte">{forte}</span>
      </h1>
    </div>
  )
}

export default TituloPagina