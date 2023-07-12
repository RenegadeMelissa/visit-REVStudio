import React, { Fragment, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

import { Button } from './Button'

export function ContactSuccess() {
    const [show, setShow] = useState(true)
  
    return (
      <>
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
          aria-live="assertive"
          className="pointer-events-none relative inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">Successfully sent!</p>
                      <p className="mt-1 text-sm text-gray-500">Thanks for contacting us! A member of the REV Studio team will be in touch shortly.</p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setShow(false)
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
    )
  }

export function ContactForm() {
    const [state, handleSubmit] = useForm("xzblpwpn");
    if (state.succeeded) {
        return <ContactSuccess />
    }
    return (
    <div className="mx-auto max-w-7xl bg-gray-900 px-6 py-6 shadow-2xl rounded-2xl">
        <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-white/10 pb-12">
                <h2 className="text-base py-2 font-semibold leading-7 text-white">Let's Chat</h2>
                <p className="mt-1 text-sm leading-6 text-gray-400">If you'd like to discuss REV Studio services and rates, please reach out below.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                        First name*
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                        <ValidationError 
                            prefix="First name" 
                            field="first-name"
                            errors={state.errors}
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                        Last name*
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                        <ValidationError 
                            prefix="Last name" 
                            field="last-name"
                            errors={state.errors}
                        />
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email address*
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="your@email.com"
                        aria-invalid="true"
                        aria-describedby="email-error"
                        />
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-white">
                     Phone number*
                    </label>
                    <div className="mt-2">
                        <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        autoComplete="phone"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="(858) 987-6543"
                        />
                        <ValidationError 
                            prefix="Phone number" 
                            field="phone-number"
                            errors={state.errors}
                        />
                    </div>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
                        Message
                    </label>
                    <div className="mt-2">
                        <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        defaultValue={''}
                        />
                         <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                        <p className="mt-3 text-sm leading-6 text-gray-400">Please describe your project and provide requested dates.</p>
                    </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <Button 
                      type="submit"
                      color="rev"
                      className="px-6 py-3"
                      disabled={state.submitting}>
                        Submit
                      </Button>
                    </div>

            </div> 
            <p className="text-sm leading-6 text-gray-400">By submitting your information you are consenting to receive <br /> communications from REV Studio.</p>
            </div>  
        </form>
        </div>
    </div>
    )
}