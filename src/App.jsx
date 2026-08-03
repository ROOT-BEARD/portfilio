import { useState } from 'react'
import Home from './pages/Home'
import NewSec from './components/layout/NewSec.jsx'
import PageHeader from './components/layout/PageHeader.jsx'
import './App.css'

function App() {
  return (
    <div>
      <PageHeader />
      <Home />
      <NewSec />
    </div>
  );
}

export default App
