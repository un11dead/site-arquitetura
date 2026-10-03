import { useState } from 'react'

function FormularioContato() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="form-sucesso">
        <h3>Obrigado!</h3>
        <p>Sua mensagem foi enviada. Entraremos em contato em breve.</p>
        <button
          type="button"
          className="botao botao--escuro"
          onClick={() => setEnviado(false)}
        >
          Voltar
        </button>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={aoEnviar}>
      <input type="text" name="nome" placeholder="Nome" aria-label="Nome" />
      <input
        type="tel"
        name="telefone"
        placeholder="Telefone *"
        aria-label="Telefone"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail *"
        aria-label="E-mail"
        required
      />
      <select
        name="interesse"
        defaultValue=""
        aria-label="Serviço ou projeto de interesse"
      >
        <option value="" disabled>
          Serviço ou projeto de interesse
        </option>
        <option>Projeto residencial</option>
        <option>Projeto comercial</option>
        <option>Projeto corporativo</option>
        <option>Reforma</option>
        <option>Outro</option>
      </select>
      <textarea
        name="mensagem"
        placeholder="Mensagem *"
        aria-label="Mensagem"
        rows="5"
        required
      />
      <button type="submit" className="botao botao--escuro">
        Enviar e-mail <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}

export default FormularioContato