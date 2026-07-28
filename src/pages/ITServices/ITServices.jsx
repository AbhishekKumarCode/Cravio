import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Home/Home.css'
import './ITServices.css'
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
  check: <polyline points="20 6 9 17 4 12"></polyline>,
}

const CAPABILITY_GROUPS = [
  { icon: 'server', title: 'Infrastructure & Automation', desc: 'ERP/SaaS (on-premises), IT automation, IT helpdesk, assets management, automatic inventory, and IT security.' },
  { icon: 'database', title: 'Systems & Databases', desc: 'Linux support (Red Hat, Ubuntu, Fedora) plus Oracle Database, SAP HANA, MySQL, and MongoDB.' },
  { icon: 'cloud', title: 'Cloud & Collaboration', desc: 'OwnCloud, NextCloud, Seafile; AWS/Azure/Google/Oracle Cloud support; compute within your budget; mail migration (Zoho, Google, O365).' },
  { icon: 'bolt', title: 'Modern Stack', desc: 'AWS, Node.js, WhatsApp API integration, and SSL/web security, layered onto whatever you already run.' },
]

const INFRA_TIERS = [
  {
    tier: 'Essential Support',
    price: '₹9,999–₹19,999/mo',
    desc: 'For small offices that need reliable day-to-day IT without hiring in-house.',
    features: ['Business-Hours Helpdesk', 'Patch & Update Management', 'Basic Network Monitoring', 'Up to 10 Users'],
    cta: 'Get Started',
  },
  {
    tier: 'Business Infrastructure',
    price: '₹25,000–₹50,000/mo',
    desc: 'Hybrid cloud + on-prem management for growing teams running real workloads.',
    features: ['Priority Helpdesk, Extended Hours', 'Database Admin — MySQL / MongoDB / Oracle', 'Backup & Disaster Recovery', 'Up to 50 Users'],
    cta: 'Book a Call',
    featured: true,
  },
  {
    tier: 'Enterprise & Compliance',
    price: 'Custom Quote',
    desc: '24/7 coverage and compliance-grade infrastructure for larger, regulated operations.',
    features: ['24/7 NOC Monitoring', 'SAP HANA / Oracle DB Administration', 'Security Audits & Hardening', 'Dedicated Engineer'],
    cta: 'Request Quote',
  },
]

const SAAS_PRICING = [
  { title: 'HRMS', price: 'From ₹99 / employee / mo', desc: 'Payroll, attendance, and performance tracking — scales with headcount.' },
  { title: 'CRM', price: 'From ₹599 / user / mo', desc: 'Leads, pipelines, and follow-ups for sales teams.' },
  { title: 'Helpdesk', price: 'From ₹1,999 / mo', desc: 'Flat pricing for small-to-mid support teams.' },
  { title: 'Education ERP', price: 'From ₹35,000 / year', desc: 'Priced per institution, scales with student count.' },
  { title: 'Loan Management System', price: 'Custom Quote', desc: 'Compliance-heavy — scoped per lender and loan book size.' },
]

const INTEREST_OPTIONS = [
  { value: 'it-infra', label: 'IT Infrastructure & Support' },
  { value: 'hrms', label: 'HRMS' },
  { value: 'crm', label: 'CRM' },
  { value: 'helpdesk', label: 'Helpdesk' },
  { value: 'education-erp', label: 'Education ERP' },
  { value: 'loan-management', label: 'Loan Management System' },
  { value: 'other', label: 'Something Else' },
]

const TEAM_SIZE_OPTIONS = [
  { value: '1-10', label: '1–10 People' },
  { value: '11-50', label: '11–50 People' },
  { value: '51-200', label: '51–200 People' },
  { value: '200+', label: '200+ People' },
]

function ITServices() {
  usePageMeta({
    title: 'IT & SaaS Solutions — Craivo',
    description: 'Enterprise IT infrastructure, managed support, and ready-made SaaS solutions — ERP, HRMS, CRM, Helpdesk, and more, with transparent pricing.',
    path: '/it-services',
  })

  const navigate = useNavigate()
  const [form, setForm] = useState({ company: '', email: '', interest: '', teamSize: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const interestLabel = INTEREST_OPTIONS.find((o) => o.value === form.interest)?.label || form.interest
    const teamSizeLabel = TEAM_SIZE_OPTIONS.find((o) => o.value === form.teamSize)?.label || form.teamSize

    submitContactForm({
      name: form.company,
      email: form.email,
      project: form.interest,
      projectLabel: interestLabel,
      budget: form.teamSize,
      budgetLabel: teamSizeLabel,
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
    <div className="page-home page-itservices">
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
                <a href="#pricing" className="hero-know-more">See Pricing <span>→</span></a>
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
            {SAAS_PRICING.map((sol, i) => (
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

      <section id="pricing" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">PRICING</span>
            <h2 className="section-title">Managed IT & Infrastructure Plans</h2>
          </div>
          <div className="pricing-grid">
            {INFRA_TIERS.map((t) => (
              <div className={`pricing-card${t.featured ? ' featured' : ''}`} key={t.tier}>
                <div className="pricing-header">
                  <span className="pricing-tier">{t.tier}</span>
                  <h3 className="pricing-price">{t.price}</h3>
                </div>
                <p className="service-tile-desc pricing-desc">{t.desc}</p>
                <ul className="pricing-features">
                  {t.features.map((f) => (
                    <li className="pricing-feature-item" key={f}>
                      <svg viewBox="0 0 24 24">{ICONS.check}</svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="pricing-btn">{t.cta}</a>
              </div>
            ))}
          </div>

          <div className="section-header-block" style={{ marginTop: 80 }}>
            <span className="section-eyebrow">SAAS PRODUCT PRICING</span>
            <h2 className="section-title">Simple pricing per platform.</h2>
          </div>
          <div className="pricing-grid saas-pricing-grid">
            {SAAS_PRICING.map((sol) => (
              <div className="pricing-card compact" key={sol.title}>
                <div className="pricing-header">
                  <span className="pricing-tier">{sol.title}</span>
                  <h3 className="pricing-price">{sol.price}</h3>
                </div>
                <p className="service-tile-desc pricing-desc">{sol.desc}</p>
                <a href="#contact" className="pricing-btn">Get a Quote</a>
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
                Share a few details and we'll get back to you with a scoped quote — no obligation.
              </p>
            </div>

            <div className="contact-right" style={{ width: '100%' }}>
              <form className="premium-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="its-company">Company Name</label>
                    <input type="text" id="its-company" name="company" className="form-input" placeholder="e.g. Aira Textiles Pvt Ltd" required value={form.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="its-email">Work Email</label>
                    <input type="email" id="its-email" name="email" className="form-input" placeholder="e.g. it@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="its-interest">Interested In</label>
                    <select id="its-interest" name="interest" className="form-input" required value={form.interest} onChange={handleChange}>
                      <option value="" disabled>Select an option</option>
                      {INTEREST_OPTIONS.map((o) => (
                        <option value={o.value} key={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="its-team-size">Team Size</label>
                    <select id="its-team-size" name="teamSize" className="form-input" required value={form.teamSize} onChange={handleChange}>
                      <option value="" disabled>Select team size</option>
                      {TEAM_SIZE_OPTIONS.map((o) => (
                        <option value={o.value} key={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="its-message">Tell us more</label>
                  <textarea id="its-message" name="message" className="form-input" rows="4" placeholder="Current setup, pain points, timeline..." required style={{ resize: 'vertical' }} value={form.message} onChange={handleChange}></textarea>
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
