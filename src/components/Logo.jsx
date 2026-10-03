import { Link } from 'react-router-dom'

function Logo({ claro = false }) {
  return (
    <Link
      to="/"
      className={claro ? 'logo logo--claro' : 'logo'}
      aria-label="Linha Arquitetura - página inicial"
    >
      <svg
        className="logo__simbolo"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <rect x="6" y="4" width="6" height="32" rx="1" fill="currentColor" stroke="none" />
        <path d="M26 6 L17 36" />
        <path d="M26 6 L35 36" />
        <path d="M21 26 H31" />
        <circle cx="26" cy="5" r="2.2" fill="currentColor" stroke="none" />
      </svg>

      <span className="logo__texto">
        <span className="logo__nome">LINHA</span>
        <span className="logo__sub">ARQUITETURA</span>
      </span>
    </Link>
  )
}

export default Logo