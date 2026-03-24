import { useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, Quote, ChevronDown } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const globalStats = [
  { value: "15+", label: "Years in Business" },
  { value: "1,200+", label: "Enterprise Clients" },
  { value: "5,000+", label: "Placements Made" },
  { value: "99.99%", label: "Uptime SLA" },
];

const whyUs = [
  { title: "15+ Years of Expertise", desc: "Deep domain knowledge built across thousands of enterprise engagements worldwide." },
  { title: "US & India Delivery", desc: "NJ and Hyderabad hubs give you timezone-friendly, cost-efficient dual-shore coverage." },
  { title: "ISO 27001 & HIPAA Certified", desc: "Security and compliance are built into every engagement — not bolted on afterward." },
  { title: "Dedicated Account Teams", desc: "One point of contact who knows your business as well as you do." },
];

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
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 max-w-3xl mx-auto leading-tight">
              Four Service Lines.<br />
              <span className="text-cyan-400">One Trusted Partner.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Staffing, hiring support, project delivery, and healthcare billing — everything your enterprise needs to grow, operate, and compete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section ref={statsRef} className="bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {globalStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 px-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Choose a service to explore how MyCorp can help your business.</p>
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
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className="h-full bg-white rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      {/* Gradient header */}
                      <div className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}>
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full" />
                        <div className="absolute -right-2 -bottom-8 w-20 h-20 bg-white/5 rounded-full" />
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 text-sm leading-relaxed">{service.tagline}</p>
                      </div>
                      {/* Body */}
                      <div className="p-7">
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.specialties.slice(0, 4).map((s, j) => (
                            <span key={j} className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded-full border border-slate-200">{s}</span>
                          ))}
                          {service.specialties.length > 4 && (
                            <span className="text-xs px-3 py-1 bg-slate-100 text-slate-400 rounded-full border border-slate-200">
                              +{service.specialties.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Explore Service <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL PULLQUOTE ── */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-foreground leading-snug mb-8">
              "{servicesData[2].testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img src={servicesData[2].testimonial.avatar} alt={servicesData[2].testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-border" />
              <div className="text-left">
                <p className="font-bold text-foreground">{servicesData[2].testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{servicesData[2].testimonial.role}, {servicesData[2].testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY MYCORP ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Why MyCorp Solutions?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We don't just provide services — we become an extension of your team. Our people embed in your workflows, align to your goals, and stay accountable to outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                    <h3 className="font-bold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="MyCorp team collaboration"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 border border-border">
                <p className="text-2xl font-display font-bold text-primary">1,200+</p>
                <p className="text-muted-foreground text-xs mt-0.5">Enterprise Clients Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Let's talk. We'll identify the right service mix and build a custom plan for your business — at no cost.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Schedule a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
