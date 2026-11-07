import { Link } from 'react-router'
import logo from '../../assets/logo.png'
import { cn } from '../../lib/cn'

export default function BrandLogo({
  to = '/',
  className,
  imageClassName,
  alt = 'Easywork · All in one',
}) {
  return (
    <Link to={to} aria-label="Easywork, inicio" className={cn('inline-flex', className)}>
      <img src={logo} alt={alt} className={cn('w-auto', imageClassName)} />
    </Link>
  )
}
