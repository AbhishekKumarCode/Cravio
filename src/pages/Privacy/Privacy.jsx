import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'

function Privacy() {
  usePageMeta({
    title: 'Privacy Policy — Craivo',
    description: 'How Craivo collects, uses, and protects your information when you use this website or contact us.',
    path: '/privacy',
  })

  return (
    <div className="page-home">
      <SiteHeader />

      <div className="legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: July 2026</p>

        <h2>What we collect</h2>
        <p>When you submit the contact form, we collect your name, email address, project type, budget range, and message. This information is stored securely in our database (Supabase) and sent to us by email (EmailJS) so we can respond to your enquiry.</p>

        <h2>Analytics</h2>
        <p>We use Google Analytics and Cloudflare Web Analytics to understand how visitors use this site (pages viewed, general location, device type). This data is aggregated and is not used to personally identify you.</p>

        <h2>How we use your information</h2>
        <p>We use the details you submit solely to respond to your enquiry, discuss your project, and, if you engage us, to deliver the agreed work. We do not sell or share your information with third parties for marketing purposes.</p>

        <h2>Data retention</h2>
        <p>Enquiry data is retained only as long as needed to respond to you or fulfil a project, unless you ask us to delete it sooner.</p>

        <h2>Your rights</h2>
        <p>You can request access to, correction of, or deletion of your data at any time by emailing us using the contact details on the homepage.</p>

        <Link to="/" className="btn-contact-huge">Back to Home →</Link>
      </div>

      <SiteFooter />
    </div>
  )
}

export default Privacy
