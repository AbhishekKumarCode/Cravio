import { useState } from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_LINKS = [
  { href: '/#work', label: 'Selected Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#about', label: 'About Us' },
  { href: '/#contact', label: 'Start Your Project', accent: true },
]

function SiteHeader({ links = DEFAULT_LINKS }) {
  const navLinks = links.filter((link) => !link.accent)
  const ctaLink = links.find((link) => link.accent)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="Craivo Homepage">Craivo<sup>&reg;</sup></Link>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {ctaLink && <a href={ctaLink.href} className="nav-cta-btn">{ctaLink.label}</a>}
          <button
            type="button"
            className={`mobile-menu-btn${menuOpen ? ' active' : ''}`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay${menuOpen ? ' active' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-menu-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="mobile-menu-item" onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          {ctaLink && (
            <a href={ctaLink.href} className="btn-primary mobile-menu-cta" onClick={() => setMenuOpen(false)}>
              {ctaLink.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
