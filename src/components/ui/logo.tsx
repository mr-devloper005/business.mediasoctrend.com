import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/lib/site-config'

interface LogoProps {
  className?: string
  variant?: 'default' | 'compact'
  background?: string
}

export function Logo({ className, variant = 'default', background }: LogoProps) {
  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <div className="relative h-10 w-10 overflow-hidden rounded-xl">
          <Image
            src="/logo.png"
            alt={SITE_CONFIG.name}
            fill
            className="object-contain"
            sizes="40px"
            priority
          />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/logo.png"
          alt={SITE_CONFIG.name}
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-white">{SITE_CONFIG.name}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5C45E]">
          Press Distribution Desk
        </span>
      </div>
    </div>
  )
}
