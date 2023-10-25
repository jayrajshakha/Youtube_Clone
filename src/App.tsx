import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/search" element={ <Search />} />
          <Route path="/watch/:id" element={ <Watch /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App