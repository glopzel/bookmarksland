// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Download from './components/Download'
import Features from './components/Features'
import Hero from './components/Hero'
import QuestionSection from './components/QuestionSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <main>
        <Hero />
        <Features />
        <Download />
        <QuestionSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
