import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { PhoneIcon } from '@heroicons/react/24/outline'

import { Button } from './Button'
import { Container } from './Container'
import { FullLogo } from './Logo'
import { NavLinks } from './NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-4">
          <div className="relative z-10 flex items-center gap-12">
            <Link href="/" aria-label="Home">
              <FullLogo className="block h-7 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-12 sm:gap-8">
          <div className="flex flex-1 items-center justify-center pl-4 lg:ml-6">
            <div className="flex gap-x-4">
                <Link
                  href="tel:+1844-652-4400"
                  className="relative flex gap-3 -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                  onMouseEnter={() => setHoveredIndex()}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <dt className="flex-none">
                    <span className="sr-only">Telephone number</span>
                    <PhoneIcon className="h-7 w-6 text-rev-500 sm:w-5" aria-hidden="true" />
                  </dt>
                  <dd className='mt-1'>
                      844.652.4400
                  </dd>
                </Link>
              </div>
            </div>
            <Button href="/Schedule" className="block" color="rev">
              Schedule Studio
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
