import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/20/solid'

import { Container } from './Container'

const testimonials = [
  [
    {
      content:
        'I used REV studio for a family photoshoot and I highly recommend this place for your future productions. Julian, Mark & Lynne were a pleasure to work with and made the entire process a breeze from start to finish. Excited to work with them again in the future!',
      author: {
        name: 'Jeremy Fabunan',
        role: '',
        image: "../images/avatars/avatar-1.png",
      },
    },
    {
      content:
        'Mark and his team were extremely helpful from the moment we arrived. The space was clean, as advertised and perfect for photography and videography. Our team will definitely be using REV Studios again!',
      author: {
        name: 'Connor',
        role: 'CEO at Vativ Media',
        image: '../images/avatars/avatar-2.jpg',
      },
    },
  ],
  [
    {
      content:
        "I love working with the Rev Studio team! They are professional and always roll up their sleeves to make sure all needs are met! I highly recommend this versatile studio space for all of your media needs!",
      author: {
        name: 'Leilani Macedo',
        role: 'Founder/President CLICS',
        image: '../images/avatars/avatar-3.png',
      },
    },
    {
      content:
        "The on-site manager, Daniel, was attentive and proactive. Rev studio provided lighting, a couple of C-stands with sand bags, tables, chair, packing blankets to stifle any echoes and electrical. The studio is clean and modern and features a white cyc wall. I hope we'll be back, and will continue recommending this studio to our clients.",
      author: {
        name: 'Mark Schulze',
        role: 'Crystal Pyramid Productions',
        image: '../images/avatars/avatar-4.jpg',
      },
    },
  ],
  [
    {
      content:
        "It's always a good time working at REV! It's a rad studio run by lovely humans! I love that the cyc is pre-lit with Aputure Novas, and controlled by the provided iPad. Instead of an overhead grid, there are several sticks of speedrail that run on an overhead track.",
      author: {
        name: 'Alex Niknejad',
        role: '',
        image: '../images/avatars/avatar-5.png',
      },
    },
    {
      content:
        "REV Studio is an incredible studio that I have been shooting and bringing some of my clients to for years.  Lynne and Courtney are always warm and welcoming.  I would highly recommend booking your next shoot at REV Studio.",
      author: {
        name: 'Brian Rose',
        role: 'B. Rose Productions',
        image: '../images/avatars/avatar-6.jpg',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      aria-label="What REV Studio customers are saying"
      className="py-16 sm:py-32 bg-gradient-to-b from-white via-rev-100 to-white"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Beloved photography studio in La Jolla, CA
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            REV Studio clients rave about our location in the heart of La Jolla Village and blocks from the ocean. Our studio is equipped with the latest in lighting, and photography equipment.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <div className="flex py-4 gap-x-1 text-rev-500">
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                    </div>
                      <QuoteIcon className="absolute top-18 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                        <StaticImage
                            className="h-14 w-14 object-cover"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            alt={testimonial.author.name}
                            src="../images/SVG/rev-icon.svg"
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
