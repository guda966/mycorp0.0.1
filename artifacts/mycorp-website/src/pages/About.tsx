import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target, Eye, Heart, Award, CheckCircle2, Users, Globe2,
  Lightbulb, ShieldCheck, Zap, Handshake, ArrowRight,
  MapPin, Calendar, TrendingUp, Star, Linkedin
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const milestones = [
  { year: "2010", title: "Founded", desc: "MyCorp Solutions was founded in New Jersey with a focused IT staffing mission.", icon: Star },
  { year: "2013", title: "India Operations", desc: "Opened our Hyderabad delivery center, enabling dual-shore capabilities.", icon: Globe2 },
  { year: "2015", title: "Healthcare Division", desc: "Launched our Medical Billing & RCM division, serving clinics across the US.", icon: Heart },
  { year: "2017", title: "Software Practice", desc: "Expanded into custom software development and enterprise application services.", icon: Lightbulb },
  { year: "2019", title: "500 Clients", desc: "Crossed 500 active clients globally across IT, healthcare, and finance sectors.", icon: Users },
  { year: "2021", title: "Managed Services", desc: "Introduced 24/7 Managed IT & NOC services with guaranteed SLA agreements.", icon: ShieldCheck },
  { year: "2023", title: "Global Reach", desc: "Expanded operations to 50+ countries with a team of 1,200+ professionals.", icon: TrendingUp },
  { year: "2024", title: "AI & Cloud", desc: "Launched AI-powered recruitment and cloud transformation consulting practice.", icon: Zap },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    color: "from-blue-500 to-blue-600",
    desc: "We operate with full transparency and ethical standards in every client engagement, contract, and delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    color: "from-amber-500 to-orange-500",
    desc: "We continuously evolve our processes, adopt emerging technologies, and challenge conventional thinking.",
  },
  {
    icon: Award,
    title: "Excellence",
    color: "from-purple-500 to-purple-600",
    desc: "We hold ourselves to the highest standards — from code quality to billing accuracy to talent matching.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    color: "from-green-500 to-emerald-600",
    desc: "We embed ourselves as true partners in our clients' growth, not just vendors fulfilling a contract.",
  },
  {
    icon: Zap,
    title: "Agility",
    color: "from-cyan-500 to-teal-500",
    desc: "We adapt swiftly to market shifts, client needs, and technological changes without missing a beat.",
  },
  {
    icon: Globe2,
    title: "Global Mindset",
    color: "from-rose-500 to-pink-500",
    desc: "Our dual-shore model brings global scale with local accountability across every timezone.",
  },
];

const leaders = [
  {
    name: "Sarah Jenkins",
    role: "Chief Executive Officer",
    bio: "20+ years in IT services. Former VP at Fortune 100 consulting firm. Drives MyCorp's global growth strategy.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    linkedin: "#",
    expertise: ["Global Strategy", "IT Services", "M&A"],
  },
  {
    name: "Rajesh Kumar",
    role: "Chief Operating Officer",
    bio: "Led delivery operations for 500+ enterprise accounts. Based in Hyderabad, oversees our India center.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    linkedin: "#",
    expertise: ["Delivery Excellence", "Offshore Operations", "RCM"],
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Ex-AWS architect. Leads our software engineering practice and AI transformation initiatives.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    linkedin: "#",
    expertise: ["Cloud Architecture", "AI/ML", "DevOps"],
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security" },
  { name: "HIPAA", desc: "Healthcare Compliance" },
  { name: "SOC 2 Type II", desc: "Security & Availability" },
  { name: "AAPC Certified", desc: "Medical Coding" },
  { name: "AWS Partner", desc: "Cloud Solutions" },
  { name: "Microsoft Gold", desc: "Technology Partner" },
];

const offices = [
  {
    city: "New Jersey",
    country: "USA 🇺🇸",
    address: "100 Enterprise Way, Suite 400, NJ 08001",
    type: "US Headquarters",
    color: "from-blue-600 to-blue-800",
    stats: ["250+ Professionals", "Client Management", "Sales & Strategy"],
  },
  {
    city: "Hyderabad",
    country: "India 🇮🇳",
    address: "Tech Park, Hitec City, Hyderabad, TS 500081",
    type: "India Delivery Center",
    color: "from-orange-500 to-red-600",
    stats: ["950+ Professionals", "24/7 Support", "Software & RCM"],
  },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-[#0B1120] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="container relative z-10 mx-auto px-4 md:px-6 py-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Our Story Since 2010
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6"
            >
              Built on Trust.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
                Driven by Results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed"
            >
              MyCorp Solutions has grown from a boutique IT staffing firm into a global force — delivering talent, technology, and healthcare solutions to enterprises across 50+ countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "15+", label: "Years in Business" },
                { value: "1,200+", label: "Global Team" },
                { value: "500+", label: "Enterprise Clients" },
                { value: "50+", label: "Countries Served" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-white font-display">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ── MISSION / VISION / VALUES CARDS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles and purpose that guide every decision at MyCorp.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target, color: "bg-primary", borderColor: "border-primary",
                title: "Our Mission",
                desc: "To deliver innovative IT and healthcare solutions that empower businesses to scale, operate efficiently, and achieve sustainable growth across every market we serve.",
              },
              {
                icon: Eye, color: "bg-accent", borderColor: "border-accent",
                title: "Our Vision",
                desc: "To be the most trusted global partner for enterprise IT staffing, custom software development, and healthcare revenue cycle management by 2030.",
              },
              {
                icon: Heart, color: "bg-rose-500", borderColor: "border-rose-500",
                title: "Our Values",
                desc: "Integrity in all dealings. Innovation in our solutions. Excellence in delivery. True Partnership with clients. Agility in execution — every single day.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className={`h-full border-t-4 ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-10 text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE MILESTONE TIMELINE ── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">15 years of milestones that shaped who we are today.</p>
          </motion.div>

          {/* Timeline Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {milestones.map((m, i) => (
              <button
                key={i}
                onClick={() => setActiveTimeline(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTimeline === i
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-muted-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Display */}
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-primary p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    {(() => { const Icon = milestones[activeTimeline].icon; return <Icon className="w-7 h-7 text-white" />; })()}
                  </div>
                  <div>
                    <div className="text-5xl font-bold font-display">{milestones[activeTimeline].year}</div>
                    <div className="text-blue-200 text-sm flex items-center gap-1 mt-1">
                      <Calendar className="w-4 h-4" />
                      Company Milestone
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{milestones[activeTimeline].title}</h3>
              </div>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">{milestones[activeTimeline].desc}</p>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setActiveTimeline(Math.max(0, activeTimeline - 1))}
                    disabled={activeTimeline === 0}
                    className="flex-1 py-2 rounded-lg border border-border text-sm font-medium disabled:opacity-30 hover:bg-slate-50 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveTimeline(Math.min(milestones.length - 1, activeTimeline + 1))}
                    disabled={activeTimeline === milestones.length - 1}
                    className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-medium disabled:opacity-30 hover:bg-primary/90 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTimeline(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeTimeline ? "w-8 bg-primary" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES GRID ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The six pillars that define our culture, guide our work, and build lasting client relationships.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group h-full border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform`}>
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE LOCATIONS ── */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Global Presence. Local Expertise.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Two strategic delivery centers built to serve clients across every timezone.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card className="border-0 overflow-hidden bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className={`bg-gradient-to-r ${office.color} p-6`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white/70 text-sm font-medium mb-1">{office.type}</p>
                        <h3 className="text-3xl font-bold text-white font-display">{office.city}</h3>
                        <p className="text-white/80 mt-1">{office.country}</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-400 text-sm mb-5 flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-500" />
                      {office.address}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {office.stats.map((s, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {s}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <p className="text-slate-400 text-lg">
              Together, our offices cover <span className="text-white font-semibold">24/7 operations</span>, serving clients in{" "}
              <span className="text-accent font-semibold">50+ countries</span> with seamless follow-the-sun delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Guided by veterans who've built, scaled, and transformed enterprise technology organizations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="group h-full border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 h-56">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <a
                      href={leader.linkedin}
                      className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{leader.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-primary/5 text-primary rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Industry-recognized standards that validate our commitment to quality, security, and compliance.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group bg-white">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <Award className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-bold text-sm text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Partner with MyCorp?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Whether you need IT talent, software, managed services, or healthcare RCM — we're your global delivery partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-10 h-13 text-base bg-white text-primary hover:bg-blue-50 shadow-xl hover:scale-105 transition-transform">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-13 text-base border-white/30 text-white hover:bg-white/10">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
