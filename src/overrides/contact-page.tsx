import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ArrowRight, Clock, FileText, Mail, Megaphone, Phone } from 'lucide-react'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const lanes = [
  {
    icon: FileText,
    title: 'Submit a press release',
    body: 'Ready to distribute? Send us your release draft and we will review formatting, compliance, and distribution options.',
  },
  {
    icon: Megaphone,
    title: 'Distribution enquiries',
    body: 'Questions about reach, partner newsrooms, or syndication channels? Our distribution team will walk you through the options.',
  },
  {
    icon: Mail,
    title: 'Editorial standards',
    body: 'Need guidance on AP-style formatting, embargo policies, or boilerplate requirements? Our editorial desk is here to help.',
  },
  {
    icon: Clock,
    title: 'Urgent releases',
    body: 'Breaking news or time-sensitive announcements? Flag your submission as urgent and we will prioritise the review queue.',
  },
]

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#102E50]">
      <NavbarShell />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#102E50] py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#F5C45E]/10 blur-[70px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C45E]/40 bg-[#F5C45E]/12 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-[#F5C45E]">
            Contact
          </span>
          <h1 className="font-display mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl">
            Reach the {SITE_CONFIG.name} editorial desk
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#a8c4d8]">
            Whether you are submitting a release, asking about distribution, or need editorial
            guidance — we route every enquiry to the right team member.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* ── Contact form ── */}
          <div className="rounded-[2rem] border border-[rgba(16,46,80,0.10)] bg-white p-8 shadow-[0_20px_60px_rgba(16,46,80,0.08)] sm:p-10">
            <h2 className="font-display text-2xl font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-[#3a5a7a]">
              Fill in the details below and our team will respond within one business day.
            </p>

            <form className="mt-8 grid gap-5" action="/contact" method="get">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#3a5a7a]">
                    Full name
                  </label>
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="mt-2 h-12 w-full rounded-xl border border-[rgba(16,46,80,0.15)] bg-[#f8f2e6] px-4 text-sm text-[#102E50] outline-none placeholder:text-[#3a5a7a]/50 focus:border-[#E78B48] focus:ring-2 focus:ring-[#E78B48]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#3a5a7a]">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="mt-2 h-12 w-full rounded-xl border border-[rgba(16,46,80,0.15)] bg-[#f8f2e6] px-4 text-sm text-[#102E50] outline-none placeholder:text-[#3a5a7a]/50 focus:border-[#E78B48] focus:ring-2 focus:ring-[#E78B48]/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#3a5a7a]">
                  Organisation
                </label>
                <input
                  name="org"
                  placeholder="Company or agency name"
                  className="mt-2 h-12 w-full rounded-xl border border-[rgba(16,46,80,0.15)] bg-[#f8f2e6] px-4 text-sm text-[#102E50] outline-none placeholder:text-[#3a5a7a]/50 focus:border-[#E78B48] focus:ring-2 focus:ring-[#E78B48]/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#3a5a7a]">
                  Enquiry type
                </label>
                <select
                  name="type"
                  className="mt-2 h-12 w-full rounded-xl border border-[rgba(16,46,80,0.15)] bg-[#f8f2e6] px-4 text-sm text-[#102E50] outline-none focus:border-[#E78B48] focus:ring-2 focus:ring-[#E78B48]/20"
                >
                  <option value="">Select an option</option>
                  <option value="submit">Submit a press release</option>
                  <option value="distribution">Distribution enquiry</option>
                  <option value="editorial">Editorial standards</option>
                  <option value="urgent">Urgent release</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.16em] text-[#3a5a7a]">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Describe your release, question, or request. Include any relevant deadlines or embargo dates."
                  className="mt-2 min-h-[160px] w-full rounded-2xl border border-[rgba(16,46,80,0.15)] bg-[#f8f2e6] px-4 py-3 text-sm text-[#102E50] outline-none placeholder:text-[#3a5a7a]/50 focus:border-[#E78B48] focus:ring-2 focus:ring-[#E78B48]/20"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#102E50] text-sm font-bold text-white shadow-sm transition hover:bg-[#0d2540]"
              >
                Send enquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs leading-relaxed text-[#3a5a7a]">
                We respond to all enquiries within one business day. For urgent releases, please
                select "Urgent release" above.
              </p>
            </form>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-6">
            {/* image */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_55px_rgba(16,46,80,0.12)]">
              <div className="relative aspect-[5/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=900&q=80"
                  alt="Editorial desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102E50]/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C45E]">
                    Editorial desk
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Every release reviewed before it hits the wire
                  </p>
                </div>
              </div>
            </div>

            {/* lanes */}
            <div className="grid gap-4 sm:grid-cols-2">
              {lanes.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[rgba(16,46,80,0.10)] bg-white p-5 shadow-sm"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5C45E]/15 text-[#E78B48]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#3a5a7a]">{body}</p>
                </div>
              ))}
            </div>

            {/* FAQ nudge */}
            <div className="rounded-2xl border border-[rgba(231,139,72,0.30)] bg-[#E78B48]/8 p-6">
              <h3 className="font-display text-lg font-semibold text-[#102E50]">
                Check the FAQ first
              </h3>
              <p className="mt-2 text-sm text-[#3a5a7a]">
                Many distribution and formatting questions are answered on our pricing page.
              </p>
              <a
                href="/pricing#faq"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#E78B48] hover:underline"
              >
                Open pricing FAQ
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
