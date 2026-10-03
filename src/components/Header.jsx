import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

function Header() {
  const [aberto, setAberto] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setAberto(false)
  }, [pathname])

  return (
    <header className="header">
      <Logo />

      <button
        type="button"
        className={aberto ? 'header__toggle header__toggle--aberto' : 'header__toggle'}
        onClick={() => setAberto(!aberto)}
        aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={aberto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={aberto ? 'header__nav header__nav--aberto' : 'header__nav'}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}

export default Header