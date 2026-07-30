import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Home/Home.css'
import './ITServices.css'
import { usePageMeta } from '../../lib/usePageMeta.js'
import { submitContactForm } from '../../lib/submitContactForm.js'
import SiteFooter from '../../components/SiteFooter.jsx'
import SiteHeader from '../../components/SiteHeader.jsx'

const ICONS = {
  server: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></>,
  cloud: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  layers: <><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
  check: <polyline points="20 6 9 17 4 12"></polyline>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>
}

const CAPABILITY_GROUPS = [
  { icon: 'server', title: 'Infrastructure & Automation', desc: 'ERP/SaaS (on-premises), IT automation, IT helpdesk, assets management, automatic inventory, and IT security.', tags: ['ERP / SaaS', 'Helpdesk', 'Asset Mgmt'] },
  { icon: 'database', title: 'Systems & Databases', desc: 'Linux support (Red Hat, Ubuntu, Fedora) plus Oracle Database, SAP HANA, MySQL, and MongoDB.', tags: ['Linux', 'Oracle DB', 'MongoDB'] },
  { icon: 'cloud', title: 'Cloud & Collaboration', desc: 'OwnCloud, NextCloud, Seafile; AWS/Azure/Google/Oracle Cloud support; compute within your budget; mail migration (Zoho, Google, O365).', tags: ['AWS / Azure / GCP', 'NextCloud', 'Mail Migration'] },
  { icon: 'bolt', title: 'Modern Stack', desc: 'AWS, Node.js, WhatsApp API integration, and SSL/web security, layered onto whatever you already run.', tags: ['Node.js', 'WhatsApp API', 'SSL'] },
]

const HERO_TABS = [
  { key: 'infra', icon: 'server', label: 'Infrastructure' },
  { key: 'databases', icon: 'database', label: 'Databases' },
  { key: 'cloud', icon: 'cloud', label: 'Cloud' },
  { key: 'stack', icon: 'bolt', label: 'Modern Stack' },
]

const HERO_TECHS = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud', 'Linux', 'Node.js']

const NAV_LINKS = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#solutions', label: 'SaaS Solutions' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Get a Quote', accent: true },
]

const INFRA_TIERS = [
  {
    tier: 'Essential Support',
    monthlyPrice: '₹9,999/mo',
    annualPrice: '₹7,999/mo',
    desc: 'For small offices that need reliable day-to-day IT without hiring in-house.',
    features: ['Business-Hours Helpdesk', 'Patch & Update Management', 'Basic Network Monitoring', 'Up to 10 Users'],
    cta: 'Get Started',
  },
  {
    tier: 'Business Infrastructure',
    monthlyPrice: '₹25,000/mo',
    annualPrice: '₹20,000/mo',
    desc: 'Hybrid cloud + on-prem management for growing teams running real workloads.',
    features: ['Priority Helpdesk, Extended Hours', 'Database Admin — MySQL / MongoDB / Oracle', 'Backup & Disaster Recovery', 'Up to 50 Users'],
    cta: 'Book a Call',
    featured: true,
  },
  {
    tier: 'Enterprise & Compliance',
    monthlyPrice: 'Custom Quote',
    annualPrice: 'Custom Quote',
    desc: '24/7 coverage and compliance-grade infrastructure for larger, regulated operations.',
    features: ['24/7 NOC Monitoring', 'SAP HANA / Oracle DB Administration', 'Security Audits & Hardening', 'Dedicated Engineer'],
    cta: 'Request Quote',
  },
]

const SAAS_SOLUTIONS = [
  {
    title: 'HRMS',
    monthlyPrice: 'From ₹99/employee/mo',
    annualPrice: 'From ₹79/employee/mo',
    desc: 'Payroll, attendance, and performance tracking — scales seamlessly with your headcount.',
    badge: 'Self-Hosted or Cloud',
    features: ['Auto Attendance Tracking', 'Custom Payroll Workflows', 'Employee Performance Metrics', 'Leaves Management Portal']
  },
  {
    title: 'CRM',
    monthlyPrice: 'From ₹599/user/mo',
    annualPrice: 'From ₹479/user/mo',
    desc: 'Leads pipelines, communication timelines, and automated follow-ups for high-performing sales teams.',
    badge: 'Highly Configurable',
    features: ['Visual Deal Pipeline', 'Automated Lead Routing', 'WhatsApp API Integration', 'Instant Analytics Reporting']
  },
  {
    title: 'Helpdesk',
    monthlyPrice: 'From ₹1,999/mo',
    annualPrice: 'From ₹1,599/mo',
    desc: 'Flat-rate customer support software for small-to-mid service desks and operations.',
    badge: 'Flat Rate Pricing',
    features: ['Shared Inbox Dashboard', 'SLAs Alert Triggers', 'Knowledge Base Hosting', 'CSAT Feedback Loop']
  },
  {
    title: 'Education ERP',
    monthlyPrice: 'From ₹35,000/year',
    annualPrice: 'From ₹28,000/year',
    desc: 'Complete student lifecycle software, from admissions to exams, built for schools & colleges.',
    badge: 'Institutional Pack',
    features: ['Student & Staff Databases', 'Online Fee Collection Gateway', 'Exams & Grading Models', 'Parent App Connectivity']
  },
  {
    title: 'Loan Management System',
    monthlyPrice: 'Custom Quote',
    annualPrice: 'Custom Quote',
    desc: 'Enterprise lending system with strict regulatory compliance, credit appraisals, and recovery records.',
    badge: 'Compliance Heavy',
    features: ['Digital KYC Onboarding', 'Credit Score Integration', 'Interest Rate Calculations', 'NPA Recovery Tracker']
  }
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

const TECH_STACK = [
  { name: 'Linux — Red Hat / Ubuntu / Fedora', class: 'tech-linux' },
  { name: 'VMware', class: 'tech-vmware' },
  { name: 'AWS', class: 'tech-aws' },
  { name: 'Microsoft Azure', class: 'tech-azure' },
  { name: 'Google Cloud', class: 'tech-gcp' },
  { name: 'Oracle Cloud', class: 'tech-oracle' },
  { name: 'Open Source — OwnCloud / NextCloud / Seafile', class: 'tech-open-source' },
  { name: 'Microsoft 365', class: 'tech-microsoft-365' },
  { name: 'Oracle DB / SAP HANA', class: 'tech-sap' },
  { name: 'MySQL / MongoDB', class: 'tech-databases' },
  { name: 'Node.js', class: 'tech-node' },
  { name: 'WhatsApp API', class: 'tech-whatsapp' },
  { name: 'SSL & Web Security', class: 'tech-security' },
  { name: 'AI Agents & Automation', class: 'tech-ai' }
]

const PROCESS_STEPS = [
  { title: 'Discovery & Audit', desc: 'We assess your current infrastructure, pain points, and goals.' },
  { title: 'Scoped Proposal', desc: 'A clear plan and fixed quote before any work begins.' },
  { title: 'Migration & Setup', desc: 'Implementation, migration, or SaaS deployment with zero data loss.' },
  { title: 'Testing & Handover', desc: 'Security, performance, and access checks before go-live.' },
  { title: 'Ongoing Support', desc: 'Monitoring, helpdesk, and maintenance after launch.' },
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

  const [activeHeroTab, setActiveHeroTab] = useState('infra')
  useEffect(() => {
    const id = setInterval(() => {
      setActiveHeroTab((current) => {
        const i = HERO_TABS.findIndex((t) => t.key === current)
        return HERO_TABS[(i + 1) % HERO_TABS.length].key
      })
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const [heroPing, setHeroPing] = useState(18)
  useEffect(() => {
    const id = setInterval(() => {
      setHeroPing(14 + Math.floor(Math.random() * 10))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  const [activeSaaS, setActiveSaaS] = useState(0)
  const [billingCycle, setBillingCycle] = useState('annual') // 'monthly' or 'annual'

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

  // Hero tab dashboard mockups — one per HERO_TABS entry, each illustrating
  // what that capability actually looks like day to day.
  function renderHeroDash() {
    switch (activeHeroTab) {
      case 'infra':
        return (
          <div className="itsvc-dash-card">
            <h3 className="itsvc-dash-title">Infrastructure Setup</h3>
            <div className="itsvc-progress-track"><div className="itsvc-progress-fill" style={{ width: '40%' }}></div></div>
            <div className="itsvc-step-list">
              <div className="itsvc-step-item">
                <span className="itsvc-step-dot done"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                Provision servers
              </div>
              <div className="itsvc-step-item">
                <span className="itsvc-step-dot done"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                Configure network
              </div>
              <div className="itsvc-step-item"><span className="itsvc-step-dot active"></span>Harden security</div>
              <div className="itsvc-step-item muted"><span className="itsvc-step-dot pending"></span>Go live</div>
            </div>
          </div>
        )
      case 'databases':
        return (
          <div className="itsvc-dash-card">
            <h3 className="itsvc-dash-title">Database Health</h3>
            <div className="itsvc-metric-grid">
              <div className="itsvc-metric-box"><div className="itsvc-metric-label">Uptime</div><div className="itsvc-metric-value">99.98%</div></div>
              <div className="itsvc-metric-box"><div className="itsvc-metric-label">Replication Lag</div><div className="itsvc-metric-value">0.2s</div></div>
              <div className="itsvc-metric-box"><div className="itsvc-metric-label">Backups</div><div className="itsvc-metric-value">Daily</div></div>
              <div className="itsvc-metric-box"><div className="itsvc-metric-label">Query P95</div><div className="itsvc-metric-value">12ms</div></div>
            </div>
          </div>
        )
      case 'cloud':
        return (
          <div className="itsvc-dash-card">
            <h3 className="itsvc-dash-title">Cloud Migration</h3>
            <div className="itsvc-success-row">
              <span className="itsvc-success-circle"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
              <div>
                <div className="itsvc-success-title">Migration complete</div>
                <p className="itsvc-success-sub">Zero-downtime cutover</p>
              </div>
            </div>
          </div>
        )
      case 'stack':
        return (
          <div className="itsvc-dash-card">
            <h3 className="itsvc-dash-title">Deployment Checklist</h3>
            <div className="itsvc-check-list">
              <div className="itsvc-check-item"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>CI/CD pipeline configured</div>
              <div className="itsvc-check-item"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>SSL certificates issued</div>
              <div className="itsvc-check-item"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>Monitoring enabled</div>
              <div className="itsvc-check-item"><svg viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>Rollback plan ready</div>
            </div>
            <span className="itsvc-dash-cta">Ship It</span>
          </div>
        )
      default:
        return null
    }
  }

  // Helper to render SaaS dashboard mockup dynamically
  function renderSaaSMockup() {
    switch (activeSaaS) {
      case 0: // HRMS
        return (
          <div className="saas-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dot-group">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-header-title">HRMS PORTAL</div>
            </div>
            <div className="mockup-content">
              <div className="hrms-stat-row">
                <div className="hrms-stat-card">
                  <div className="hrms-stat-num">142</div>
                  <div className="hrms-stat-lbl">Employees</div>
                </div>
                <div className="hrms-radial-box">
                  <svg className="hrms-radial-svg" viewBox="0 0 36 36">
                    <circle className="hrms-radial-bg" cx="18" cy="18" r="16"></circle>
                    <circle className="hrms-radial-val" cx="18" cy="18" r="16"></circle>
                  </svg>
                  <div>
                    <div className="hrms-stat-num" style={{ fontSize: '15px' }}>96.8%</div>
                    <div className="hrms-stat-lbl">Attendance</div>
                  </div>
                </div>
              </div>
              <div className="hrms-list">
                <div className="hrms-item">
                  <div className="hrms-emp">
                    <div className="hrms-dot active"></div>
                    <span>Rajesh Kumar</span>
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>09:02 AM Clock-in</span>
                </div>
                <div className="hrms-item">
                  <div className="hrms-emp">
                    <div className="hrms-dot active"></div>
                    <span>Sara Mathews</span>
                  </div>
                  <span style={{ color: 'var(--text-secondary)' }}>08:58 AM Clock-in</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 1: // CRM
        return (
          <div className="saas-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dot-group">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-header-title">SALES CRM</div>
            </div>
            <div className="mockup-content">
              <div className="crm-stage-container">
                <div className="crm-stage-bar-item">
                  <div className="crm-stage-meta">
                    <span className="crm-stage-lbl">1. Contacted Leads</span>
                    <span className="crm-stage-val">₹4,20,000</span>
                  </div>
                  <div className="crm-stage-track">
                    <div className="crm-stage-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="crm-stage-bar-item">
                  <div className="crm-stage-meta">
                    <span className="crm-stage-lbl">2. Proposal Sent</span>
                    <span className="crm-stage-val">₹2,80,000</span>
                  </div>
                  <div className="crm-stage-track">
                    <div className="crm-stage-fill" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="crm-stage-bar-item">
                  <div className="crm-stage-meta">
                    <span className="crm-stage-lbl">3. Closed Won</span>
                    <span className="crm-stage-val">₹1,95,000</span>
                  </div>
                  <div className="crm-stage-track">
                    <div className="crm-stage-fill" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 2: // Helpdesk
        return (
          <div className="saas-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dot-group">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-header-title">SUPPORT HELPDESK</div>
            </div>
            <div className="mockup-content">
              <div className="hrms-stat-row" style={{ marginBottom: '8px' }}>
                <div className="hrms-stat-card">
                  <div className="hrms-stat-num" style={{ color: '#ef4444' }}>4</div>
                  <div className="hrms-stat-lbl">Open Tickets</div>
                </div>
                <div className="hrms-stat-card">
                  <div className="hrms-stat-num" style={{ color: 'var(--accent-2)' }}>12m</div>
                  <div className="hrms-stat-lbl">Avg Response</div>
                </div>
              </div>
              <div className="hd-ticket-list">
                <div className="hd-ticket-item urgent">
                  <span>Server lag in Database Node A</span>
                  <span className="hd-tag urgent">URGENT</span>
                </div>
                <div className="hd-ticket-item">
                  <span>User setup permission query</span>
                  <span className="hd-tag normal">NORMAL</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 3: // Education ERP
        return (
          <div className="saas-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dot-group">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-header-title">CAMPUS ERP</div>
            </div>
            <div className="mockup-content">
              <div className="edu-grid">
                <div className="edu-card">
                  <div className="edu-lbl">Total Students</div>
                  <div className="edu-val">1,240</div>
                </div>
                <div className="edu-card">
                  <div className="edu-lbl">Staff Active</div>
                  <div className="edu-val">84</div>
                </div>
              </div>
              <div className="hrms-list">
                <div className="hrms-item" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                    <span>Fee Collection Progress</span>
                    <span style={{ color: '#10b981' }}>88%</span>
                  </div>
                  <div className="crm-stage-track" style={{ height: '5px' }}>
                    <div className="crm-stage-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 4: // Loan Management System
        return (
          <div className="saas-dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dot-group">
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
                <div className="mockup-dot"></div>
              </div>
              <div className="mockup-header-title">LOAN MANAGEMENT</div>
            </div>
            <div className="mockup-content">
              <div className="lms-row">
                <span className="lms-lbl">Active Portfolio</span>
                <span className="lms-val">₹4.85 Crore</span>
              </div>
              <div className="lms-row">
                <span className="lms-lbl">Risk Model Rating</span>
                <span className="lms-status">Secure (AAA)</span>
              </div>
              <div className="lms-row">
                <span className="lms-lbl">KYC Verification Rate</span>
                <span className="lms-val" style={{ color: 'var(--accent-2)' }}>100%</span>
              </div>
              <div className="lms-row">
                <span className="lms-lbl">NPA Ratio</span>
                <span className="lms-val" style={{ color: '#10b981' }}>0.42%</span>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="page-home page-itservices">
      <SiteHeader links={NAV_LINKS} />

      <section className="itsvc-hero">
        <div className="itsvc-hero-decor" aria-hidden="true">
          <div className="itsvc-blob itsvc-blob-a"></div>
          <div className="itsvc-blob itsvc-blob-b"></div>
          <div className="itsvc-shape itsvc-shape-ring"></div>
          <div className="itsvc-shape itsvc-shape-square"></div>
          <div className="itsvc-shape itsvc-shape-dot"></div>
        </div>

        <div className="itsvc-hero-split">
        <div className="itsvc-hero-inner">
          <div className="itsvc-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
            <span>Enterprise-grade infrastructure & SaaS</span>
          </div>

          <h1 className="itsvc-h1">
            Run your business on
            <span className="itsvc-h1-accent">infrastructure that just works.</span>
          </h1>

          <p className="itsvc-subcopy">
            IT infrastructure and SaaS platforms for growing businesses — managed end to end across servers, cloud,
            and the software your team runs on every day.
          </p>

          <a href="#contact" className="itsvc-cta-btn">Get a Quote</a>

          <div className="itsvc-hero-stats">
            <div className="itsvc-hero-stat"><strong>5+</strong><span>SaaS Platforms</span></div>
            <div className="itsvc-hero-stat"><strong>24/7</strong><span>Monitoring</span></div>
            <div className="itsvc-hero-stat"><strong>99.9%</strong><span>Uptime SLA</span></div>
          </div>

          <div className="itsvc-tabbar">
            {HERO_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`itsvc-tab-btn${activeHeroTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveHeroTab(tab.key)}
              >
                <svg viewBox="0 0 24 24">{ICONS[tab.icon]}</svg>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="itsvc-dash-shell">
          <div className="itsvc-dash-grid"></div>
          <div className="itsvc-dash-live">
            <span className="itsvc-dash-live-dot"></span>
            All systems operational · {heroPing}ms
          </div>
          {renderHeroDash()}
        </div>
        </div>

        <div className="itsvc-hero-techs">
          {HERO_TECHS.map((tech) => (
            <span className="itsvc-hero-tech" key={tech}>{tech}</span>
          ))}
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
              <div className="service-tile itsvc-capability-tile" key={group.title}>
                <div className="service-tile-top itsvc-capability-top">
                  <div className="service-icon-wrapper">
                    <svg viewBox="0 0 24 24" className="itsvc-capability-icon">{ICONS[group.icon]}</svg>
                  </div>
                  <div className="service-watermark">0{i + 1}</div>
                </div>
                <h3 className="service-tile-name itsvc-capability-title">{group.title}</h3>
                <p className="service-tile-desc itsvc-capability-desc">{group.desc}</p>
                <div className="itsvc-capability-tags">
                  {group.tags.map((tag) => (
                    <span className="itsvc-capability-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">TECHNOLOGIES</span>
            <h2 className="section-title">Built on what your team already trusts.</h2>
          </div>
          <div className="tech-badge-grid">
            {TECH_STACK.map((tech) => (
              <span className={`tech-badge ${tech.class}`} key={tech.name}>{tech.name}</span>
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

          {/* Interactive SaaS Showcase Tabs */}
          <div className="saas-showcase-container">
            <div className="saas-tabs">
              {SAAS_SOLUTIONS.map((sol, index) => (
                <button
                  key={sol.title}
                  className={`saas-tab-btn ${activeSaaS === index ? 'active' : ''}`}
                  onClick={() => setActiveSaaS(index)}
                >
                  {sol.title}
                </button>
              ))}
            </div>

            <div className="saas-preview-grid">
              <div className="saas-preview-info">
                <span className="saas-preview-badge">{SAAS_SOLUTIONS[activeSaaS].badge}</span>
                <h3 className="saas-preview-title">{SAAS_SOLUTIONS[activeSaaS].title}</h3>
                <p className="saas-preview-desc">{SAAS_SOLUTIONS[activeSaaS].desc}</p>
                
                <ul className="saas-preview-features">
                  {SAAS_SOLUTIONS[activeSaaS].features.map((feat) => (
                    <li className="saas-preview-feature-item" key={feat}>
                      <svg viewBox="0 0 24 24">{ICONS.check}</svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="saas-preview-cta">Get a Quote</a>
              </div>

              <div className="saas-mockup-wrapper">
                {renderSaaSMockup()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">HOW WE WORK</span>
            <h2 className="section-title">From audit to ongoing support.</h2>
          </div>
          <div className="process-flow-container">
            <div className="process-connecting-line"></div>
            <div className="process-steps">
              {PROCESS_STEPS.map((step, i) => (
                <div className="process-step active" key={step.title}>
                  <div className="process-circle">0{i + 1}</div>
                  <div className="process-step-text">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark-interlude">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="dark-interlude-statement" style={{ maxWidth: 800, margin: '0 auto 20px', fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.45 }}>
            Enterprise-grade reliability. <em>Zero lock-in</em>.
          </p>
          <p className="dark-interlude-buyer-copy" style={{ maxWidth: 650, margin: '0 auto', fontSize: 15, color: '#96A2AD', lineHeight: 1.6 }}>
            Built on secure, high-availability architecture with automatic failovers, automated backups, and 24/7 monitoring. Get clean, production-grade systems that your team can read, extend, and own.
          </p>
        </div>
      </section>

      <section id="pricing" className="section-spacing">
        <div className="container">
          <div className="section-header-block">
            <span className="section-eyebrow">PRICING</span>
            <h2 className="section-title">Managed IT & Infrastructure Plans</h2>
          </div>

          {/* Billing Cycle Switch Toggle */}
          <div className="billing-toggle-container">
            <span className={`billing-label ${billingCycle === 'monthly' ? 'active' : ''}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>
            <div className={`billing-switch ${billingCycle === 'annual' ? 'annual' : ''}`} onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}>
              <div className="billing-switch-handle"></div>
            </div>
            <span className={`billing-label ${billingCycle === 'annual' ? 'active' : ''}`} onClick={() => setBillingCycle('annual')}>Annual</span>
            <span className="discount-badge">Save 20%</span>
          </div>

          <div className="pricing-grid">
            {INFRA_TIERS.map((t) => (
              <div className={`pricing-card${t.featured ? ' featured' : ''}`} key={t.tier}>
                <div className="pricing-header">
                  <span className="pricing-tier">{t.tier}</span>
                  <h3 className="pricing-price">{billingCycle === 'annual' ? t.annualPrice : t.monthlyPrice}</h3>
                </div>
                <p className="pricing-desc">{t.desc}</p>
                <ul className="pricing-features">
                  {t.features.map((f) => (
                    <li className="pricing-feature-item" key={f}>
                      <svg viewBox="0 0 24 24">{ICONS.check}</svg>
                      <span>{f}</span>
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
            {SAAS_SOLUTIONS.map((sol) => (
              <div className="pricing-card compact" key={sol.title}>
                <div className="pricing-header">
                  <span className="pricing-tier">{sol.title}</span>
                  <h3 className="pricing-price">{billingCycle === 'annual' ? sol.annualPrice : sol.monthlyPrice}</h3>
                </div>
                <p className="pricing-desc">{sol.desc}</p>
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
            <div className="contact-left-info">
              <div>
                <span className="section-eyebrow">GET A QUOTE</span>
                <h2 className="giant-contact-headline" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.15, margin: '15px 0 20px' }}>Tell us what you need <em>running</em>.</h2>
                <p className="contact-proposal-text" style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 30 }}>
                  Share a few details and we'll get back to you with a scoped quote — no obligation.
                </p>
              </div>

              {/* Service SLA & Trust Badges */}
              <div className="sla-box">
                <div className="sla-title">Response Speed Guarantee</div>
                <p className="sla-desc">Our technical managers review and respond to infrastructure requests within 2 hours SLA during business operations.</p>
              </div>

              <div className="trust-badges-grid">
                <div className="trust-badge-item">
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>{ICONS.shield}</svg>
                  <span>Strict NDA Covered</span>
                </div>
                <div className="trust-badge-item">
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>{ICONS.clock}</svg>
                  <span>24/7 Monitoring Available</span>
                </div>
                <div className="trust-badge-item">
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>{ICONS.user}</svg>
                  <span>Dedicated Account Manager</span>
                </div>
                <div className="trust-badge-item">
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16 }}>{ICONS.fileText}</svg>
                  <span>Transparent Fixed Scope</span>
                </div>
              </div>
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
