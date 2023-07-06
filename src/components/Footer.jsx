import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { Container } from './Container'
import { SquareLogo } from './Logo'
import { NavLinks } from './NavLinks'
import { CalendarIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid'


export function ContactCard() {
  return (
        <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex min-w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-md font-medium text-gray-900">Call REV Studio for Availability</h3>
              </div>
                <p className="mt-1 truncate text-md text-gray-500">
                7533 Draper Avenue <br />
                La Jolla, CA 92037</p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href="/Schedule"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Schedule
                </Link>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <Link
                  href="tel:+1844-652-4400"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent p-4 text-sm font-semibold text-gray-900"
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
