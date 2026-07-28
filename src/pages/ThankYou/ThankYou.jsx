import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'

function ThankYou() {
  usePageMeta({
    title: 'Thank You — Craivo',
    description: 'Thanks for reaching out to Craivo. We received your request and will get back to you within 24 hours.',
    path: '/thank-you',
  })

  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'robots')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', 'noindex, nofollow')
    return () => tag.remove()
  }, [])

  return (
    <div className="page-home">
      <SiteHeader />

      <div className="thank-you-page">
        <div className="glowing-blob-container">
          <div className="glowing-blob"></div>
        </div>

        <span className="section-eyebrow">Request Received</span>
        <h1>Thank You.</h1>
        <p className="about-body thank-you-desc">
          Your project details have been sent through. We'll review them and get back to you within 24 hours with next steps.
        </p>

        <ol className="thank-you-steps">
          <li>We review your project details and budget</li>
          <li>You'll get a reply by email within 24 hours</li>
          <li>We schedule a free consultation call</li>
        </ol>

        <Link to="/" className="btn-contact-huge">Back to Home →</Link>
      </div>

      <SiteFooter />
    </div>
  )
}

export default ThankYou
