import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  Code2, Database, Terminal, Server, FileCode2, Brain, BarChart,
  Laptop, Music, Utensils, PartyPopper, Globe,
  Gamepad2, Shield, DollarSign, GraduationCap, MessageSquareQuote, BookOpen,
  Layout, Smartphone, Clock
} from 'lucide-react';
import { setPageMeta } from './utils/seo';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    setPageMeta({
      title: 'Derek Gembus | Software Engineer, Data Engineer, Web Developer & Website Designer',
      description:
        'Expert Web Developer and Website Designer offering custom software solutions, data engineering, and SEO-friendly web design services.',
      canonicalPath: '/'
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      price: "Starts at $500",
      description:
        "Custom-coded, high-performance websites. From single-page portfolios to multi-page business sites with SEO and CMS integration.",
      icon: Layout,
      features: [
        "Single Page: $500",
        "2-Page: $1,000",
        "3–5 Pages: $1,500–$2,500",
        "Custom React/Tailwind Design",
        "SEO & Mobile-First"
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
      company: "Sole Proprietorship",
      period: "Feb 2022 - Present",
      description:
        "Delivering custom digital solutions spanning full-stack web development and specialized game modification.",
      details: [
        "Web Development: Managed projects from consultation to deployment using React.js, Tailwind CSS, and WordPress.",
        "Custom Websites: Built pixel-perfect, responsive sites (e.g., Aujus-cle.com) tailored to client brands.",
        "Game Modding: Reverse-engineered game code (C#) for the Rust community to implement complex features.",
        "Advanced Debugging: Decompiled code to analyze low-level instructions and fix undocumented issues."
      ]
    },
    {
      title: "Programmer Analyst / Data Engineer",
      company: "Marketing Communication Resource, Inc",
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
      school: "Cuyahoga Community College",
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

  const projects = [
    {
      title: "Block Guard",
      description:
        "Powerful Android call & message management app with intelligent filtering and DND modes.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "Room DB"],
      icon: Shield,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.radstormtech.blockguard",
      url: "https://blockguard.app/"
    },
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
    },
    {
      title: "Sweet Chin Music Ohio",
      description:
        "Website for a popular cover band with event calendar and booking capabilities.",
      tags: ["Web Dev", "Events"],
      icon: Music,
      url: "https://www.sweetchinmusicohio.com"
    },
    {
      title: "Au Jus Cleveland",
      description:
        "Restaurant website with online ordering integration for Chicago-style Italian beef.",
      tags: ["Web Dev", "E-commerce"],
      icon: Utensils,
      url: "https://www.aujus-cle.com"
    },
    {
      title: "Danimal Clown Entertainment",
      description:
        "Custom WordPress theme and booking platform for a professional entertainer.",
      tags: ["WordPress", "PHP", "Figma"],
      icon: PartyPopper,
      url: "https://www.danimalclown.com"
    }
  ];

  const testimonials = [
    {
      name: "James Tomaro",
      role: "Manager at Marketing Communication Resource, Inc.",
      date: "April 2024",
      content:
        "I consistently recognized Derek as a dedicated, reliable, and highly capable member of our team. He was responsible for critical back-end data processes, developing and maintaining systems that handled complex client data. What stood out was his methodical approach to problem-solving and his strong technical aptitude. Even when faced with challenging technical issues, Derek approached them with a calm, analytical mindset. His commitment to ensuring data integrity and optimizing workflows was evident and greatly valued."
    },
    {
      name: "Jakob Kelly",
      role: "Owner at Au Jus LLC",
      date: "October 2024",
      content:
        "In 2022, I was launching a new restaurant in the Cleveland area and needed a high-quality, custom website. I hired Derek to design and build this critical piece of my business infrastructure. Throughout the entire project, Derek was a true professional. The website Derek delivered not only looks fantastic but also functions flawlessly under high volume. It has been a cornerstone of my business's success and has directly contributed to an increase in our revenue through online orders."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar isHome={true} />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.3),rgba(0,0,0,0))]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Derek Gembus
              </span>
              <span className="block text-3xl mt-4 text-gray-300">
                Software Developer, Data Engineer & Web Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transforming complex challenges into elegant solutions
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
              <Link
                to="/services"
                className="min-w-[220px] px-8 py-4 rounded-lg border border-purple-500 hover:bg-purple-500/20 transition-all transform hover:scale-105 font-semibold"
              >
                My Services
              </Link>
              <Link
                to="/quote"
                className="min-w-[220px] px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
              >
                Get a quote today!
              </Link>
            </div>

            <div className="flex justify-center">
              <Link
                to="/pay"
                className="min-w-[200px] px-8 py-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Make a Payment
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden" aria-labelledby="about-heading">
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
                  As a multifaceted Software Developer, Data Engineer, and Web Developer, I bring a robust skill set spanning multiple technical domains.
                  With Google specializations in Data Analytics, IT Automation, and IT Support, alongside Microsoft Technology Associate certifications,
                  I combine deep technical knowledge with practical problem-solving skills. Whether I'm building custom full-stack web solutions,
                  developing privacy-focused mobile applications, reverse-engineering game code, or engineering data pipelines for marketing insights,
                  I excel at delivering efficient, user-friendly results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative bg-black" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h2
              id="services-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Services
            </h2>
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

        {/* Skills Section */}
        <section id="skills" className="py-20 relative bg-black" aria-labelledby="skills-heading">
          <div className="container mx-auto px-4">
            <h2
              id="skills-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Experience Section */}
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

        {/* Education Section */}
        <section id="education" className="py-20 relative bg-black" aria-labelledby="education-heading">
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

        {/* Projects Section */}
        <section id="projects" className="py-20 relative" aria-labelledby="projects-heading">
          <div className="container mx-auto px-4">
            <h2
              id="projects-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-4 mb-4">
                      {project.icon && <project.icon className="w-8 h-8 text-purple-400" aria-hidden="true" />}
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                          aria-label={`View ${project.title} project`}
                        >
                          <Globe className="w-4 h-4" aria-hidden="true" />
                          <span>View Project</span>
                        </a>
                      )}

                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mt-2"
                          aria-label={`Get ${project.title} on Google Play`}
                        >
                          <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                            className="w-24 h-auto"
                            loading="lazy"
                          />
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative bg-black" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <h2
              id="testimonials-heading"
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Testimonials
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

        {/* Quote CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold"
            >
              Get a personalized quote today!
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
