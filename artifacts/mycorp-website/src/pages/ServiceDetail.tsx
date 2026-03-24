import { useRef, useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, ChevronDown, Quote, ChevronLeft, Building2 } from "lucide-react";
import NotFound from "@/pages/not-found";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <div ref={ref} className="py-10 px-6 text-center">
      <p className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent tabular-nums`}>
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

function TestimonialCarousel({ testimonials, gradient }: { testimonials: typeof servicesData[0]["testimonials"]; gradient: string }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const cur = testimonials[idx];

  return (
    <div className="relative">
      {/* Card */}
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: dir * 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -dir * 40 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
      >
        <Quote className="w-8 h-8 text-white/25 mb-5" />
        <blockquote className="text-xl md:text-2xl font-display font-medium text-white leading-snug mb-8">
          "{cur.quote}"
        </blockquote>
        <div className="flex items-center gap-4">
          <img src={cur.avatar} alt={cur.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30" />
          <div>
            <p className="font-bold text-white">{cur.name}</p>
            <p className="text-white/60 text-sm">{cur.role}, {cur.company}</p>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => go((idx - 1 + testimonials.length) % testimonials.length)}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`transition-all duration-300 rounded-full ${i === idx ? "w-7 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
        <button
          onClick={() => go((idx + 1) % testimonials.length)}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();
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
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 max-w-3xl leading-tight">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">{service.tagline}</p>
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

      {/* ── OVERVIEW + IMAGE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t("detail_about")}</h2>
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
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img
                src={service.secondaryImage}
                alt={`${service.title} at MyCorp`}
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className={`absolute -bottom-5 -right-5 bg-gradient-to-br ${service.gradient} rounded-xl p-5 shadow-lg`}>
                <p className="text-white font-display font-bold text-2xl">{service.stats[0].value}</p>
                <p className="text-white/80 text-xs mt-0.5">{service.stats[0].label}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">{t("detail_how_we_work")}</h2>
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
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{t("detail_industries")}</h2>
            <p className="text-slate-400 text-sm">Sectors we've served across the US and India</p>
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-1">{t("detail_specialties")}</h2>
            <p className="text-muted-foreground text-sm">What we deliver within this service</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {service.specialties.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-2.5 p-3.5 rounded-xl border border-border bg-slate-50 hover:border-primary/30 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
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
            {clientsLoop.map((client, i) => (
              <div key={i} className="flex items-center gap-2.5 shrink-0 bg-white border border-border rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`} />
                <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">{client}</span>
              </div>
            ))}
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
          <TestimonialCarousel testimonials={service.testimonials} gradient={service.gradient} />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{t("detail_related")}</h2>
            <p className="text-muted-foreground text-sm">{t("detail_related_sub")}</p>
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
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">{t("detail_cta_title")}</h2>
            <p className="text-muted-foreground mb-7 max-w-lg mx-auto">
              {t("detail_cta_body")}
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

      {/* ── FAQ — end of page ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">{t("detail_faq")}</h2>
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
                    <p className="text-xs text-muted-foreground mb-0.5">{t("detail_prev")}</p>
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
                    <p className="text-xs text-muted-foreground mb-0.5">{t("detail_next")}</p>
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
