import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import PageHeader from './components/layout/PageHeader.jsx'
import HallowerPage from './pages/projects/HallowerPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <PageHeader/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects/hallower' element={<HallowerPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
