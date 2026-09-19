import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  Code2, Database, Terminal, Server, FileCode2, Brain, BarChart,
  Laptop, Music, Utensils, PartyPopper, Globe, ExternalLink,
  Gamepad2, DollarSign, GraduationCap, MessageSquareQuote, BookOpen,
  Layout, Smartphone, Clock, Shield, Dog, Briefcase, Users,
  Search, Wrench, PhoneCall, ArrowRight
} from 'lucide-react';
import { setPageMeta } from './utils/seo';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageMeta({
      title: 'Cleveland Small Business Websites | Derek Gembus',
      description:
        'Cleveland web developer building fast small business websites, SEO pages, contact forms, analytics, and monthly maintenance for local businesses.',
      canonicalPath: '/'
    });
  }, []);

  const localWebsiteOffers = [
    {
      title: "Small Business Websites",
      description:
        "Fast, mobile-friendly websites for local businesses that need clear services, calls, directions, quote requests, and Google-ready SEO basics.",
      icon: Briefcase,
      link: "/small-business-websites-cleveland",
      cta: "View Small Business Offer"
    },
    {
      title: "Restaurant Websites",
      description:
        "Restaurant and food-service sites with menus, ordering links, hours, location details, event updates, and analytics for real customer actions.",
      icon: Utensils,
      link: "/restaurant-websites-cleveland",
      cta: "View Restaurant Offer"
    },
    {
      title: "Contractor Websites",
      description:
        "Lead-focused sites for contractors and service businesses with service-area pages, project galleries, quote forms, and click-to-call paths.",
      icon: Wrench,
      link: "/contractor-websites-cleveland",
      cta: "View Contractor Offer"
    }
  ];

  const featuredApps = [
    {
      title: "Block Guard",
      subtitle: "Spam Call Blocker",
      description:
        "Privacy-focused Android app that blocks spam calls and texts. All processing happens on-device — no data uploaded to external servers.",
      features: ["Robocall Shield", "Personal Blocklist", "Area Code Blocking", "Whitelist Support", "100% On-Device Processing"],
      icon: Shield,
      logo: `${process.env.PUBLIC_URL}/images/block-guard-logo.png`,
      color: "from-blue-500 to-cyan-500",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.radstormtech.blockguard&hl=en_US",
      websiteUrl: "https://www.blockguard.app/"
    },
    {
      title: "Pupboard",
      subtitle: "Dog Care Tracker",
      description:
        "Complete dog care organizer for walks, meals, medications, grooming, health records, and expenses. No account required — all data stays on your device.",
      features: ["Walk Tracker with Routes", "Medication Reminders", "Health Records", "Sitter Handoff Reports", "Local-First Privacy"],
      icon: Dog,
      logo: `${process.env.PUBLIC_URL}/images/pupboard-logo.png`,
      color: "from-amber-500 to-orange-500",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.pupboard.app",
      websiteUrl: "https://pupboard.app/"
    }
  ];

  const clientWork = [
    {
      title: "Spotlight Cleveland",
      type: "Live Music Venue",
      description:
        "Modern, mobile-first website for Cleveland's west side music venue. Features events calendar, gallery, menu, and full GA4 analytics via GTM.",
      tags: ["React", "Vite", "Tailwind", "GA4", "GTM"],
      icon: Music,
      url: "https://spotlightcle.com"
    },
    {
      title: "Au Jus Cleveland",
      type: "Restaurant",
      description:
        "Website with online ordering integration for Cleveland's first Chicago-style Italian beef restaurant. 4.6★ rating with 450+ reviews.",
      tags: ["Web Dev", "E-commerce", "Online Ordering"],
      icon: Utensils,
      url: "https://www.aujus-cle.com"
    },
    {
      title: "Danimal Clown Entertainment",
      type: "Family Entertainment",
      description:
        "Custom WordPress theme and booking platform for Northeast Ohio's premier balloon artist with 15+ years experience and perfect 5★ reviews.",
      tags: ["WordPress", "PHP", "Booking System"],
      icon: PartyPopper,
      url: "https://www.danimalclown.com"
    }
  ];

  const otherProjects = [
    {
      title: "Salary Compass",
      description:
        "Analytics tool for database developer salaries in the aviation industry, aggregating data from multiple sources.",
      tags: ["JavaScript", "Data Analysis", "Node.js"],
      icon: DollarSign,
      url: ""
    },
    {
      title: "Rust Game Server & Mods",
      description:
        "High-performance server environment with custom C# mods, MySQL integration, and a VIP e-commerce system.",
      tags: ["C#", "Linux", "MySQL", "Game Dev"],
      icon: Gamepad2,
      url: ""
    },
    {
      title: "Discord Music Bot",
      description:
        "High-quality music bot using discord.js v14 and @distube/ytdl-core for stable audio streaming.",
      tags: ["Node.js", "Discord.js", "Backend"],
      icon: Music,
      url: "https://github.com/Derek-G1/Discord-Music-Bot"
    },
    {
      title: "OBS Map Cover Script",
      description:
        "Lua script for OBS Studio to prevent stream sniping in Rust by instantly hiding the map key.",
      tags: ["Lua", "OBS Studio", "Automation"],
      icon: FileCode2,
      url: "https://github.com/Derek-G1/Hide-Map-in-Rust-Game-"
    }
  ];

  const services = [
    {
      title: "Web Development",
      price: "Starts at $500",
      description:
        "Custom-coded, high-performance websites for local businesses that need calls, bookings, orders, and quote requests.",
      icon: Layout,
      features: [
        "Free 10-Minute Website Checkup",
        "Single Page: $500",
        "2-Page: $1,000",
        "3–5 Pages: $1,500–$2,500",
        "SEO, Analytics & Mobile-First"
      ]
    },
    {
      title: "Mobile App Dev",
      price: "Starts at $3,500",
      description:
        "Custom mobile applications built with your preferred tech stack. I deliver fully native or cross-platform solutions for maximum reach.",
      icon: Smartphone,
      features: [
        "MVP / Starter App: $3,500+",
        "Native & Cross-Platform (Any Stack)",
        "App Store Submission",
        "Push Notifications & Auth"
      ]
    },
    {
      title: "Consulting & Strategy",
      price: "Custom Quote",
      description:
        "Leverage data and automation to grow your business. Services include data visualization, IT workflow automation, and SEO strategies.",
      icon: BarChart,
      features: [
        "Data Analytics & Dashboards",
        "Business Process Automation",
        "SEO Audits & Strategy",
        "Google Business Setup"
      ]
    },
    {
      title: "Hosting & Maintenance",
      price: "$25 - $150 / month",
      description:
        "Secure hosting solutions and continuous maintenance to keep your site running smoothly and safely.",
      icon: Server,
      features: [
        "Standard Plan: $25/mo",
        "Premium Plan: $50/mo",
        "SSL Certificates & Security",
        "Weekly/Daily Backups"
      ]
    },
    {
      title: "Hourly Support",
      price: "$50 / hour",
      description:
        "Flexible technical support for content updates, design tweaks, bug fixes, or consultation outside of maintenance plans.",
      icon: Clock,
      features: [
        "Content Updates",
        "Design Tweaks",
        "Technical Troubleshooting",
        "No Long-Term Contract"
      ]
    }
  ];

  const skills = [
    { name: 'Google Data Analytics', icon: BarChart, category: 'Certification', color: 'from-green-500 to-lime-500' },
    { name: 'Google IT Automation', icon: Server, category: 'Certification', color: 'from-lime-500 to-yellow-500' },
    { name: 'Google IT Support', icon: Laptop, category: 'Certification', color: 'from-yellow-500 to-orange-500' },
    { name: 'HTML/CSS (MTA 98-383)', icon: FileCode2, category: 'Frontend', color: 'from-cyan-500 to-teal-500' },
    { name: 'JavaScript (MTA 98-382)', icon: Code2, category: 'Development', color: 'from-teal-500 to-green-500' },
    { name: 'Software Dev Fundamentals', icon: Brain, category: 'Development', color: 'from-emerald-500 to-cyan-500' },
    { name: 'Database (MTA 98-364)', icon: Database, category: 'Data', color: 'from-green-500 to-emerald-500' },
    { name: 'Python (MTA 98-381)', icon: Terminal, category: 'Development', color: 'from-cyan-500 to-blue-500' },
    { name: 'Object Oriented Programming', icon: Code2, category: 'Development', color: 'from-purple-500 to-blue-500' },
    { name: 'Full-Stack Development', icon: Terminal, category: 'Development', color: 'from-blue-500 to-cyan-500' },
    { name: 'Perl', icon: Code2, category: 'Development', color: 'from-pink-500 to-rose-500' },
    { name: 'SQL', icon: Database, category: 'Data', color: 'from-rose-500 to-red-500' }
  ];

  const experience = [
    {
      title: "Freelance Software Developer",
      company: "Sole Proprietorship, Cleveland, Ohio",
      period: "Feb 2022 - Present",
      description:
        "Delivering custom digital solutions spanning full-stack web development, mobile apps, and specialized game modification.",
      details: [
        "Built and launched Block Guard and Pupboard — privacy-focused Android apps on Google Play.",
        "Web Development: Managed projects from consultation to deployment using React.js, Tailwind CSS, and WordPress.",
        "Custom Websites: Built responsive sites (Spotlight CLE, Au Jus, Danimal Clown) tailored to client brands.",
        "Game Modding: Reverse-engineered game code (C#) for the Rust community to implement complex features."
      ]
    },
    {
      title: "Programmer Analyst / Data Engineer",
      company: "Marketing Communication Resource, Inc., Willoughby, Ohio",
      period: "Apr 2022 - Apr 2024",
      description:
        "Transformed raw client data into actionable marketing insights for non-profits and commercial enterprises.",
      details: [
        "ETL Development: Created Perl scripts to process data from CSVs and CRMs.",
        "Data Cleaning: Standardized data and implemented error-handling for large datasets.",
        "Automation: Automated recurring tasks using cron jobs and SQL optimization.",
        "Donation Strategy: Built ask matrices and segmentation algorithms to improve fundraising."
      ]
    }
  ];

  const education = [
    {
      school: "Cuyahoga Community College, Cleveland, Ohio",
      program: "Certificate, Computer Software Engineering",
      period: "Oct 2021 - Dec 2021",
      details:
        "Intensive 'Cleveland Codes' Bootcamp covering Full Stack Development (HTML/CSS/JS, Python, SQL) and CRM creation.",
      courses: [
        "MTA: Database Fundamentals",
        "MTA: Introduction to Programming Using HTML and CSS",
        "MTA: Introduction to Programming Using JavaScript",
        "MTA: Introduction to Programming Using Python"
      ]
    },
    {
      school: "University of Cincinnati Online",
      program: "Google IT Support Professional Certificate",
      period: "May 2024 - June 2024",
      details:
        "IT fundamentals including networking, OS power usage, system administration, and digital security.",
      courses: [
        "Technical Support Fundamentals",
        "The Bits and Bytes of Computer Networking",
        "Operating Systems and You: Becoming a Power User",
        "System Administration and IT Infrastructure Services",
        "IT Security: Defense against the digital dark arts"
      ]
    },
    {
      school: "University of Cincinnati Online",
      program: "Google IT Automation with Python Professional Certificate",
      period: "June 2024 - Aug 2024",
      details:
        "Automating tasks by writing Python scripts, using Git/GitHub for version control, and managing IT resources at scale.",
      courses: [
        "Crash Course on Python",
        "Using Python to Interact with the Operating System",
        "Introduction to Git and GitHub",
        "Troubleshooting and Debugging Techniques",
        "Configuration Management and the Cloud",
        "Automating Real-World Tasks with Python"
      ]
    },
    {
      school: "University of Cincinnati Online",
      program: "Google Data Analytics Professional Certificate",
      period: "Aug 2024 - Oct 2024",
      details:
        "Gain key analytical skills (data cleaning, analysis, & visualization) using SQL, R programming, and Tableau.",
      courses: [
        "Foundations: Data, Data, Everywhere",
        "Ask Questions to Make Data-Driven Decisions",
        "Prepare Data for Exploration",
        "Process Data from Dirty to Clean",
        "Analyze Data to Answer Questions",
        "Share Data Through the Art of Visualization",
        "Data Analysis with R Programming",
        "Google Data Analytics Capstone"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Jakob Kelly",
      role: "Owner at Au Jus LLC, Parma, Ohio",
      date: "October 2024",
      content:
        "In 2022, I was launching a new restaurant in the Cleveland, Ohio area and needed a high-quality, custom website. I hired Derek to design and build this critical piece of my business infrastructure. Throughout the entire project, Derek was a true professional. The website Derek delivered not only looks fantastic but also functions flawlessly under high volume. It has been a cornerstone of my business's success and has directly contributed to an increase in our revenue through online orders."
    },
    {
      name: "Danimal Clown",
      role: "Owner at Danimal Clown Entertainment LLC",
      date: "January 2026",
      content:
        "I have worked with Derek for a number of years now. His professionalism, knowledge and insight has been very helpful! He's very responsive if I have questions or concerns about my website he built for me! He did a fantastic job on my website and I would highly recommend using him if you need one built."
    },
    {
      name: "James Tomaro",
      role: "Manager at Marketing Communication Resource, Inc., Willoughby, Ohio",
      date: "April 2024",
      content:
        "I consistently recognized Derek as a dedicated, reliable, and highly capable member of our team. He was responsible for critical back-end data processes, developing and maintaining systems that handled complex client data. What stood out was his methodical approach to problem-solving and his strong technical aptitude. Even when faced with challenging technical issues, Derek approached them with a calm, analytical mindset."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar isHome={true} />

      {/* Hero Section - Dual Path */}
      <header id="home-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.3),rgba(0,0,0,0))]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200 text-sm font-semibold">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              Cleveland, Ohio web development
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Websites for small businesses that need calls, orders, and quote requests
              </span>
              <span className="block text-xl md:text-2xl mt-5 text-gray-300 font-normal">
                Built by Derek Gembus, a Cleveland web developer with live client sites, Android apps, analytics, and maintenance experience.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              I help local businesses replace weak, outdated, or missing websites with fast pages, clear contact paths, Google-ready SEO basics, and simple monthly support.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
              <Link
                to="/quote"
                state={{
                  pkg: "Performance Optimization",
                  note: "I would like a free 10-minute website checkup. My current website is: ______. The main thing I want more of is: calls / bookings / orders / quote requests."
                }}
                className="group min-w-[200px] px-8 py-4 rounded-xl border-2 border-blue-500 hover:bg-blue-500/20 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Free Website Checkup
                <span className="text-sm text-gray-400 group-hover:text-gray-300">Quick review</span>
              </Link>
              <Link
                to="/small-business-websites-cleveland"
                className="group min-w-[200px] px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                Small Business Sites
                <span className="text-sm text-purple-200 group-hover:text-white">Packages</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                View Pricing
              </Link>
              <a
                href="#client-work"
                className="px-6 py-3 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500/20 transition-all flex items-center justify-center gap-2"
              >
                See Client Work
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative">

        <section className="py-16 relative bg-gray-950" aria-labelledby="local-offers-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2
                id="local-offers-heading"
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Website help for businesses that need customers to take action
              </h2>
              <p className="text-gray-400 text-lg">
                Pick the path closest to your business. Each page shows what is included and sends the right details into the quote form.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {localWebsiteOffers.map((offer) => (
                <Link
                  key={offer.title}
                  to={offer.link}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="p-3 rounded-lg bg-blue-500/15 border border-blue-500/25 w-fit mb-4">
                      <offer.icon className="w-6 h-6 text-blue-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{offer.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-blue-300 text-sm font-semibold">
                      {offer.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Apps Section */}
        <section id="apps" className="py-20 relative" aria-labelledby="apps-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="apps-heading"
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Apps I Built
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Privacy-focused Android applications available on Google Play
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredApps.map((app, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500/60"
                >
                  <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-1 rounded-2xl bg-gradient-to-br ${app.color} shrink-0`}>
                          <img
                            src={app.logo}
                            alt={`${app.title} app icon`}
                            width="64"
                            height="64"
                            loading="lazy"
                            className="w-16 h-16 rounded-xl block"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div
                            className="w-16 h-16 rounded-xl items-center justify-center"
                            style={{ display: 'none' }}
                            aria-hidden="true"
                          >
                            <app.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                          <p className="text-gray-400">{app.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {app.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                        aria-label={`Get ${app.title} on Google Play`}
                      >
                        <img
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          alt="Get it on Google Play"
                          className="h-14"
                          loading="lazy"
                        />
                      </a>
                      <a
                        href={app.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors self-center"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Work Section */}
        <section id="client-work" className="py-20 relative bg-gray-950" aria-labelledby="client-work-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="client-work-heading"
                className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Client Work
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Websites and web applications built for businesses in Cleveland and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {clientWork.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <project.icon className="w-6 h-6 text-purple-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.type}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 text-sm">
                      <Globe className="w-4 h-4" />
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Moved Up */}
        <section id="testimonials" className="py-20 relative" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <h2
              id="testimonials-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              What Clients Say
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl relative"
                >
                  <div className="absolute top-8 right-8 text-purple-500/20" aria-hidden="true">
                    <MessageSquareQuote className="w-16 h-16" />
                  </div>
                  <div className="relative z-10">
                    <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-6">
                      "{t.content}"
                    </blockquote>
                    <div className="flex flex-col">
                      <cite className="not-italic">
                        <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block w-fit">
                          {t.name}
                        </span>
                        <p className="text-purple-400">{t.role}</p>
                      </cite>
                      <p className="text-gray-500 text-sm mt-1">{t.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 relative bg-gray-950" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                id="about-heading"
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                About Me
              </h2>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a Software Developer, Data Engineer, and Web Developer based in Cleveland, Ohio.
                  I build privacy-focused mobile apps, custom websites, and data solutions that help businesses grow.
                  With Google certifications in Data Analytics, IT Automation, and IT Support, plus Microsoft Technology Associate certifications,
                  I combine deep technical knowledge with practical problem-solving.
                  Whether it's launching an Android app on Google Play, building a restaurant website that drives online orders,
                  or engineering data pipelines for marketing insights — I deliver results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 relative" aria-labelledby="experience-heading">
          <div className="container mx-auto px-4">
            <h2
              id="experience-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/30 shadow-xl"
                >
                  <div className="relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500" aria-hidden="true"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-purple-400 text-lg">{job.company}</p>
                      </div>
                      <p className="text-gray-400 mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full text-sm">
                        {job.period}
                      </p>
                    </div>
                    <p className="text-gray-300 mb-4 italic">{job.description}</p>
                    <ul className="space-y-2">
                      {job.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-400">
                          <span className="mr-2 text-purple-500" aria-hidden="true">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 relative bg-gray-950" aria-labelledby="skills-heading">
          <div className="container mx-auto px-4">
            <h2
              id="skills-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Skills & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-gray-900 p-6 border border-purple-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-purple-500/20">
                        <skill.icon className="w-6 h-6 text-purple-400" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 relative" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h2
              id="services-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-10">
              Start with a small website, a quick fix, or monthly support. The goal is a clean path from visitor to call, order, booking, or quote request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-purple-500/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
                >
                  <div className="p-4 rounded-full bg-purple-500/20 w-fit mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-purple-400 font-bold mb-2 text-sm">{service.price}</p>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
                  <Link
                    to="/services"
                    className="mt-auto block w-full py-2 text-center rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-sm"
                  >
                    Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 relative bg-gray-950" aria-labelledby="education-heading">
          <div className="container mx-auto px-4">
            <h2
              id="education-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Education & Certifications
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all flex flex-col h-full"
                >
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-purple-500 mr-3 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                      <p className="text-purple-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <h4 className="text-lg text-gray-200 mb-2">{edu.program}</h4>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{edu.details}</p>

                  {edu.courses && (
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <div className="flex items-center mb-3">
                        <BookOpen className="w-4 h-4 text-purple-400 mr-2" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray-300">Relevant Coursework</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-md border border-gray-700 hover:border-purple-500/50 hover:text-purple-300 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section id="projects" className="py-20 relative" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4">
            <h2
              id="projects-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/30 shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="p-5 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <project.icon className="w-6 h-6 text-purple-400" aria-hidden="true" />
                      <h3 className="text-md font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/10 rounded text-xs text-purple-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mt-auto"
                      >
                        <Globe className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative bg-gray-950">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Want a quick website checkup?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Send your current website and the action you want more customers to take. I will look for the fastest fixes first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/quote"
                state={{
                  pkg: "Performance Optimization",
                  note: "I would like a free 10-minute website checkup. My current website is: ______. The main thing I want more of is: calls / bookings / orders / quote requests."
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
              >
                Request Website Checkup
              </Link>
              <a
                href="https://www.linkedin.com/in/derekgembus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white transition-all transform hover:scale-105 font-semibold"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
