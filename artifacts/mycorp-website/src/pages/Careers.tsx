import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Bell, Briefcase, Globe2, GraduationCap, Heart, Rocket,
  CheckCircle2, Users, Star, Zap, Shield, TrendingUp,
  Coffee, Award, Quote, ArrowRight, Upload, Building2
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const stats = [
  { value: "50+", label: "Team Members" },
  { value: "4", label: "Service Verticals" },
  { value: "5+", label: "Years of Excellence" },
  { value: "Hyd", label: "Based in HITEC City" },
];

const perks = [
  { icon: Heart, title: "Health Insurance", desc: "Family floater medical cover from day one — you, your spouse, and your kids are taken care of." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual stipend for certifications, courses, and industry conferences to fuel your growth." },
  { icon: TrendingUp, title: "Performance Bonuses", desc: "Transparent, merit-based bonus structure that rewards your individual impact." },
  { icon: Globe2, title: "Flexible Hours", desc: "Core hours with flex time around them — deliver your best work, not just clock hours." },
  { icon: Coffee, title: "Culture & Events", desc: "Monthly team outings, festival celebrations, and Diwali/Holi events that make work feel like family." },
  { icon: Rocket, title: "Fast Career Growth", desc: "Flat structure with real ownership — people here move into leadership faster than anywhere else." },
  { icon: Award, title: "Certifications Supported", desc: "We sponsor AAPC, AWS, Azure, and PMP certifications and give you paid study time." },
  { icon: Shield, title: "Job Stability", desc: "We've never done layoffs. Our clients come back year after year and so does our team." },
];

const values = [
  {
    icon: Star,
    title: "Excellence in Everything",
    desc: "We don't settle for \"good enough.\" Every deliverable — a hire, a line of code, a claim submission — represents MyCorp's name.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "People Before Process",
    desc: "Our team is our product. We invest in people — their skills, their wellbeing, their careers — before we invest in anything else.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Ownership Culture",
    desc: "There are no spectators here. Everyone owns their domain and has the authority — and the expectation — to lead it.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Relentless Learning",
    desc: "The IT world evolves daily. So do we. Curiosity and continuous improvement are not optional — they're who we are.",
    color: "from-emerald-500 to-teal-600",
  },
];

const testimonials = [
  {
    quote: "MyCorp gave me my first big break in IT recruitment. Within 18 months I was leading a team of 6. The growth here is real — they back their words with actions.",
    name: "Preethi Reddy",
    role: "Senior Recruitment Lead",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    since: "With MyCorp since 2022",
  },
  {
    quote: "The projects are real, complex, and challenging. I've learned more in 2 years at MyCorp than I did in 4 years at my previous company. The team culture is phenomenal.",
    name: "Kiran Rao",
    role: "Full-Stack Developer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100",
    since: "With MyCorp since 2021",
  },
  {
    quote: "I joined as a billing analyst and now lead the RCM team for three of our largest US healthcare clients. Nowhere else gives you that kind of trust and career runway.",
    name: "Swathi Nair",
    role: "Medical Billing Team Lead",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100&h=100",
    since: "With MyCorp since 2020",
  },
];

const lookingFor = [
  "Problem-solvers who ask \"why\" before they ask \"how\"",
  "Team players who lift those around them up",
  "People who take genuine ownership of their work",
  "Curious minds who are never done learning",
  "Communicators who are direct, honest, and kind",
];

export default function Careers() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appRole, setAppRole] = useState("");
  const [appMessage, setAppMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubscribed(true);
    toast({ title: "You're on the list!", description: "We'll notify you the moment a new role opens up." });
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName || !appEmail || !appRole) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setAppLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setAppLoading(false);
    toast({ title: "Application received!", description: "We'll review your profile and reach out if there's a fit." });
    setAppName(""); setAppEmail(""); setAppRole(""); setAppMessage("");
  };

  return (
    <div className="w-full">

      {/* ── HERO ── */}
      <section className="relative bg-[#0B1120] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
                <Briefcase className="w-3 h-3" /> Careers at MyCorp
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Do the Best Work<br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">of Your Life.</span>
            </motion.h1>

            {/* Motivational quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="border-l-4 border-violet-400 pl-5 mb-8"
            >
              <p className="text-lg text-white/70 italic leading-relaxed">
                "Choose a job you love, and you will never have to work a day in your life."
              </p>
              <p className="text-violet-400/80 text-sm font-semibold mt-2 not-italic">— Confucius</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-slate-300 text-lg max-w-xl leading-relaxed"
            >
              Join our Hyderabad team and help build the future of IT staffing, software delivery, and healthcare revenue cycle management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a href="#open-positions">
                <Button size="lg" className="rounded-full px-8 shadow-lg">
                  View Openings <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#apply">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white bg-white/5 hover:bg-white/10">
                  Submit Your CV
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 px-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT MYCORP — PERKS ── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">Why Work Here</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Life at MyCorp</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              We've built a workplace where great people want to do their best work — and stay for years.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk, i) => {
              const PIcon = perk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <PIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{perk.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">What We Believe</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Values aren't words on a poster here — they're how we hire, promote, and make every decision.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const VIcon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative rounded-2xl border border-border p-6 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${val.color}`} />
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-5 shadow-md`}>
                    <VIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM TESTIMONIALS ── */}
      <section className="py-20 bg-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">Our Team Speaks</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Why Our Team Loves It Here</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-7 hover:bg-white/12 transition-colors duration-300"
              >
                <Quote className="w-6 h-6 text-violet-400/40 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20" />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                    <p className="text-violet-400/70 text-xs mt-0.5">{t.since}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE LOOK FOR ── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">The Right Fit</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">What We Look For</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                We hire for character and grow skill. If these traits resonate with you, there's a good chance you'll thrive here.
              </p>
              <ul className="space-y-4">
                {lookingFor.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} className="bg-gradient-to-br from-[#0B1120] to-[#1a2540] rounded-2xl p-8 text-white">
              <Building2 className="w-8 h-8 text-cyan-400 mb-5" />
              <h3 className="text-xl font-display font-bold mb-3">Based in Hyderabad</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Our office is located in the heart of HITEC City — India's premier technology hub — surrounded by the best talent, cafes, and infrastructure in Telangana.
              </p>
              <div className="space-y-2.5">
                {["Walk to metro & major bus routes", "On-site cafeteria & snack station", "Open seating & collaboration zones", "High-speed internet & dev workstations"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── NO OPENINGS / STAY TUNED ── */}
      <section id="open-positions" className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">No Openings Right Now</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We're not actively hiring at this moment, but great opportunities are always on the horizon.
              Drop your email and we'll reach out the moment a role that matches your profile goes live.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="yourname@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-full px-5 border-border"
                  required
                />
                <Button type="submit" disabled={loading} className="h-12 rounded-full px-7 font-semibold shrink-0">
                  {loading ? "Subscribing…" : "Notify Me"}
                </Button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                You're on the list — we'll reach out when a role opens up!
              </div>
            )}
            <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe any time.</p>
          </motion.div>
        </div>
      </section>

      {/* ── SPECULATIVE APPLICATION ── */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              <Upload className="w-3 h-3" /> Submit Your CV
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Can't Wait for a Job Post?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              If you're exceptional at what you do, we want to hear from you — even when we're not actively hiring. Send us your profile and we'll keep you in mind.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <form onSubmit={handleApply} className="space-y-5 bg-slate-50 rounded-2xl border border-border p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input placeholder="Rahul Sharma" value={appName} onChange={(e) => setAppName(e.target.value)} className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input type="email" placeholder="rahul@email.com" value={appEmail} onChange={(e) => setAppEmail(e.target.value)} className="bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Role / Domain of Interest *</Label>
                <Input placeholder="e.g. IT Recruiter, Full-Stack Developer, Medical Coder…" value={appRole} onChange={(e) => setAppRole(e.target.value)} className="bg-white" />
              </div>
              <div className="space-y-2">
                <Label>Tell us about yourself</Label>
                <Textarea
                  placeholder="Brief intro — experience, skills, what you're looking for, and why MyCorp interests you…"
                  className="min-h-[120px] bg-white"
                  value={appMessage}
                  onChange={(e) => setAppMessage(e.target.value)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                You can also email your CV directly to <span className="text-primary font-medium">careers@mycorpsolutions.com</span>
              </p>
              <Button type="submit" size="lg" disabled={appLoading} className="w-full rounded-full shadow-md">
                {appLoading ? "Submitting…" : "Submit My Profile"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
