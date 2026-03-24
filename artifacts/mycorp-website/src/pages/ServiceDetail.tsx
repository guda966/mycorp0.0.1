import { useRef, useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Quote } from "lucide-react";
import NotFound from "@/pages/not-found";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

function AnimatedStat({ value, label, gradient }: { value: string; label: string; gradient: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) { setDisplay(value); return; }
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
    const suffix = value.match(/[^0-9.]+$/)?.[0] ?? "";
    const duration = 1400;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(`${prefix}${Number.isInteger(numeric) ? Math.round(current) : current.toFixed(1)}${suffix}`);
      if (step >= steps) { setDisplay(value); clearInterval(timer); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="py-8 px-6 text-center">
      <p className={`text-3xl md:text-4xl font-display font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent tabular-nums`}>{display}</p>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
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

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-85`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-12 pt-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-5">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{service.title}</span>
            </div>
            <div className="w-13 h-13 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 mb-4 w-14 h-14">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3 max-w-3xl">{service.title}</h1>
            <p className="text-lg text-white/80 max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ── ANIMATED STATS ── */}
      <section className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 divide-x divide-border">
            {service.stats.map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} gradient={service.gradient} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + BENEFITS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.longDescription}</p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all bg-slate-50"
                >
                  <div className={`mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm mb-0.5">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">How We Work</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">A clear, repeatable process that delivers from day one.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative bg-white rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`text-4xl font-display font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent mb-3 leading-none`}>
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES + SPECIALTIES ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Industries */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Industries We Serve</h2>
              <p className="text-muted-foreground mb-6 text-sm">We bring proven experience across a wide range of sectors.</p>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((ind, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white shadow-sm`}>
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
            {/* Specialties */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Specialties & Expertise</h2>
              <p className="text-muted-foreground mb-6 text-sm">Deep practitioner-level skills across every engagement.</p>
              <div className="grid grid-cols-2 gap-2.5">
                {service.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg border border-border bg-slate-50 text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIAL ── */}
      <section className={`py-20 bg-gradient-to-br ${service.gradient}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div {...fadeUp}>
            <Quote className="w-10 h-10 text-white/30 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-display font-medium text-white leading-snug mb-8">
              "{service.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src={service.testimonial.avatar}
                alt={service.testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/40"
              />
              <div className="text-left">
                <p className="font-bold text-white">{service.testimonial.name}</p>
                <p className="text-white/70 text-sm">{service.testimonial.role}, {service.testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to get started with {service.title}?</h2>
            <p className="text-muted-foreground mb-7 max-w-lg mx-auto">
              Talk to our team and find out how we can drive measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 shadow-md">
                  Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PREV / NEXT ── */}
      <section className="py-10 bg-slate-50 border-t border-border">
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
              <Button variant="outline" className="rounded-full px-6">All Services</Button>
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
    </div>
  );
}
