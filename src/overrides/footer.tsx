import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'

export const FOOTER_OVERRIDE_ENABLED = true

const primaryRoute =
  SITE_CONFIG.tasks.find((t) => t.key === 'mediaDistribution')?.route || '/media-network'

export function FooterOverride() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#102E50] text-white/80">
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F5C45E] via-[#E78B48] to-[#BE3D2A]" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-semibold text-white">{SITE_CONFIG.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {siteContent.footer.tagline}
            </p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5C45E]">
              Official press wire
            </p>
          </div>

          {/* wire */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F5C45E]">
              Wire
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href={primaryRoute} className="transition hover:text-white">
                  Press releases
                </Link>
              </li>
              <li>
                <Link href="/search" className="transition hover:text-white">
                  Search archive
                </Link>
              </li>
              <li>
                <Link href="/media-network" className="transition hover:text-white">
                  Media network
                </Link>
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F5C45E]">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/press" className="transition hover:text-white">
                  Press room
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F5C45E]">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition hover:text-white">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>{SITE_CONFIG.domain} · Press release distribution &amp; media wire</p>
        </div>
      </div>
    </footer>
  )
}
