import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const redes = [
  { nome: 'Facebook', rotulo: 'f' },
  { nome: 'X (Twitter)', rotulo: 'X' },
  { nome: 'LinkedIn', rotulo: 'in' },
  { nome: 'Pinterest', rotulo: 'P' },
]

function IconeEndereco() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconeTelefone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

function IconeEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function IconeRelogio() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__marca">
            <Logo claro />
            <p>
              Projetos residenciais, comerciais e corporativos pensados com
              clareza, luz e atenção aos detalhes.
            </p>
          </div>

          <div>
            <h4>Informações</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projetos">Projetos</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul className="footer__contato">
              <li>
                <IconeEndereco />
                <span>Rua Exemplo, 1234<br />São Paulo - SP, 01000-000</span>
              </li>
              <li>
                <IconeTelefone />
                <span>(11) 3333-2222</span>
              </li>
              <li>
                <IconeEmail />
                <span>contato@linhaarquitetura.com</span>
              </li>
              <li>
                <IconeRelogio />
                <span>Seg a Sex, 9h às 18h</span>
              </li>
            </ul>
          </div>

          <div>
            <h4>Redes sociais</h4>
            <div className="footer__redes">
              {redes.map((rede) => (
                <a key={rede.nome} href="#" aria-label={rede.nome}>
                  {rede.rotulo}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © 2026 Linha Arquitetura. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer