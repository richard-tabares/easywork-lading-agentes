import { cn } from '../../lib/cn'

export default function PhotoBackdrop({
  src,
  className,
  overlayClassName = 'bg-brand/85',
  priority = false,
}) {
  return (
    <div aria-hidden="true" className={cn('overflow-hidden bg-brand', className)}>
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      <div className={cn('pointer-events-none absolute inset-0', overlayClassName)} />
    </div>
  )
}
