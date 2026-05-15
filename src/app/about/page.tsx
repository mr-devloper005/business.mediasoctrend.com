import Link from 'next/link'
import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  Newspaper,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'

const stats = [
  { label: 'Press releases published', value: '24,000+' },
  { label: 'Media partners worldwide', value: '1,800+' },
  { label: 'Industries covered', value: '60+' },
  { label: 'Years on the wire', value: '8+' },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Editorial integrity',
    description:
      'Every release is reviewed by our editorial desk before it goes live. We check formatting, factual consistency, and compliance so journalists can trust what they read.',
  },
  {
    icon: Zap,
    title: 'Speed without compromise',
    description:
      'Approved releases are indexed and distributed within minutes. Fast turnaround never comes at the cost of accuracy or presentation quality.',
  },
  {
    icon: Globe2,
    title: 'Global reach',
    description:
      'Our partner network spans newsrooms, trade publications, and digital media desks across six continents, giving your story the audience it deserves.',
  },
  {
    icon: Users,
    title: 'Built for PR teams',
    description:
      'From solo communications managers to large agency teams, our platform scales to your workflow — with embargo controls, multi-user access, and approval queues.',
  },
]

const timeline = [
  { year: '2016', event: 'Founded as a regional press wire for business announcements' },
  { year: '2018', event: 'Expanded to international distribution with 200+ media partners' },
  { year: '2020', event: 'Launched structured release templates and editorial review workflow' },
  { year: '2022', event: 'Reached 10,000 published releases and 1,000 media partners' },
  { year: '2024', event: 'Introduced embargo scheduling, multimedia support, and SEO-optimised pages' },
]

const team = [
  {
    name: 'Alexandra Reid',
    role: 'Editor-in-Chief',
    bio: 'Former wire editor with 15 years in financial and corporate communications. Oversees all editorial standards and review processes.',
    initials: 'AR',
  },
  {
    name: 'Marcus Osei',
    role: 'Head of Distribution',
    bio: 'Built and manages our global media partner network. Previously led syndication at a major newswire service.',
    initials: 'MO',
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead',
    bio: 'Designs the platform experience for PR professionals. Focused on making complex distribution workflows feel effortless.',
    initials: 'PN',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#102E50]">
      <NavbarShell />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#102E50] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#F5C45E]/10 blur-[80px]" />
          <div className="absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-[#E78B48]/10 blur-[70px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C45E]/40 bg-[#F5C45E]/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F5C45E]">
            About us
          </span>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            The press wire built for communications professionals who care about accuracy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a8c4d8]">
            {SITE_CONFIG.name} is a trusted press release distribution platform serving corporations,
            PR agencies, and communications teams worldwide. We combine editorial rigour with modern
            distribution technology so your announcements reach the right journalists, every time.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/media-network"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5C45E] px-7 py-3.5 text-sm font-bold text-[#102E50] transition hover:bg-[#f0bb4a]"
            >
              Browse releases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact the desk
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-[rgba(16,46,80,0.08)] bg-white py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-bold text-[#E78B48] sm:text-4xl">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#3a5a7a]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <span className="pr-badge">Our mission</span>
          <h2 className="font-display mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Giving every announcement the distribution it deserves.
          </h2>
          <p className="mt-5 leading-relaxed text-[#3a5a7a]">
            We believe that well-crafted press releases — accurate, structured, and properly
            distributed — are still one of the most powerful tools in a communications team's
            arsenal. Our mission is to make that distribution reliable, fast, and accessible to
            organisations of every size.
          </p>
          <p className="mt-4 leading-relaxed text-[#3a5a7a]">
            From a startup announcing its first funding round to a Fortune 500 company reporting
            quarterly earnings, every release that comes through our wire gets the same editorial
            attention and distribution reach.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Structured AP-style formatting for every release type',
              'Embargo controls respected and enforced automatically',
              'SEO-optimised pages that rank for your brand and keywords',
              'Transparent distribution reporting after every publish',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-[#102E50]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E78B48]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(16,46,80,0.12)]">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1000&q=80"
            alt="Newsroom"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#102E50]/40 to-transparent" />
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-y border-[rgba(16,46,80,0.08)] bg-[#f8f2e6] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="pr-badge">Our values</span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              What guides every decision we make
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[rgba(16,46,80,0.10)] bg-white p-7 shadow-[0_8px_28px_rgba(16,46,80,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(16,46,80,0.10)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#102E50] text-[#F5C45E]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3a5a7a]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <span className="pr-badge">Our journey</span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Eight years on the wire
          </h2>
        </div>
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#F5C45E] to-[#BE3D2A] sm:left-1/2 sm:-translate-x-px" />
          <div className="space-y-10">
            {timeline.map(({ year, event }, i) => (
              <div
                key={year}
                className={`relative flex items-start gap-6 pl-12 sm:pl-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* dot */}
                <div className="absolute left-2 top-1.5 h-5 w-5 rounded-full border-4 border-[#F5C45E] bg-[#102E50] sm:left-1/2 sm:-translate-x-1/2" />
                <div
                  className={`w-full rounded-2xl border border-[rgba(16,46,80,0.10)] bg-white p-6 shadow-sm sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}
                >
                  <p className="font-display text-2xl font-bold text-[#E78B48]">{year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#3a5a7a]">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="border-t border-[rgba(16,46,80,0.08)] bg-[#102E50] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C45E]/40 bg-[#F5C45E]/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.26em] text-[#F5C45E]">
              The team
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Journalists and technologists, together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#a8c4d8]">
              Our team combines deep editorial experience with modern distribution technology to
              serve communications professionals worldwide.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map(({ name, role, bio, initials }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/6 p-7 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C45E] font-display text-xl font-bold text-[#102E50]">
                  {initials}
                </div>
                <p className="mt-5 font-display text-lg font-semibold text-white">{name}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#F5C45E]">
                  {role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#a8c4d8]">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#E78B48] py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <Award className="h-10 w-10 text-white/80" />
          <h2 className="font-display max-w-xl text-3xl font-semibold text-white">
            Ready to put your next announcement on the wire?
          </h2>
          <p className="max-w-lg text-white/80">
            Join thousands of communications teams who trust Business Mediasoctrend to distribute
            their press releases accurately and efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#102E50] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0d2540]"
            >
              Contact the editorial desk
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/media-network"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Browse releases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
