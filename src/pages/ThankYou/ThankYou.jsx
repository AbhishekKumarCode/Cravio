import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'

function ThankYou() {
  usePageMeta({
    title: 'Thank You — Craivo',
    description: 'Thanks for reaching out to Craivo. We received your request and will get back to you within 24 hours.',
    path: '/thank-you',
  })

  return (
    <div className="page-home thank-you-page">
      <Link to="/" className="nav-logo" aria-label="Craivo Homepage">CRAIVO</Link>
      <h1>Thank You.</h1>
      <p className="about-body">
        Your request has been received. We'll get back to you within 24 hours.
      </p>
      <Link to="/" className="btn-contact-huge">Back to Home →</Link>
    </div>
  )
}

export default ThankYou
