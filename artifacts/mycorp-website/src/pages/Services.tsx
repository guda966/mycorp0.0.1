import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const whyUs = [
  { title: "15+ Years of Expertise", desc: "Deep domain knowledge built across thousands of enterprise engagements." },
  { title: "US & India Delivery", desc: "NJ and Hyderabad hubs give you timezone-friendly, cost-efficient coverage." },
  { title: "ISO 27001 & HIPAA Certified", desc: "Security and compliance are foundational — not afterthoughts." },
  { title: "Dedicated Account Teams", desc: "A single point of contact who knows your business as well as you do." },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative bg-[#0B1120] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Enterprise Services Built for <span className="text-cyan-400">Real Results</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions that solve complex business challenges through talent, technology, and deep industry expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS GRID ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Five practice areas — one trusted partner.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className="h-full bg-white rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      {/* Card Header */}
                      <div className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}>
                        <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full" />
                        <div className="absolute -right-2 -bottom-8 w-20 h-20 bg-white/5 rounded-full" />
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5 border border-white/30">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/75 text-sm leading-relaxed">{service.tagline}</p>
                      </div>

                      {/* Card Body */}
                      <div className="p-7">
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                        <ul className="space-y-2 mb-7">
                          {service.benefits.slice(0, 3).map((b, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              {b.title}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Learn More <ArrowRight className="w-4 h-4" />
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

      {/* ── WHY MYCORP ── */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why MyCorp Solutions?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We're not a vendor — we're a growth partner. Our teams embed in your workflows, align with your goals, and stay accountable to outcomes, not just deliverables.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border">
                <p className="text-3xl font-display font-bold text-primary">1,200+</p>
                <p className="text-muted-foreground text-sm mt-1">Enterprise Clients Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Talk to our team — we'll identify the right service mix and build a custom roadmap for your business.
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
