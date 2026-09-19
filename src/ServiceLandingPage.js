import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { setPageMeta } from './utils/seo';
import {
  ArrowRight,
  BarChart,
  CheckCircle,
  ClipboardList,
  Clock,
  Globe,
  Layout,
  MessageSquare,
  Search,
  Shield,
  Smartphone,
  Star,
  Utensils,
  Wrench
} from 'lucide-react';

const landingPages = {
  smallBusiness: {
    title: 'Small Business Websites in Cleveland, Ohio',
    eyebrow: 'Cleveland small business web developer',
    heading: 'Websites that make it easier for customers to call, book, order, or request a quote',
    description:
      'I build fast, mobile-friendly websites for local businesses that need clearer services, stronger trust signals, and a simple path from visitor to customer.',
    canonicalPath: '/small-business-websites-cleveland',
    packageName: '3-Page Website',
    note:
      'I am interested in a small business website. Business type: ______. Current website: ______. Main goal: calls / bookings / orders / quote requests.',
    primaryIcon: Layout,
    segments: ['Local service businesses', 'Restaurants and venues', 'Solo owners', 'New businesses', 'Website redesigns'],
    outcomes: [
      'Clear homepage built around the action customers should take',
      'Services, menu, gallery, or about content organized for scanning',
      'Click-to-call, contact form, map, hours, and social links',
      'SEO basics, metadata, sitemap, and Google Business support',
      'Analytics setup so important actions can be measured'
    ],
    proof: [
      'Built live business websites for Au Jus Cleveland, Spotlight Cleveland, and Danimal Clown Entertainment',
      'Built and launched Android apps on Google Play',
      'Experience with React, WordPress, analytics, automation, and data workflows'
    ],
    secondary: [
      {
        title: 'Start lean',
        copy: 'Launch a focused one-page or three-page website first, then expand as the business grows.',
        icon: Clock
      },
      {
        title: 'Keep it measurable',
        copy: 'Track the actions that matter: calls, contact forms, ordering links, bookings, and outbound clicks.',
        icon: BarChart
      },
      {
        title: 'Make upkeep simple',
        copy: 'Add hosting and maintenance when you want updates, backups, SSL, and small fixes handled.',
        icon: Shield
      }
    ]
  },
  restaurant: {
    title: 'Restaurant Websites in Cleveland, Ohio | Derek Gembus',
    eyebrow: 'Restaurant and food-service websites',
    heading: 'Restaurant websites built around menus, orders, hours, events, and local searches',
    description:
      'I help restaurants and food businesses turn scattered information into a mobile-friendly website customers can use quickly from Google, social media, or maps.',
    canonicalPath: '/restaurant-websites-cleveland',
    packageName: '3-Page Website',
    note:
      'I am interested in a restaurant website. Restaurant name: ______. Current website or social page: ______. I need help with: menu / ordering links / hours / events / catering / contact.',
    primaryIcon: Utensils,
    segments: ['Restaurants', 'Food trucks', 'Bars and venues', 'Catering businesses', 'New openings'],
    outcomes: [
      'Mobile menu page that is easier to use than a buried PDF',
      'Ordering, delivery, reservation, catering, and event links placed where customers expect them',
      'Hours, location, parking notes, phone, map, and social links cleaned up',
      'Local SEO structure for branded and food-intent searches',
      'Analytics for order links, calls, directions, and contact requests'
    ],
    proof: [
      'Built Au Jus Cleveland with online ordering integration',
      'Built Spotlight Cleveland with events, gallery, menu, and analytics',
      'Understands restaurant speed, mobile, and customer-action needs'
    ],
    secondary: [
      {
        title: 'Menu clarity',
        copy: 'Make prices, categories, hours, specials, and ordering links easy to find on mobile.',
        icon: ClipboardList
      },
      {
        title: 'Search readiness',
        copy: 'Support Google visibility with useful page titles, descriptions, schema, and business details.',
        icon: Search
      },
      {
        title: 'Customer actions',
        copy: 'Put ordering, calls, maps, reservations, and catering inquiries in obvious places.',
        icon: MessageSquare
      }
    ]
  },
  contractor: {
    title: 'Contractor Websites in Cleveland, Ohio | Derek Gembus',
    eyebrow: 'Contractor and home-service websites',
    heading: 'Contractor websites built to earn trust and generate quote requests',
    description:
      'I build lead-focused websites for contractors and service businesses that need clear services, proof of work, service areas, and simple quote request paths.',
    canonicalPath: '/contractor-websites-cleveland',
    packageName: '4-Page Website',
    note:
      'I am interested in a contractor or service-business website. Trade/service: ______. Service area: ______. Current website: ______. Main goal: calls / quote requests / project gallery / service pages.',
    primaryIcon: Wrench,
    segments: ['Contractors', 'Repair services', 'Landscaping', 'Cleaning services', 'Mobile service businesses'],
    outcomes: [
      'Service pages that explain what you do and where you work',
      'Quote request flow with phone, form, photos, and job details',
      'Before-and-after gallery or project proof section',
      'Local SEO basics for service-area searches',
      'Maintenance options for seasonal updates and new project photos'
    ],
    proof: [
      'Experience building business websites and quote/contact flows',
      'Comfortable with forms, analytics, hosting, SSL, and technical maintenance',
      'Data and automation background for businesses that outgrow simple sites'
    ],
    secondary: [
      {
        title: 'Trust signals',
        copy: 'Show reviews, years in business, service areas, photos, credentials, and guarantees clearly.',
        icon: Star
      },
      {
        title: 'Mobile leads',
        copy: 'Make phone calls, quote requests, and project-photo submissions easy from a phone.',
        icon: Smartphone
      },
      {
        title: 'Local service pages',
        copy: 'Build a structure that can grow into city, suburb, and service-specific pages over time.',
        icon: Globe
      }
    ]
  }
};

const ServiceLandingPage = ({ type = 'smallBusiness' }) => {
  const page = landingPages[type] || landingPages.smallBusiness;
  const PrimaryIcon = page.primaryIcon;

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: page.title,
      description: page.description,
      canonicalPath: page.canonicalPath
    });
  }, [page]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950" aria-hidden="true">
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
              <div>
                <p className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200 text-sm font-semibold">
                  <PrimaryIcon className="w-4 h-4" aria-hidden="true" />
                  {page.eyebrow}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {page.heading}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
                  {page.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/quote"
                    state={{ pkg: page.packageName, note: page.note }}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] font-semibold"
                  >
                    Request a Website Quote
                    <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/quote"
                    state={{
                      pkg: 'Performance Optimization',
                      note: 'I would like a free 10-minute website checkup. My current website is: ______. The main thing I want more of is: calls / bookings / orders / quote requests.'
                    }}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gray-700 hover:border-blue-500/70 text-gray-300 hover:text-white transition-all font-semibold"
                  >
                    Free 10-Minute Checkup
                  </Link>
                </div>
              </div>

              <div className="bg-gray-950/80 border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-4">Good fit for</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {page.segments.map((segment) => (
                    <span key={segment} className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/25 text-sm text-purple-100">
                      {segment}
                    </span>
                  ))}
                </div>
                <div className="h-px bg-gray-800 mb-6"></div>
                <p className="text-sm text-gray-400 mb-2">Starting point</p>
                <p className="text-3xl font-bold text-blue-300">{page.packageName}</p>
                <p className="text-gray-400 mt-3 text-sm">
                  Smaller or larger scopes can be adjusted after the checkup or discovery intake.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-950" aria-labelledby="outcomes-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">
              <div>
                <h2 id="outcomes-heading" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  What the website should do
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  A business website should not just look modern. It should answer customer questions quickly, build trust, and make the next action obvious.
                </p>
              </div>

              <div className="space-y-4">
                {page.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3 rounded-xl border border-gray-800 bg-gray-900/60 p-4">
                    <CheckCircle className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-gray-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="service-details-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 id="service-details-heading" className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Built for the way local customers decide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {page.secondary.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6">
                    <div className="p-3 rounded-lg bg-blue-500/15 border border-blue-500/25 w-fit mb-4">
                      <item.icon className="w-6 h-6 text-blue-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-950" aria-labelledby="proof-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="proof-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Proof that this is real work
              </h2>
              <div className="grid grid-cols-1 gap-4 text-left">
                {page.proof.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-purple-500/25 bg-purple-500/5 p-4">
                    <CheckCircle className="w-5 h-5 text-purple-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/#client-work"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-gray-700 hover:border-purple-500/70 text-gray-300 hover:text-white transition-all font-semibold"
                >
                  See Client Work
                </Link>
                <Link
                  to="/quote"
                  state={{ pkg: page.packageName, note: page.note }}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all font-semibold"
                >
                  Start a Quote
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLandingPage;
