import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import { Button } from './Button'


export function About() {
    return (
      <section
        id="gallery"
        aria-label="Photography studio gallery in San Diego"
        className="overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Schedule Your Photo Shoot</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                  REV Studio features a 25’ x 15’ infinity Cyclorama wall with 12’ ceilings – enough room to shoot mid-sized vehicles, 
                  video sets, products, or small groups of people. 
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
              One of the coolest studio features is our 12′ green screen that allows 
              for infinite creativity. Based on the first floor, it features a 10’ tall roll-up door to make load-in and load-out easy.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
              <Button href="/Schedule" color="rev" className="px-6 py-3">
                Book today
              </Button>
          </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <StaticImage
                  src="../images/gallery-green-wall.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <StaticImage
                    src="../images/gallery-blue-studio.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <StaticImage
                    src="../images/gallery-orange-dress.jpg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <StaticImage
                    src="../images/gallery-production.jpg"
                    alt=""
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}