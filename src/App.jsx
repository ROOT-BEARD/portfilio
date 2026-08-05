import { useState } from 'react'
import Home from './pages/Home'
import NewSec from './components/layout/NewSec.jsx'
import PageHeader from './components/layout/PageHeader.jsx'
import Card from './components/Card.jsx'
import CardHolder from './components/CardHolder.jsx'
import './App.css'

function App() {
  return (
    <div>
      <PageHeader />
      <Home />
      <NewSec
        title="What's new"
        descrip="What I have been up to"
      >
        <CardHolder>
          <Card />
          <Card />
          <Card />
        </CardHolder>
      </NewSec>
      <NewSec
        backgroundColor='rgb(1,1,1)' />
    </div>
  );
}

export default App
