  import Image from 'next/image'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { ContentImage } from '@/components/shared/content-image'
import type { SitePost } from '@/lib/site-connector'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  Megaphone,
  Newspaper,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function getCardImage(post: SitePost): string {
  const media = Array.isArray(post.media) ? post.media : []
  const u = media.find((m) => typeof m?.url === 'string')?.url
  if (u) return u
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const imgs = Array.isArray(c.images) ? c.images : []
  const first = imgs.find((x): x is string => typeof x === 'string')
  if (first) return first
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80'
}

function getCategory(post: SitePost): string {
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>).category : null
  return typeof c === 'string' && c.trim() ? c.trim() : 'Press Release'
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 14, { fresh: true })
  const featured = posts[0]
  const secondary = posts[1] ?? null
  const tertiary = posts[2] ?? null
  const grid = posts.slice(3, 9)

  const schemaData = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.baseUrl, logo: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}${SITE_CONFIG.defaultOgImage}`, sameAs: [] },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_CONFIG.name, url: SITE_CONFIG.baseUrl, potentialAction: { '@type': 'SearchAction', target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FDF8F0] text-[#102E50]">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />

      {/* ═══════════════════════════════════════════════════════
          HERO — cinematic full-bleed with diagonal clip
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] overflow-hidden" style={{ background: '#102E50' }}>

        {/* layered background */}
        <div className="pointer-events-none absolute inset-0">
          {/* large radial glow top-right */}
          <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-[#F5C45E]/8 blur-[120px]" />
          {/* amber glow bottom-left */}
          <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-[#E78B48]/10 blur-[100px]" />
          {/* red accent mid */}
          <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#BE3D2A]/6 blur-[80px]" />
          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(245,196,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,196,94,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* diagonal bottom clip */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: '#FDF8F0', clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-36 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">

            {/* ── Left: headline block ── */}
            <div className="animate-[pr-rise_0.6s_ease-out_both]">
              {/* live badge */}
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#F5C45E]/30 bg-[#F5C45E]/10 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5C45E] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F5C45E]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F5C45E]">
                  {siteContent.hero.badge}
                </span>
              </div>

              {/* giant headline */}
              <h1 className="font-display text-[2.8rem] font-bold leading-[1.04] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.2rem]">
                <span className="block">{siteContent.hero.title[0].split(' ').slice(0, 3).join(' ')}</span>
                <span className="block text-[#F5C45E]">{siteContent.hero.title[0].split(' ').slice(3, 6).join(' ')}</span>
                <span className="block">{siteContent.hero.title[0].split(' ').slice(6).join(' ')}</span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#8ab0cc]">
                {siteContent.hero.description}
              </p>

              {/* CTA row */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={siteContent.hero.primaryCta.href}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#F5C45E] px-8 py-4 text-sm font-bold text-[#102E50] shadow-[0_16px_48px_rgba(245,196,94,0.40)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_56px_rgba(245,196,94,0.50)]"
                >
                  {siteContent.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* stats strip */}
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {[
                  { value: '24,000+', label: 'Releases published' },
                  { value: '1,800+', label: 'Media partners' },
                  { value: '60+', label: 'Industries' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold text-[#F5C45E]">{value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ab0cc]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: stacked image cards ── */}
            <div className="relative animate-[pr-rise_0.85s_ease-out_both]">
              {/* main image */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80"
                    alt="Newsroom"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102E50]/85 via-[#102E50]/20 to-transparent" />
                  {/* overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5C45E]">Featured wire</p>
                    <p className="mt-2 font-display text-xl font-semibold leading-snug text-white">
                      {featured?.title ?? 'Breaking: Latest press releases from the wire'}
                    </p>
                  </div>
                </div>
              </div>

              {/* floating stat card — top right */}
              <div className="absolute -top-5 -right-5 rounded-2xl border border-white/15 bg-[#102E50]/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E78B48]">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C45E]">Live wire</p>
                    <p className="text-sm font-semibold text-white">Indexed in minutes</p>
                  </div>
                </div>
              </div>

              {/* floating review card — bottom left */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/15 bg-[#102E50]/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BE3D2A]">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C45E]">Editorial</p>
                    <p className="text-sm font-semibold text-white">Every release reviewed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SCROLLING TICKER
      ═══════════════════════════════════════════════════════ */}
      <div className="overflow-hidden border-y border-[rgba(16,46,80,0.10)] py-3.5" style={{ background: '#102E50' }}>
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: 'ticker 28s linear infinite' }}
        >
          {[...Array(3)].flatMap(() =>
            ['AP-style formatting', '·', 'Embargo scheduling', '·', 'SEO-optimised pages', '·', 'Multimedia support', '·', 'Editorial review', '·', 'Global syndication', '·', '1,800+ media partners', '·', '24,000+ releases published', '·']
          ).map((item, i) => (
            <span key={i} className={`text-xs font-bold uppercase tracking-[0.22em] ${item === '·' ? 'text-[#E78B48]' : 'text-[#F5C45E]/80'}`}>
              {item}
            </span>
          ))}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
      </div>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — bold numbered steps with connectors
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24">
        {/* background accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#F5C45E]/6 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="pr-badge">How it works</span>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                From draft to<br />
                <span className="text-[#E78B48]">distribution</span> in 3 steps
              </h2>
            </div>
            <p className="max-w-sm text-[#3a5a7a] md:text-right">
              Our editorial workflow keeps every release accurate, compliant, and ready for pickup by journalists worldwide.
            </p>
          </div>

          {/* steps */}
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: FileText, step: '01', title: 'Submit your release', body: 'Use our structured template — headline, dateline, body, boilerplate, and media contact fields — so nothing gets missed.', accent: '#102E50', light: '#e8eef5' },
              { icon: ShieldCheck, step: '02', title: 'Editorial review', body: 'Our desk checks formatting, factual consistency, and compliance. Embargoed releases are held until your chosen publish time.', accent: '#E78B48', light: '#fdf0e6' },
              { icon: Globe2, step: '03', title: 'Instant syndication', body: 'Approved releases go live on the wire, indexed by search engines, and distributed to 1,800+ partner newsrooms and media desks.', accent: '#BE3D2A', light: '#faeae7' },
            ].map(({ icon: Icon, step, title, body, accent, light }, idx) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-[rgba(16,46,80,0.08)] bg-white p-8 shadow-[0_8px_40px_rgba(16,46,80,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(16,46,80,0.13)]"
              >
                {/* large step number watermark */}
                <span
                  className="absolute -right-2 -top-4 font-display text-[7rem] font-black leading-none opacity-[0.055] transition-opacity duration-300 group-hover:opacity-[0.09]"
                  style={{ color: accent }}
                >
                  {step}
                </span>

                {/* connector line (desktop) */}
                {idx < 2 && (
                  <div className="absolute -right-3 top-12 z-10 hidden h-0.5 w-6 lg:block" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
                )}

                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: accent, boxShadow: `0 8px 24px ${accent}40` }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                <div
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ background: light, color: accent }}
                >
                  Step {step}
                </div>

                <h3 className="font-display mt-3 text-xl font-bold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3a5a7a]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY US — full-bleed navy with diagonal top + image mosaic
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28" style={{ background: '#102E50' }}>
        {/* diagonal top edge */}
        <div className="absolute top-0 left-0 right-0 h-20" style={{ background: '#FDF8F0', clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
        {/* diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: '#FDF8F0', clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />

        {/* glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-[#F5C45E]/8 blur-[110px]" />
          <div className="absolute bottom-1/4 -left-32 h-[400px] w-[400px] rounded-full bg-[#E78B48]/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* image mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                  alt="Press room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#102E50]/50 to-transparent" />
                <div className="absolute left-5 bottom-5 rounded-xl border border-white/15 bg-[#102E50]/80 px-4 py-2.5 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F5C45E]">Editorial desk</p>
                  <p className="text-sm font-semibold text-white">Every release reviewed before publish</p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&q=80"
                  alt="Journalist"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-[#102E50]/30" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"
                  alt="Newsroom"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-[#102E50]/30" />
                {/* stat overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-display text-4xl font-black text-[#F5C45E]">60+</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white">Industries</p>
                </div>
              </div>
            </div>

            {/* copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C45E]/35 bg-[#F5C45E]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.26em] text-[#F5C45E]">
                <Sparkles className="h-3 w-3" />
                {siteContent.home.introBadge}
              </span>
              <h2 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
                {siteContent.home.introTitle}
              </h2>
              {siteContent.home.introParagraphs.slice(0, 2).map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-[#8ab0cc]">{p}</p>
              ))}

              {/* feature checklist */}
              <ul className="mt-8 space-y-3.5">
                {siteContent.home.sidePoints.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-white">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5C45E]/15">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#F5C45E]" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={siteContent.home.primaryLink.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F5C45E] px-7 py-3.5 text-sm font-bold text-[#102E50] shadow-[0_12px_36px_rgba(245,196,94,0.35)] transition-all hover:scale-[1.02] hover:bg-[#f0bb4a]"
                >
                  {siteContent.home.primaryLink.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={siteContent.home.secondaryLink.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {siteContent.home.secondaryLink.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          RELEASE TYPES — horizontal scroll cards with color accents
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="pr-badge">Release types</span>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Every announcement, <span className="text-[#E78B48]">covered</span>
              </h2>
            </div>
            <Link href="/media-network" className="hidden items-center gap-1.5 text-sm font-bold text-[#E78B48] hover:underline md:inline-flex">
              Browse all releases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Newspaper, title: 'Press releases', body: 'Full-length releases with headline, dateline, body, and boilerplate.', bg: '#102E50', fg: '#F5C45E' },
              { icon: TrendingUp, title: 'Earnings & financials', body: 'Quarterly results, guidance updates, and investor-facing announcements.', bg: '#E78B48', fg: '#ffffff' },
              { icon: Megaphone, title: 'Product launches', body: 'New product, feature, and partnership announcements with media assets.', bg: '#BE3D2A', fg: '#ffffff' },
              { icon: Send, title: 'Executive news', body: 'Leadership appointments, board changes, and corporate milestones.', bg: '#F5C45E', fg: '#102E50' },
            ].map(({ icon: Icon, title, body, bg, fg }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl p-7 shadow-[0_8px_32px_rgba(16,46,80,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_56px_rgba(16,46,80,0.18)]"
                style={{ background: bg }}
              >
                {/* decorative circle */}
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full opacity-10" style={{ background: fg }} />
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${fg}20`, color: fg }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold" style={{ color: fg }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: `${fg}b0` }}>{body}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: fg }}>
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LATEST WIRE — magazine-style press feed
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background: '#f4ede0' }}>
        {/* top diagonal */}
        <div className="absolute top-0 left-0 right-0 h-16" style={{ background: '#FDF8F0', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* header */}
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="pr-badge">
                <Clock className="h-3 w-3" />
                Live wire
              </span>
              <h2 className="font-display mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                {siteContent.taskSectionHeading}
              </h2>
              <p className="mt-2 text-[#3a5a7a]">{siteContent.taskSectionDescriptionSuffix}</p>
            </div>
            <Link href="/media-network" className="inline-flex items-center gap-2 rounded-full border border-[rgba(16,46,80,0.15)] bg-white px-6 py-3 text-sm font-bold text-[#102E50] shadow-sm transition hover:bg-[#102E50] hover:text-white">
              Full archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {featured ? (
            <div className="space-y-6">
              {/* top row: featured hero + sidebar stack */}
              <div className="grid gap-6 lg:grid-cols-[1.5fr_0.5fr]">

                {/* FEATURED — large hero card */}
                <Link
                  href={`/media-network/${featured.slug}`}
                  className="group relative overflow-hidden rounded-3xl shadow-[0_20px_64px_rgba(16,46,80,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(16,46,80,0.20)]"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <ContentImage
                      src={getCardImage(featured)}
                      alt={featured.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102E50]/90 via-[#102E50]/30 to-transparent" />
                    {/* category pill */}
                    <span className="absolute left-6 top-6 rounded-full bg-[#BE3D2A] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                      {getCategory(featured)}
                    </span>
                    {/* featured label */}
                    <span className="absolute right-6 top-6 rounded-full border border-[#F5C45E]/50 bg-[#F5C45E]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5C45E] backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl font-bold leading-snug tracking-[-0.03em] text-white transition-colors duration-200 group-hover:text-[#F5C45E] sm:text-3xl">
                      {featured.title}
                    </h3>
                    {featured.summary ? (
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">{featured.summary}</p>
                    ) : null}
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F5C45E] px-5 py-2 text-xs font-bold text-[#102E50] shadow transition-transform duration-200 group-hover:scale-[1.03]">
                      Read full release <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>

                {/* sidebar: secondary + tertiary stacked */}
                <div className="flex flex-col gap-6">
                  {[secondary, tertiary].filter(Boolean).map((post, i) => post && (
                    <Link
                      key={post.id}
                      href={`/media-network/${post.slug}`}
                      className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-[rgba(16,46,80,0.08)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(16,46,80,0.12)]"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <ContentImage
                          src={getCardImage(post)}
                          alt={post.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white ${i === 0 ? 'bg-[#E78B48]' : 'bg-[#102E50]'}`}>
                          {getCategory(post)}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-base font-bold leading-snug group-hover:text-[#E78B48]">{post.title}</h3>
                        {post.summary ? <p className="mt-2 line-clamp-2 text-xs text-[#3a5a7a]">{post.summary}</p> : null}
                        <span className="mt-auto pt-3 text-xs font-bold text-[#E78B48]">Read more →</span>
                      </div>
                    </Link>
                  ))}

                  {/* mini CTA */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#102E50] p-6">
                    <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-[#F5C45E]/10" />
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#F5C45E]">Submit a release</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#8ab0cc]">
                      Get your announcement in front of journalists and search engines.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F5C45E] py-2.5 text-xs font-black text-[#102E50] transition hover:bg-[#f0bb4a]"
                    >
                      Contact the desk <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* bottom grid of 6 */}
              {grid.length ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {grid.map((post, idx) => (
                    <Link
                      key={post.id}
                      href={`/media-network/${post.slug}`}
                      className="group overflow-hidden rounded-2xl border border-[rgba(16,46,80,0.08)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(16,46,80,0.12)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ContentImage
                          src={getCardImage(post)}
                          alt=""
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.05]"
                        />
                        {/* color-coded index badge */}
                        <span
                          className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-black text-white"
                          style={{ background: ['#102E50','#E78B48','#BE3D2A','#F5C45E','#102E50','#E78B48'][idx % 6], color: idx === 3 ? '#102E50' : 'white' }}
                        >
                          {String(idx + 4).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E78B48]">{getCategory(post)}</p>
                        <h3 className="font-display mt-2 text-base font-bold leading-snug group-hover:text-[#E78B48]">{post.title}</h3>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#3a5a7a]">{post.summary}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            /* empty state */
            <div className="rounded-3xl border-2 border-dashed border-[rgba(16,46,80,0.15)] bg-white p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C45E]/15">
                <Newspaper className="h-8 w-8 text-[#E78B48]" />
              </div>
              <p className="mt-5 font-display text-xl font-bold">Releases will appear here once published.</p>
              <p className="mt-2 text-sm text-[#3a5a7a]">Connect your feed in the master panel to populate this wire automatically.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#102E50] px-7 py-3.5 text-sm font-bold text-white">
                Contact the desk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRUST METRICS — bold numbers on dark band
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: '#102E50' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: '24,000+', label: 'Press releases published', color: '#F5C45E' },
              { value: '1,800+', label: 'Media partner newsrooms', color: '#E78B48' },
              { value: '60+', label: 'Industries covered', color: '#F5C45E' },
              { value: '< 5 min', label: 'Average review turnaround', color: '#E78B48' },
            ].map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <p className="font-display text-4xl font-black sm:text-5xl" style={{ color }}>{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8ab0cc]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA — split diagonal with bold typography
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg, #E78B48 0%, #E07030 50%, #BE3D2A 100%)' }}
      >
        {/* decorative overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#F5C45E]/20 blur-[80px]" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#102E50]/20 blur-[70px]" />
          {/* subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                <Radio className="h-3 w-3" />
                {siteContent.cta.badge}
              </span>
              <h2 className="font-display mt-5 text-4xl font-black leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem]">
                {siteContent.cta.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                {siteContent.cta.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href={siteContent.cta.primaryCta.href}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#102E50] px-8 py-4 text-sm font-black text-white shadow-[0_16px_48px_rgba(16,46,80,0.40)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_56px_rgba(16,46,80,0.50)]"
              >
                {siteContent.cta.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
