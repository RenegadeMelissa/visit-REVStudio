import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { Button } from './Button'
import { Container } from './Container'
import { TextField } from './Fields'
import { SquareLogo } from './Logo'
import { NavLinks } from './NavLinks'
import qrCode from '../images/qr-code.svg'
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

const person = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

export function ContactCard() {
  return (
        <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">Weekdays</h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">Monday to Friday: 9am – 5pm</p>
              <div className="flex items-center mt-3 space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">Weekends</h3>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">Saturday and Sunday: By appointment</p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="/Schedule"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Schedule
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <Link
                  href="tel:+1844-652-4400"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Call
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}


export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-6">
          <div>
            <div className="flex items-center text-gray-900">
              <SquareLogo className="block h-24 w-auto flex-none" />
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
            <div className="mt-8 flex gap-8">
              <p className="text-sm text-gray-500 md:mt-0">
              &copy; Copyright {new Date().getFullYear()} REV Studio. All rights reserved.
              </p>
            </div>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <ContactCard />
          </div>
        </div>
      </Container>
    </footer>
  )
}
