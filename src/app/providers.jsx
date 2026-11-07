import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'

export default function AppProviders({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
