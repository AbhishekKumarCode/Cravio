import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'

function NotFound() {
  usePageMeta({
    title: 'Page Not Found — Craivo',
    description: 'The page you are looking for does not exist.',
  })

  return (
    <div className="page-home">
      <SiteHeader />

      <div className="thank-you-page">
        <span className="section-eyebrow">404</span>
        <h1>Page Not Found.</h1>
        <p className="about-body thank-you-desc">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-contact-huge">Back to Home →</Link>
      </div>

      <SiteFooter />
    </div>
  )
}

export default NotFound
