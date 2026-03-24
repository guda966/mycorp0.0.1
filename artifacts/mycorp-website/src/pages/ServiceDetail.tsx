import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import NotFound from "@/pages/not-found";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

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
      <section className="relative min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-85`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 pb-14 pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white">{service.title}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 max-w-3xl">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 divide-x divide-border">
            {service.stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p className={`text-3xl md:text-4xl font-display font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.longDescription}</p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="grid grid-cols-1 gap-4">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-border hover:border-primary/20 hover:shadow-md transition-all bg-slate-50"
                >
                  <div className={`mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
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
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A structured, transparent process designed to deliver results from day one.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`text-5xl font-display font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent mb-4 leading-none`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Specialties & Technologies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Areas where our teams bring deep, practitioner-level expertise.</p>
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {service.specialties.map((spec, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-border bg-slate-50 text-slate-700 text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
              >
                {spec}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className={`py-20 bg-gradient-to-r ${service.gradient}`}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Talk to our team and find out how {service.title} can drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold shadow-lg">
                  Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold border-white/40 text-white hover:bg-white/10">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <section className="py-12 bg-slate-50 border-t border-border">
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
              <Button variant="outline" className="rounded-full">All Services</Button>
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
