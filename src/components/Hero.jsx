import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { PhoneIcon } from '@heroicons/react/24/outline'

import { Container } from './Container'
import { ContactForm } from './ContactForm'

export function Hero() {
  return (
    <section
      id="studio"
      aria-label="REV Studio, San Diego photography studio"
      className="overflow-hidden pb-32 xl:pb-36"
    >
      <div className="flow-root">
        <div>
        <StaticImage
            className="relative shadow-sm -z-50"
            src="../images/hero-focus.jpg"
            alt="Video production studio in La Jolla"
            width={2500}
            height={1300}
          />
        </div>
      </div>
      <Container>
      <div className="px-6 pb-4 lg:flex mt-0 lg:-mt-16 lg:items-center lg:gap-x-10 lg:px-8 xl:-mt-20">
          <div className="mx-auto max-w-2xl mt-12 lg:mt-20 lg:mx-0 lg:flex-auto">
            <div className="p-8">
            <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded text-center">
              <div className="relative isolate flex-row items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 rounded sm:px-3.5 sm:before:flex-1">
                <div
                  className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ef2363] to-[#ef4a24] opacity-30"
                    style={{
                      clipPath:
                        'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                  />
                </div>
                <div
                  className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ef2363] to-[#ef4a24] opacity-30"
                    style={{
                      clipPath:
                        'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                  />
                </div>
                  <Link
                    href="tel:+1844-652-4400"
                    className="relative flex gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                  >
                    <dt className="flex-none">
                      <span className="sr-only">Telephone number</span>
                      <PhoneIcon className="mt-2 h-8 w-8 text-rev-500" aria-hidden="true" />
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                        (844) 652-4400
                    </dd>
                </Link>
                <p className="text-sm leading-6 text-gray-900">
                    <strong className="font-semibold">Call for availability</strong>
                </p>
                <div className="flex flex-1 justify-end">
                </div>
              </div>
              </dl>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sharpen Your Focus
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unleash your creativity at the ultimate production hub in La Jolla. State-of-the-art facilities, expert team, limitless possibilities. REV Studio is one of San Diego’s premium studios for all things production. In the heart of La Jolla Village and blocks from the ocean, REV Studio is a photo and video studio available to you to fulfill your marketing and production needs.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="/Schedule" className="text-sm font-semibold leading-6 text-gray-900">
                This Is The Way <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
