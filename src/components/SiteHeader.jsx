import { Link } from 'react-router-dom'

function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="Craivo Homepage">CRAIVO</Link>
        <div className="nav-links-wrapper">
          <ul className="nav-menu">
            <li className="nav-item"><a href="/#work" className="nav-link">Selected Work</a></li>
            <li className="nav-item"><a href="/#services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/#pricing" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="/#about" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="/#contact" className="nav-link" style={{ color: 'var(--accent)', fontWeight: 700 }}>Start Your Project</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
