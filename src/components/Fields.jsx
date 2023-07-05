import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { useForm, ValidationError } from '@formspree/react'


const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', name, className, ...props }) {
  const [state] = useForm("xzblpwpn");
  return (
    <div className={className}>
      {label && <Label id={id}>{label}*</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
      <ValidationError prefix={name} field={name} errors={state.errors} />
    </div>
  )
}

export function SelectField({ id, label, name, className, ...props }) {
  const [state] = useForm("xzblpwpn");
  return (
    <div className={className}>
      {label && <Label id={id}>{label}*</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
      <ValidationError prefix={name} field={name} errors={state.errors} />
    </div>
  )
}

export function DateField({ id, label, type = 'date', name, className, ...props }) {
  const [date, setDate] = useState('')
  const dateInputRef = useRef(null)

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} onChange={handleChange} ref={dateInputRef} />
      <p className="mt-3 text-sm leading-6 text-gray-400">{date}</p>
    </div>
  )
}
