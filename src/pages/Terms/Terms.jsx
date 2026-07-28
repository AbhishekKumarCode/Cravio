import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Terms() {
  usePageMeta({
    title: 'Terms of Service — Craivo',
    description: 'The terms that apply when you engage Craivo for web design and development work.',
    path: '/terms',
  })

  return (
    <div className="page-home legal-page">
      <Link to="/" className="nav-logo" aria-label="Craivo Homepage">CRAIVO</Link>
      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: July 2026</p>

      <h2>Services</h2>
      <p>Craivo provides web design and development services as agreed in writing (email or proposal) with each client before work begins, covering scope, timeline, and price.</p>

      <h2>Payment</h2>
      <p>Unless otherwise agreed, projects require an upfront deposit before work starts, with the remaining balance due on delivery. Work is not handed over (source files, hosting access) until payment is received in full.</p>

      <h2>Revisions</h2>
      <p>Each project includes a reasonable number of revision rounds as agreed in the project scope. Requests beyond the agreed scope may incur additional cost.</p>

      <h2>Ownership</h2>
      <p>Once a project is paid in full, ownership of the final delivered website and its custom code transfers to the client. Craivo retains the right to showcase completed work in its portfolio unless the client requests otherwise in writing.</p>

      <h2>Liability</h2>
      <p>Craivo is not liable for indirect or consequential losses arising from use of the delivered website, including third-party service outages (hosting, payment processors, APIs) outside our control.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in New Delhi.</p>

      <Link to="/" className="btn-contact-huge">Back to Home →</Link>
    </div>
  )
}

export default Terms
