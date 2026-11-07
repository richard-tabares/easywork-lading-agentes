import { m } from 'motion/react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'
import { hoverLift } from '../../lib/motion'

const MotionLink = m.create(Link)

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  ghost: 'bg-white text-brand border-2 border-brand hover:bg-ghost-hover',
  white: 'bg-white text-brand hover:bg-white-hover',
  outlineWhite: 'text-white border-2 border-white hover:bg-white/10',
}

export default function ButtonLink({
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-xl font-semibold no-underline transition-colors',
    variants[variant],
    className,
  )

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...hoverLift} {...props}>
        {children}
      </MotionLink>
    )
  }

  return (
    <m.a href={href} className={classes} {...hoverLift} {...props}>
      {children}
    </m.a>
  )
}
