import { Link } from 'react-router-dom'

const DEFAULT_LINKS = [
  { href: '/#work', label: 'Selected Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#about', label: 'About Us' },
  { href: '/#contact', label: 'Start Your Project', accent: true },
]

function SiteHeader({ links = DEFAULT_LINKS }) {
  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="Craivo Homepage">CRAIVO</Link>
        <div className="nav-links-wrapper">
          <ul className="nav-menu">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                {link.accent ? (
                  <a href={link.href} className="nav-cta-btn">{link.label}</a>
                ) : (
                  <a href={link.href} className="nav-link">{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
