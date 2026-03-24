import { useRef, useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, ChevronDown, Quote } from "lucide-react";
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

function FaqItem({ q, a, gradient }: { q: string; a: string; gradient: string }) {
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

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex((s) => s.slug === params.slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;
  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 2);

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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{t("detail_about")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.longDescription}</p>
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground text-sm">{benefit.title} — </span>
                      <span className="text-muted-foreground text-sm">{benefit.desc}</span>
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
            <p className="text-muted-foreground max-w-lg mx-auto">{t("detail_how_sub")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Connecting line */}
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

      {/* ── INDUSTRIES + SPECIALTIES ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">{t("detail_industries")}</h2>
              <p className="text-muted-foreground text-sm mb-6">{t("detail_industries_sub")}</p>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((ind, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white shadow-sm`}>
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">{t("detail_specialties")}</h2>
              <p className="text-muted-foreground text-sm mb-6">{t("detail_specialties_sub")}</p>
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

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">{t("detail_faq")}</h2>
            <p className="text-muted-foreground">Common questions about {service.title} at MyCorp Solutions.</p>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-3">
            {service.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} gradient={service.gradient} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
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

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{t("detail_related")}</h2>
            <p className="text-muted-foreground text-sm">{t("detail_related_sub")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
      <section className="py-16 bg-slate-50">
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

      {/* ── PREV / NEXT ── */}
      {(prevService || nextService) && (
        <section className="py-8 bg-white border-t border-border">
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
