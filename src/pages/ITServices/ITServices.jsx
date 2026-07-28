import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ITServices.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import { submitContactForm } from '../../lib/submitContactForm.js'

const CAPABILITY_GROUPS = [
  {
    title: 'Infrastructure & Automation',
    items: ['ERP / SaaS (On-Premises)', 'IT Automation', 'IT Helpdesk', 'Assets Management', 'Automatic Inventory', 'IT Security'],
  },
  {
    title: 'Systems & Databases',
    items: ['Linux Support — Red Hat, Ubuntu, Fedora', 'Oracle Database', 'SAP HANA', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Cloud & Collaboration',
    items: ['Cloud Collaboration — OwnCloud, NextCloud, Seafile', 'AWS / Azure / Google / Oracle Cloud Support', 'Cloud Compute Within Your Budget', 'Mail Migration — Zoho, Google, O365'],
  },
  {
    title: 'Modern Stack',
    items: ['AWS', 'Node.js', 'WhatsApp API Integration', 'SSL & Web Security'],
  },
]

const SAAS_SOLUTIONS = [
  { name: 'HRMS', desc: 'Hiring, payroll, attendance, and performance tracking in one system.' },
  { name: 'CRM', desc: 'Track leads, follow-ups, and customer relationships end to end.' },
  { name: 'Helpdesk', desc: 'Ticketing and support workflows for internal or customer-facing teams.' },
  { name: 'Education ERP', desc: 'Admissions, fees, attendance, and academics for schools and institutes.' },
  { name: 'Loan Management System', desc: 'Loan origination, EMI tracking, and repayment management.' },
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
    <div className="page-itservices">
      <header className="its-header">
        <div className="its-container its-nav">
          <Link to="/" className="its-logo">CRAIVO <span>IT & SaaS</span></Link>
          <nav className="its-nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#solutions">SaaS Solutions</a>
            <a href="#contact">Get a Quote</a>
          </nav>
        </div>
      </header>

      <section className="its-hero">
        <div className="its-container">
          <span className="its-eyebrow">IT INFRASTRUCTURE & SAAS SOLUTIONS</span>
          <h1>Enterprise IT support and ready-made SaaS, built to run your business.</h1>
          <p className="its-hero-sub">
            From on-prem servers and cloud migration to HRMS, CRM, and helpdesk platforms — one team handles the
            infrastructure and the software your operations run on.
          </p>
          <div className="its-hero-cta">
            <a href="#contact" className="its-btn-primary">Get a Quote</a>
            <a href="#capabilities" className="its-btn-secondary">See Capabilities</a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="its-section">
        <div className="its-container">
          <span className="its-eyebrow">CAPABILITIES</span>
          <h2>IT infrastructure, covered end to end.</h2>
          <div className="its-grid">
            {CAPABILITY_GROUPS.map((group) => (
              <div className="its-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="its-section its-section-alt">
        <div className="its-container">
          <span className="its-eyebrow">SAAS SOLUTIONS</span>
          <h2>Or skip the build — deploy a ready-made platform.</h2>
          <div className="its-grid its-grid-solutions">
            {SAAS_SOLUTIONS.map((sol) => (
              <div className="its-solution-card" key={sol.name}>
                <h3>{sol.name}</h3>
                <p>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="its-section its-contact">
        <div className="its-container its-contact-grid">
          <div>
            <span className="its-eyebrow">GET A QUOTE</span>
            <h2>Tell us what you need running.</h2>
            <p>Share a few details and we'll get back to you with next steps — no obligation.</p>
          </div>

          <form className="its-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Work email" required value={form.email} onChange={handleChange} />
            <textarea name="message" placeholder="What do you need — ERP, cloud migration, HRMS, something else?" rows="4" required value={form.message} onChange={handleChange}></textarea>
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Request →'}
            </button>
            {status === 'error' && <p className="its-form-error">Something went wrong. Please try again or email us directly.</p>}
          </form>
        </div>
      </section>

      <footer className="its-footer">
        <div className="its-container">
          <span>CRAIVO IT & SaaS © 2026</span>
          <Link to="/">← Back to Craivo Web Design</Link>
        </div>
      </footer>
    </div>
  )
}

export default ITServices
