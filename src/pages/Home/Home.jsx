import { useEffect } from 'react'
import './Home.css'
import { homeMarkup } from './markup.js'
import { initHomeBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Home() {
  usePageMeta({
    title: 'Craivo — Web Design & Development Agency | High-Conversion Websites',
    description: 'Craivo is a web design and development agency — one person designing, building, and shipping fast, conversion-focused websites for ambitious brands, without the bloated agency overhead.',
    path: '/',
  })

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
