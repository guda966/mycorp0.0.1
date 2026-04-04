import { useRef, useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, ChevronDown, Star, Building2 } from "lucide-react";
import NotFound from "@/pages/not-found";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

function AnimatedStat({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("—");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) { setDisplay(value); return; }
    const prefix = value.match(/^\D*/)?.[0] ?? "";
    const suffix = value.match(/\D+$/)?.[0] ?? "";
    const duration = 1500;
    const steps = 50;
    let step = 0;
    setDisplay(`${prefix}0${suffix}`);
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      const current = numeric * eased;
      const formatted = Number.isInteger(numeric) ? Math.round(current) : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (step >= steps) { setDisplay(value); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="py-10 px-6 text-center bg-white">
      <p className={`text-4xl md:text-5xl font-display font-bold tabular-nums bg-gradient-to-r ${gradient} bg-clip-text`}
        style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "#3b82f6" }}>
        {display}
      </p>
      <p className="text-muted-foreground text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4 bg-slate-50/50">
          {a}
        </div>
      )}
    </div>
  );
}

function TestimonialCards({ testimonials }: { testimonials: typeof servicesData[0]["testimonials"] }) {
  const loop = [...testimonials, ...testimonials, ...testimonials];
  return (
    <div className="relative w-full overflow-hidden pause-on-hover">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-5 animate-marquee w-max py-4">
        {loop.map((t, i) => (
          <div key={i} className="shrink-0 w-80 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm truncate">{t.name}</p>
                <p className="text-slate-400 text-xs truncate">{t.role} · {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex((s) => s.slug === params.slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug);

  // Duplicate items for seamless marquee loops
  const industriesLoop = [...service.industries, ...service.industries, ...service.industries, ...service.industries];
  const clientsLoop = [...service.clients, ...service.clients, ...service.clients];

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-14 pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{service.title}</span>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-6xl font-display font-bold text-white mb-4 max-w-3xl leading-tight">{service.title}</h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ── ANIMATED STATS ── */}
      <section className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`grid grid-cols-2 gap-px bg-border ${service.stats.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}>
            {service.stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} gradient={service.gradient} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + IMAGE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About This Service</h2>
              <div className="space-y-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-slate-50 hover:border-primary/30 hover:bg-white transition-all duration-200">
                    <div className={`mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm leading-snug">{benefit.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
            <motion.div {...fadeUp} className="relative mt-8 lg:mt-0">
              <img
                src={service.secondaryImage}
                alt={`${service.title} at MyCorp`}
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className={`absolute bottom-4 right-4 bg-gradient-to-br ${service.gradient} rounded-xl p-4 shadow-lg`}>
                <p className="text-white font-display font-bold text-xl">{service.stats[0].value}</p>
                <p className="text-white/80 text-xs mt-0.5">{service.stats[0].label}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMPEXUS PROGRAMS GRID (college-programs only) ── */}
      {service.slug === "college-programs" && (
        <section className="py-20 bg-white border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Programs &amp; Initiatives</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">From final year project mentoring to campus hackathons — MyCorp delivers a complete spectrum of college programs that build real skills and career readiness.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  tag: "Final Year Projects", color: "from-indigo-500 to-violet-700",
                  title: "Project Mentoring",
                  items: ["Topic selection & tech stack guidance", "End-to-end development support", "IEEE paper & synopsis writing", "Viva & presentation preparation"],
                },
                {
                  tag: "Workshops", color: "from-blue-500 to-blue-700",
                  title: "Technical Workshops",
                  items: ["Full Stack Web Development", "AI/ML & Data Science", "Cloud Computing & DevOps", "Cybersecurity & Ethical Hacking"],
                },
                {
                  tag: "Bootcamps", color: "from-violet-500 to-purple-700",
                  title: "Intensive Bootcamps",
                  items: ["Multi-day hands-on coding bootcamps", "Industry-standard tools & workflows", "Real project builds from day one", "Mobile, Web & Emerging Tech tracks"],
                },
                {
                  tag: "Hackathons", color: "from-amber-500 to-orange-600",
                  title: "Campus Hackathons",
                  items: ["End-to-end hackathon organisation", "Real-world problem statements", "Working prototype development", "Mentorship & industry judging"],
                },
                {
                  tag: "Placement Prep", color: "from-teal-500 to-cyan-600",
                  title: "Career Readiness",
                  items: ["Aptitude & logical reasoning", "Competitive coding & DSA", "Mock technical interviews & GD", "Resume building & LinkedIn coaching"],
                },
                {
                  tag: "Industry Connect", color: "from-rose-500 to-pink-600",
                  title: "Industry Exposure",
                  items: ["Guest lectures by working engineers", "Live project demos & case studies", "Soft skills & professional etiquette", "Corporate hiring drives for graduates"],
                },
              ].map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6"
                >
                  <span className={`inline-block px-2.5 py-1 rounded-full text-white text-[10px] font-bold tracking-wide uppercase bg-gradient-to-r ${prog.color} mb-4`}>{prog.tag}</span>
                  <h3 className="font-bold text-foreground text-base mb-3">{prog.title}</h3>
                  <ul className="space-y-2">
                    {prog.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${prog.color} flex items-center justify-center shrink-0`}>
                          <CheckCircle2 className="w-2 h-2 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW WE WORK ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              {service.slug === "college-programs" ? "How We Engage with Your College" : "How We Work"}
            </h2>
            {service.slug === "college-programs" && (
              <p className="text-muted-foreground text-sm max-w-xl mx-auto">From the first conversation to post-program outcomes — here's how a typical college engagement runs.</p>
            )}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border z-0" />
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-10"
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 text-white font-display font-bold text-sm shadow-md`}>
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE — scrolling marquee strip ── */}
      <section className="py-14 bg-[#0B1120] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">Industries We Serve</h2>
            <p className="text-slate-300 text-sm">Sectors we've served across the US and India</p>
          </motion.div>
        </div>
        {/* Top row — left */}
        <div className="relative w-full overflow-hidden pause-on-hover mb-3">
          <div className="flex gap-4 animate-marquee w-max">
            {industriesLoop.map((ind, i) => (
              <span key={i} className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white shadow-md border border-white/10 shrink-0`}>
                {ind}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom row — reverse (offset) */}
        <div className="relative w-full overflow-hidden pause-on-hover">
          <div className="flex gap-4 animate-marquee-reverse w-max">
            {[...industriesLoop].reverse().map((ind, i) => (
              <span key={i} className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 text-white/80 border border-white/15 shrink-0">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">Specialties & Expertise</h2>
            <p className="text-muted-foreground text-sm">What we deliver within this service</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {service.specialties.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-border bg-slate-50 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                  <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-slate-700 font-medium text-sm">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS — scrolling marquee ── */}
      <section className="py-14 bg-slate-50 border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <motion.div {...fadeUp} className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-display font-bold">Trusted by Leading Organizations</h2>
          </motion.div>
        </div>
        {/* Single scrolling row of client name chips */}
        <div className="relative w-full overflow-hidden pause-on-hover">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee w-max">
            {clientsLoop.map((client, i) => {
              const domainMap: Record<string, string> = {
                "Wipro": "wipro.com", "Infosys": "infosys.com", "TCS": "tcs.com",
                "HCL Technologies": "hcltech.com", "Tech Mahindra": "techmahindra.com",
                "Cognizant": "cognizant.com", "Mphasis": "mphasis.com", "LTIMindtree": "ltimindtree.com",
                "Accenture": "accenture.com", "Capgemini": "capgemini.com", "IBM India": "ibm.com",
                "Oracle India": "oracle.com", "Hexaware": "hexaware.com", "Persistent Systems": "persistent.com",
                "Flipkart": "flipkart.com", "Myntra": "myntra.com", "Swiggy": "swiggy.com",
                "Zomato": "zomato.com", "Ola": "olacabs.com", "Paytm": "paytm.com",
                "PhonePe": "phonepe.com", "HDFC Bank": "hdfcbank.com", "ICICI Bank": "icicibank.com",
                "Axis Bank": "axisbank.com", "Bajaj Finserv": "bajajfinserv.in", "Reliance Jio": "jio.com",
                "Apollo Hospitals": "apollohospitals.com", "Max Healthcare": "maxhealthcare.in",
                "Fortis Healthcare": "fortishealthcare.com", "Manipal Hospitals": "manipalhospitals.com",
                "Narayana Health": "narayanahealth.org", "Aster DM Healthcare": "asterhospitals.in",
                "KIMS Hospitals": "kimshospitals.com", "Yashoda Hospitals": "yashodahospitals.com",
                "NIIT Technologies": "niit.com", "Mastech": "mastech.com",
              };
              const domain = domainMap[client];
              return (
                <div key={i} className="flex items-center gap-2.5 shrink-0 bg-white border border-border rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200">
                  {domain ? (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                      alt={client}
                      className="w-5 h-5 object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`} />
                  )}
                  <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{client}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — dark rotating carousel ── */}
      <section className="py-20 bg-[#0B1120] relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        {/* Gradient orbs */}
        <div className={`absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${service.gradient}`} />
        <div className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 bg-gradient-to-br ${service.gradient}`} />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">
              Client Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">What Our Clients Say</h2>
          </motion.div>
          <TestimonialCards testimonials={service.testimonials} />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Explore Other Services</h2>
            <p className="text-muted-foreground text-sm">See how MyCorp can help across more areas of your business.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {relatedServices.map((rel, i) => {
              const RelIcon = rel.icon;
              return (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <Link href={`/services/${rel.slug}`} className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-slate-50 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rel.gradient} flex items-center justify-center shrink-0`}>
                      <RelIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">{rel.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5 line-clamp-1">{rel.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to get started?</h2>
            <p className="text-muted-foreground mb-7 max-w-lg mx-auto">
              Talk to our team — we'll build a plan that fits your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request">
                <Button size="lg" className="rounded-full px-8 shadow-md">
                  Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ — end of page ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {service.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PREV / NEXT ── */}
      {(prevService || nextService) && (
        <section className="py-8 bg-slate-50 border-t border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center gap-4">
              {prevService ? (
                <Link href={`/services/${prevService.slug}`} className="group flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs text-muted-foreground mb-0.5">Previous</p>
                    <p className="font-semibold text-sm">{prevService.title}</p>
                  </div>
                </Link>
              ) : <div />}

              <Link href="/services">
                <Button variant="outline" className="rounded-full px-5 text-sm">All Services</Button>
              </Link>

              {nextService ? (
                <Link href={`/services/${nextService.slug}`} className="group flex items-center gap-3 text-right hover:text-primary transition-colors">
                  <div className="hidden sm:block">
                    <p className="text-xs text-muted-foreground mb-0.5">Next</p>
                    <p className="font-semibold text-sm">{nextService.title}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
