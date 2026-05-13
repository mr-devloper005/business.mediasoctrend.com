import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: "Creators onboarded", value: "12k+" },
  { label: "Bookmarks shared", value: "180k" },
  { label: "Listings published", value: "8.6k" },
];

const values = [
  { title: "Curated by people", description: "We believe trusted recommendations beat endless feeds." },
  { title: "Designed for focus", description: "Clear, calm UI helps you find the next best resource fast." },
  { title: "Built to share", description: "Collections make collaboration and knowledge flow effortless." },
];

const mission = {
  title: "Our Mission",
  description: "To create a digital space where quality content, trusted businesses, and curated resources come together in a thoughtful, user-first experience.",
  vision: "We envision a web where discovery is intentional, collaboration is meaningful, and every interaction adds value to your journey."
};

const features = [
  {
    icon: "📚",
    title: "Smart Publishing",
    description: "Editorial tools designed for long-form content with reader-friendly layouts and thoughtful typography."
  },
  {
    icon: "🏪",
    title: "Business Discovery",
    description: "Curated directory listings with verified information and trust signals for local and online services."
  },
  {
    icon: "🔖",
    title: "Social Bookmarking",
    description: "Organize, save, and share resources with collections that make knowledge management effortless."
  },
  {
    icon: "👥",
    title: "Community Features",
    description: "Connect with creators, businesses, and curators in a space designed for meaningful interaction."
  }
];

const timeline = [
  { year: "2021", event: "Founded with a vision for better content discovery" },
  { year: "2022", event: "Launched editorial publishing platform" },
  { year: "2023", event: "Added business directory and bookmarking features" },
  { year: "2024", event: "Reached 10k+ active creators and businesses" }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    content: "Finally, a platform that respects long-form content and helps readers discover quality work.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Local Business Owner",
    content: "The directory features helped our business reach local customers who actually need our services.",
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Research Analyst",
    content: "The bookmarking system transformed how our team shares and organizes research resources.",
    avatar: "EW"
  }
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a modern platform for creators, communities, and curated business discovery.`}
      actions={
        <>
          <Button variant="outline" asChild className="border-[#dcc8b7] bg-[#fffdfa] text-[#241711] hover:bg-[#f5e7d7]">
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button asChild className="bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)]">
          <CardContent className="space-y-4 p-6">
            <Badge className="bg-[#241711] text-[#fff1e2]">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-[#241711]">
              A single home for knowledge, discovery, and community.
            </h2>
            <p className="text-sm text-[#6e5547]">
              {SITE_CONFIG.name} brings together publishing, listings, and social bookmarking so teams can move faster
              and keep their best resources close.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-[#dcc8b7] bg-[#fff4e8] p-4">
                  <div className="text-2xl font-semibold text-[#241711]">{item.value}</div>
                  <div className="text-xs text-[#6e5547]">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#241711]">{value.title}</h3>
                <p className="mt-2 text-sm text-[#6e5547]">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(77,47,27,0.12)]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-[#fff4e8] text-[#241711]">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-[#241711]">{member.name}</p>
                  <p className="text-xs text-[#6e5547]">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6e5547]">{member.bio}</p>
              <p className="mt-3 text-xs text-[#6e5547]">{member.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-16">
        <Card className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)]">
          <CardContent className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold text-[#241711] mb-4">{mission.title}</h2>
                <p className="text-[#6e5547] leading-relaxed">{mission.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#241711] mb-4">Our Vision</h3>
                <p className="text-[#6e5547] leading-relaxed">{mission.vision}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#241711] mb-4">What We Offer</h2>
          <p className="text-[#6e5547] max-w-2xl mx-auto">
            Comprehensive tools designed for creators, businesses, and knowledge curators
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)] hover:shadow-[0_28px_70px_rgba(77,47,27,0.12)] transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#241711] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6e5547]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#241711] mb-4">Our Journey</h2>
          <p className="text-[#6e5547] max-w-2xl mx-auto">
            Key milestones that shaped our platform and community
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <Card key={index} className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)] hover:shadow-[0_28px_70px_rgba(77,47,27,0.12)] transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#241711] mb-2">{item.year}</h3>
                <p className="text-sm text-[#6e5547]">{item.event}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#241711] mb-4">What Our Community Says</h2>
          <p className="text-[#6e5547] max-w-2xl mx-auto">
            Real experiences from creators, businesses, and curators using our platform
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)] hover:shadow-[0_28px_70px_rgba(77,47,27,0.12)] transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-[#fff4e8] text-[#241711] text-sm font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-[#241711]">{testimonial.name}</p>
                    <p className="text-xs text-[#6e5547]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#6e5547] italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16">
        <Card className="border-[#dcc8b7] bg-[#fffdfa] shadow-[0_24px_60px_rgba(77,47,27,0.08)]">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-semibold text-[#241711] mb-4">Ready to Join Our Community?</h2>
            <p className="text-[#6e5547] mb-6 max-w-2xl mx-auto">
              Whether you're a creator, business owner, or knowledge curator, we have the tools you need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button variant="outline" asChild className="border-[#dcc8b7] bg-[#fffdfa] text-[#241711] hover:bg-[#f5e7d7]">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
