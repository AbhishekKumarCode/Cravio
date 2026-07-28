import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Home/Home.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import { submitContactForm } from '../../lib/submitContactForm.js'
import SiteHeader from '../../components/SiteHeader.jsx'
import SiteFooter from '../../components/SiteFooter.jsx'

const ICONS = {
  server: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></>,
  cloud: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  layers: <><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
}

const CAPABILITY_GROUPS = [
  { icon: 'server', title: 'Infrastructure & Automation', desc: 'ERP/SaaS (on-premises), IT automation, IT helpdesk, assets management, automatic inventory, and IT security.' },
  { icon: 'database', title: 'Systems & Databases', desc: 'Linux support (Red Hat, Ubuntu, Fedora) plus Oracle Database, SAP HANA, MySQL, and MongoDB.' },
  { icon: 'cloud', title: 'Cloud & Collaboration', desc: 'OwnCloud, NextCloud, Seafile; AWS/Azure/Google/Oracle Cloud support; compute within your budget; mail migration (Zoho, Google, O365).' },
  { icon: 'bolt', title: 'Modern Stack', desc: 'AWS, Node.js, WhatsApp API integration, and SSL/web security, layered onto whatever you already run.' },
]

const SAAS_SOLUTIONS = [
  { title: 'HRMS', desc: 'Hiring, payroll, attendance, and performance tracking in one system.' },
  { title: 'CRM', desc: 'Track leads, follow-ups, and customer relationships end to end.' },
  { title: 'Helpdesk', desc: 'Ticketing and support workflows for internal or customer-facing teams.' },
  { title: 'Education ERP', desc: 'Admissions, fees, attendance, and academics for schools and institutes.' },
  { title: 'Loan Management System', desc: 'Loan origination, EMI tracking, and repayment management.' },
]

function ITServices() {
  usePageMeta({
    title: 'IT & SaaS Solutions — Craivo',
    description: 'Enterprise IT infrastructure, cloud, and ready-made SaaS solutions — ERP, HRMS, CRM, Helpdesk, and more.',
    path: '/it-services',
  })

  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    submitContactForm({
      name: form.name,
      email: form.email,
      project: 'it-services',
      projectLabel: 'IT / SaaS Services',
      budget: 'not-specified',
      budgetLabel: 'Not specified',
      message: form.message,
    }).then((ok) => {
      if (ok) {
        navigate('/thank-you')
      } else {
        setStatus('error')
      }
    })
  }

  return (
    <div className="page-home">
      <SiteHeader />

      <section className="hero" style={{ minHeight: 'auto', padding: '80px 0 60px' }}>
        <div className="glowing-blob-container"><div className="glowing-blob"></div></div>
        <div className="container hero-container-box">
          <div className="hero-center-titles">
            <h1 className="hero-headline-large">IT Infrastructure &amp;</h1>
            <h2 className="hero-headline-gradient">Ready-Made SaaS.</h2>
          </div>
          <div className="hero-bottom-row">
            <div className="hero-bottom-left">
              <p className="hero-desc-copy">
                From on-prem servers and cloud migration to HRMS, CRM, and helpdesk platforms — Craivo's IT & SaaS
                division handles the infrastructure and the software your operations run on.
              </p>
              <div style={{ display: 'flex', gap: 15, alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#contact" className="hero-know-more">Get a Quote <span>→</span></a>
                <a href="#capabilities" className="hero-secondary-btn">See Capabilities</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">CAPABILITIES</span>
            <h2 className="section-title">IT infrastructure, covered end to end.</h2>
          </div>
          <div className="services-grid-container">
            {CAPABILITY_GROUPS.map((group, i) => (
              <div className="service-tile" key={group.title}>
                <div className="service-tile-top">
                  <div className="service-icon-wrapper">
                    <svg viewBox="0 0 24 24">{ICONS[group.icon]}</svg>
                  </div>
                  <div className="service-watermark">0{i + 1}</div>
                </div>
                <h3 className="service-tile-name">{group.title}</h3>
                <p className="service-tile-desc">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">SAAS SOLUTIONS</span>
            <h2 className="section-title">Or skip the build — deploy a ready-made platform.</h2>
          </div>
          <div className="services-grid-container">
            {SAAS_SOLUTIONS.map((sol, i) => (
              <div className="service-tile" key={sol.title}>
                <div className="service-tile-top">
                  <div className="service-icon-wrapper">
                    <svg viewBox="0 0 24 24">{ICONS.layers}</svg>
                  </div>
                  <div className="service-watermark">0{i + 1}</div>
                </div>
                <h3 className="service-tile-name">{sol.title}</h3>
                <p className="service-tile-desc">{sol.desc}</p>
                <a href="#contact" className="service-tile-explore">Get a Quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-spacing">
        <div className="cta-orbs-container">
          <div className="cta-orb orb-1"></div>
          <div className="cta-orb orb-2"></div>
        </div>
        <div className="container">
          <div className="contact-container">
            <div>
              <span className="section-eyebrow">GET A QUOTE</span>
              <h2 className="giant-contact-headline">Tell us what you need <em>running</em>.</h2>
              <p className="contact-proposal-text">
                Share a few details and we'll get back to you with next steps — no obligation.
              </p>
            </div>

            <div className="contact-right" style={{ width: '100%' }}>
              <form className="premium-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="its-name">Your Name</label>
                    <input type="text" id="its-name" name="name" className="form-input" placeholder="e.g. Sneha Arora" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="its-email">Work Email</label>
                    <input type="email" id="its-email" name="email" className="form-input" placeholder="e.g. it@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="its-message">What do you need?</label>
                  <textarea id="its-message" name="message" className="form-input" rows="4" placeholder="ERP, cloud migration, HRMS, something else..." required style={{ resize: 'vertical' }} value={form.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="form-submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : <>Send Request <span>→</span></>}
                </button>
              </form>
              {status === 'error' && (
                <div className="form-status-msg" style={{ display: 'block', marginTop: 15, padding: 12, borderRadius: 8, fontSize: 13.5, fontWeight: 500, textAlign: 'center', backgroundColor: 'rgba(231, 76, 60, 0.1)', color: '#E74C3C', border: '1px solid rgba(231, 76, 60, 0.2)' }}>
                  Something went wrong sending your request. Please try again or email us directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default ITServices
