import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ThankYou from './pages/ThankYou/ThankYou.jsx'
import Brew from './pages/Brew/Brew.jsx'
import Kirana from './pages/Kirana/Kirana.jsx'
import Striker from './pages/Striker/Striker.jsx'
import Verdant from './pages/Verdant/Verdant.jsx'
import Privacy from './pages/Privacy/Privacy.jsx'
import Terms from './pages/Terms/Terms.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/brew" element={<Brew />} />
        <Route path="/kirana" element={<Kirana />} />
        <Route path="/striker" element={<Striker />} />
        <Route path="/verdant" element={<Verdant />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
