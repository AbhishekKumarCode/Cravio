import { useEffect } from 'react'
import './Home.css'
import { homeMarkup } from './markup.js'
import { initHomeBehavior } from './behavior.js'
import { usePageMeta } from '../../lib/usePageMeta.js'

function Home() {
  usePageMeta({
    title: 'Craivo — High-Conversion Websites for Small Brands',
    description: 'Craivo is an independent web design and development studio — one person designing, building, and shipping fast, conversion-focused websites for ambitious brands, without the agency overhead.',
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
