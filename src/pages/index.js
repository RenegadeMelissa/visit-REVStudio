import React from 'react'

import { CallToAction } from '../components/CallToAction'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Testimonials } from '../components/Testamonials'

export default function Home() {
  return (
  <div>
    <Header />
      <main>
      <Hero />
      <About />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </div>
  )
}
