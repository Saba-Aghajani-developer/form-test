import Home from './page/Home'
import About from './page/about/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage } from './path-route/PathRoute'
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomePage} element={<Home />} />
        <Route path={AboutPage} element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}


