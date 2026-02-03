import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import MarketOpportunity from './components/MarketOpportunity'
import UseCases from './components/UseCases'
import Security from './components/Security'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <MarketOpportunity />
      <UseCases />
      <Security />
      <CTA />
      <Footer />
    </div>
  )
}

export default App