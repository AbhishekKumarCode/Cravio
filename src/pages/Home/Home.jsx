import { useEffect } from 'react'
import './Home.css'
import { homeMarkup } from './markup.js'
import { initHomeBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

// Keep this list's q/a text in sync with the FAQ section markup in markup.js
// -- duplicated here only for the FAQPage schema, not rendered directly.
const FAQ_ITEMS = [
  {
    q: 'How long does a typical project take?',
    a: 'Average delivery times range from 7 to 14 days for growth sites and up to 3 to 4 weeks for fully customized, multi-page platforms and Shopify e-commerce installations.',
  },
  {
    q: 'Do we own the website code after launch?',
    a: 'Yes, 100%. Unlike agencies that lock you into proprietary drag-and-drop systems, we build using clean, open-source standard HTML5/CSS3 and React. You have total ownership of your files, assets, and database.',
  },
  {
    q: 'Will our website work on mobile devices?',
    a: 'Absolutely. Every website we design is fully responsive and speed-optimized for mobile viewports, ensuring a seamless checkout and navigation experience on all smartphones and tablets.',
  },
  {
    q: 'Do you offer post-launch support and hosting setups?',
    a: 'Yes, every pricing plan includes ongoing post-launch support. We set up secure domain hosting via Vercel, Netlify, or Shopify, and remain available for performance updates, text edits, and conversion audits.',
  },
  {
    q: "How does pricing work, and what's included?",
    a: 'Every package is a fixed quote agreed before we start — no hourly surprises. It covers strategy, design, development, and launch; the tier just scopes how many pages, integrations, and revision rounds are included.',
  },
  {
    q: 'What if I need changes after the site is live?',
    a: 'Small edits are covered under your post-launch support window at no extra cost. Larger feature additions are scoped and quoted separately, so your budget stays predictable as the site grows with your business.',
  },
]

function Home() {
  usePageMeta({
    title: 'Craivo — High-Conversion Web Design Agency',
    description: 'High-conversion websites built by one designer-developer — fast delivery, full code ownership, no bloated agency overhead. See our work.',
    path: '/',
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  useEffect(() => {
    const cleanup = initHomeBehavior()
    return () => {
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <div className="page-home" dangerouslySetInnerHTML={{ __html: homeMarkup }} />
  )
}

export default Home
