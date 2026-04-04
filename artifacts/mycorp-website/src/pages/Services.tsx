import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, Star, Clock, Shield, Globe, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const globalStats = [
  { value: "5+", label: "Years in Business" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "500+", label: "Placements Made" },
  { value: "300+", label: "Team Members" },
];

const whyUs = [
  { icon: Clock, title: "48-hr Turnaround", desc: "Candidates, proposals & kick-offs in under 48 hours." },
  { icon: Globe, title: "US & India Delivery", desc: "NJ + Hyderabad hubs. Dual-shore. Cost-efficient." },
  { icon: Shield, title: "ISO 27001 · HIPAA · SOC 2", desc: "Security & compliance built in — not bolted on." },
  { icon: Users, title: "Dedicated Account Team", desc: "One contact who knows your business inside out." },
];

const modelBadge: Record<string, string> = {
  "staffing-outsourcing": "Contract · C2H · Direct Hire",
  "it-hiring": "RPO · Project · Executive Search",
  "it-projects": "Fixed Price · T&M",
  "healthcare-projects": "IT · RCM · Billing",
  "college-programs": "Projects · Workshops · Hackathons",
};

export default function Services() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative bg-[#0B1120] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-5 max-w-3xl mx-auto leading-tight">
              Five Service Lines.<br />
              <span className="text-cyan-400">One Trusted Partner.</span>
            </h1>
            {/* Pill tags instead of paragraph */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {["IT Staffing", "Recruitment Outsourcing", "Software Delivery", "Healthcare Projects", "College Programs"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section ref={statsRef} className="bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/20">
            {globalStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 px-4 text-center bg-primary"
              >
                <p className="text-3xl md:text-4xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-8 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Five service lines. One trusted partner.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 320, damping: 20 } }}
                  className="h-full"
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <motion.div
                      className="h-full bg-white rounded-2xl border border-border overflow-hidden"
                      whileHover={{
                        boxShadow: "0 24px 60px -10px rgba(0,0,0,0.18), 0 8px 24px -6px rgba(0,0,0,0.1)",
                        borderColor: "rgba(99,102,241,0.25)",
                        transition: { duration: 0.25 }
                      }}
                    >
                      {/* Gradient header */}
                      <div className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}>
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full transition-transform duration-500 group-hover:scale-125 group-hover:-translate-x-2 group-hover:translate-y-2" />
                        <div className="absolute -right-2 -bottom-8 w-20 h-20 bg-white/5 rounded-full transition-transform duration-500 group-hover:scale-150 group-hover:-translate-x-3" />
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/30" style={{ background: "rgba(255,255,255,0.2)" }}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          {/* Engagement model badge */}
                          <span className="text-[10px] font-semibold bg-white/15 border border-white/25 text-white/90 px-2.5 py-1 rounded-full shrink-0 ml-3">
                            {modelBadge[service.slug]}
                          </span>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1">{service.title}</h3>
                        <p className="text-white/75 text-sm">{service.tagline}</p>
                      </div>

                      {/* Body — bullet key deliverables, no paragraph */}
                      <div className="p-7">
                        <ul className="space-y-2.5 mb-6">
                          {service.benefits.slice(0, 3).map((b, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="font-medium text-slate-700">{b.title}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Specialty chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {service.specialties.slice(0, 3).map((s, j) => (
                            <span
                              key={j}
                              className="text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full border border-slate-200 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700"
                            >
                              {s}
                            </span>
                          ))}
                          <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full border border-slate-200">
                            +{service.specialties.length - 3} more
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                          <span className="group-hover:underline underline-offset-2 transition-all">Explore Service</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 md:py-20 bg-[#0B1120] border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-10">
          <motion.div {...fadeUp} className="text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">What Our Clients Say</h2>
          </motion.div>
        </div>
        {(() => {
          const all = servicesData.flatMap(s => s.testimonials);
          const loop = [...all, ...all];
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
        })()}
      </section>

      {/* ── WHY MYCORP ── */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Why MyCorp Solutions?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="p-5 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MyCorp team collaboration"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <p className="text-2xl font-display font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-xs mt-0.5">Enterprise Clients Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-20 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Let's talk. We'll identify the right service mix and build a custom plan — at no cost.
            </p>
            <a href="mailto:mycorpsolutionsteam@gmail.com?subject=Consultation%20Request">
              <Button size="lg" className="rounded-full px-6 md:px-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Schedule a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
