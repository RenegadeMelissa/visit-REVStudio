import React, { useId, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

import { AuthLayout } from '../components/AuthLayout'
import { Button } from '../components/Button'
import { DateField, TextField } from '../components/Fields'


export default  function ScheduleForm() {
  const [state, handleSubmit] = useForm("xzblpwpn");
  if (state.succeeded) {
      return <p>Thanks for contacting us! A member of the REV Studio team will be in touch shortly.</p>
  }
  return (
    <>
      <AuthLayout
        title="Let’s Chat"
        subtitle={
          <>
            We're looking forward to working with you.
          </>
        }
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-full">
                <p className="mt-3 text-sm leading-6 text-gray-400">If you have dates in mind, you can select them.</p>
            </div>
            <DateField
              label="Start date"
              id="start-date"
              name="start-date"
              type="date"
            />
            <DateField
              label="End date"
              id="end-date"
              name="end-date"
              type="date"
            />
            <TextField
              label="First name"
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              required
            />
            <TextField
              className="col-span-full"
              label="Phone number"
              id="phone-number"
              name="phone-number"
              type="text"
              autoComplete="phone"
              placeholder="(858) 987-6543"
              required
            />
            <div className="col-span-full">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
                  Message
              </label>
              <div className="mt-2">
                  <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full appearance-none rounded-md border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
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

          <Button type="submit" color="cyan" className="mt-8 py-4 w-full" disabled={state.submitting}>
            Book REV Studio Today
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
