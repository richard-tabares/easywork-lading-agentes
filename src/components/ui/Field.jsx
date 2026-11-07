import { cn } from '../../lib/cn'

const baseInput =
  'w-full min-h-11.5 rounded-xl border border-field bg-white px-3.5 py-3 font-sans text-sm text-brand placeholder:text-placeholder focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15'

export function TextInput({ className, ...props }) {
  return <input className={cn(baseInput, className)} {...props} />
}

export function FieldLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-brand">
      {children}
    </label>
  )
}

export function FieldError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} className="text-sm text-danger-strong">
      {children}
    </p>
  )
}
