import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Each route's code is fetched only when that route is visited, instead of
// every page's JS shipping in one bundle regardless of which page is loaded
// -- Home and IT Services (the two pages perf-audited) no longer pay for
// Brew/Kirana/Striker/Verdant/etc.'s code on first load.
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const ThankYou = lazy(() => import('./pages/ThankYou/ThankYou.jsx'))
const Brew = lazy(() => import('./pages/Brew/Brew.jsx'))
const Kirana = lazy(() => import('./pages/Kirana/Kirana.jsx'))
const Striker = lazy(() => import('./pages/Striker/Striker.jsx'))
const Verdant = lazy(() => import('./pages/Verdant/Verdant.jsx'))
const Privacy = lazy(() => import('./pages/Privacy/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms/Terms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'))
const ITServices = lazy(() => import('./pages/ITServices/ITServices.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/brew" element={<Brew />} />
          <Route path="/kirana" element={<Kirana />} />
          <Route path="/striker" element={<Striker />} />
          <Route path="/verdant" element={<Verdant />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
