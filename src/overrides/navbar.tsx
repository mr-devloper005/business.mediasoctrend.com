'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

const NavbarAuthControls = dynamic(
  () =>
    import('@/components/shared/navbar-auth-controls').then(
      (mod) => mod.NavbarAuthControls,
    ),
  { ssr: false, loading: () => null },
)

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryHref =
  SITE_CONFIG.tasks.find((t) => t.key === 'mediaDistribution')?.route || '/media-network'

const navLinks = [
  { label: 'Press Releases', href: primaryHref },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(16,46,80,0.12)] bg-[#102E50]/97 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* logo + name */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo variant="compact" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl">
              {SITE_CONFIG.name}
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.26em] text-[#F5C45E] sm:block">
              {siteContent.navbar.tagline}
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition',
                  active
                    ? 'bg-[#F5C45E] text-[#102E50] shadow-sm'
                    : 'text-white/75 hover:bg-white/10 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* right controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hidden rounded-full text-white/70 hover:bg-white/10 hover:text-white md:inline-flex"
          >
            <Link href="/search" aria-label="Search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          {isAuthenticated ? (
            <div className="hidden md:block">
              <NavbarAuthControls />
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="rounded-full px-4 font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                <Link href="/login">Sign in</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="rounded-full bg-[#F5C45E] px-5 font-bold text-[#102E50] shadow-sm hover:bg-[#f0bb4a]"
              >
                <Link href="/contact">Submit release</Link>
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* mobile menu */}
      {open ? (
        <div className="border-t border-white/10 bg-[#0d2540] px-4 py-4 lg:hidden">
          <Link
            href="/search"
            className="mb-3 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <Search className="h-4 w-4" />
            Search releases
          </Link>
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold',
                    active
                      ? 'bg-[#F5C45E] text-[#102E50]'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          {!isAuthenticated ? (
            <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
              <Link
                href="/login"
                className="flex-1 rounded-2xl border border-white/20 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/contact"
                className="flex-1 rounded-2xl bg-[#F5C45E] py-3 text-center text-sm font-bold text-[#102E50]"
                onClick={() => setOpen(false)}
              >
                Submit release
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}
