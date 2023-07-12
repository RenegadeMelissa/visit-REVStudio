import React from 'react'
import { CircleBackground } from './CircleBackground'
import { Container } from './Container'
import { EmailInput } from './EmailInput'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Have questions about the studio or equipment?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            REV Studio is the perfect photo and video studio to help bring your next idea to life. Add your email to recieve more information. 
          </p>
          <EmailInput />
        </div>
      </Container>
    </section>
  )
}