import TituloPagina from '../components/TituloPagina.jsx'
import FormularioContato from '../components/FormularioContato.jsx'

function Contato() {
  return (
    <main>
      <TituloPagina leve="Informações de" forte="Contato" />

      <section className="contato-topo">
        <div className="contato-info">
          <p className="contato-info__nome">Linha Arquitetura</p>
          <p className="contato-info__texto">
            Rua Exemplo, 1234
            <br />
            São Paulo - SP, 01000-000
          </p>

          <p className="contato-info__destaque">(11) 3333-2222</p>

          <p className="contato-info__texto">contato@linhaarquitetura.com</p>
          <p className="contato-info__texto">Seg a Sex, 9h às 18h</p>

          <a href="#formulario" className="botao botao--escuro">
            Enviar mensagem
          </a>
        </div>

        <iframe
          className="contato-mapa"
          title="Mapa com a localização do escritório"
          src="https://www.google.com/maps?q=S%C3%A3o%20Paulo%20SP&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      <section id="formulario" className="contato-formulario">
        <h2 className="secao-titulo">Envie uma mensagem</h2>
        <FormularioContato />
        <p className="contato-formulario__aviso">
          Ao enviar a mensagem, você concorda com a nossa política de
          privacidade.
        </p>
      </section>
    </main>
  )
}

export default Contato