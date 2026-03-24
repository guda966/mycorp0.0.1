import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowRight, Code, Users, Server, Stethoscope, 
  Target, Globe2, Clock, Zap, Building2, Quote, ShieldCheck,
  Award, MapPin, CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

const clientIndustries = [
  { name: "Healthcare", icon: "🏥", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
  { name: "Finance & Banking", icon: "🏦", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { name: "Retail & E-Commerce", icon: "🛍️", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
  { name: "Manufacturing", icon: "🏭", color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
  { name: "Government", icon: "🏛️", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
  { name: "Education", icon: "🎓", color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
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
  { city: "New Jersey", country: "USA 🇺🇸", address: "100 Enterprise Way, Suite 400, NJ 08001", type: "US Headquarters", color: "from-blue-600 to-blue-800", stats: ["250+ Professionals", "Client Management", "Sales & Strategy"] },
  { city: "Hyderabad", country: "India 🇮🇳", address: "Tech Park, Hitec City, Hyderabad, TS 500081", type: "India Delivery Center", color: "from-orange-500 to-red-600", stats: ["950+ Professionals", "24/7 Support", "Software & RCM"] },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

function StatCounter({ end, suffix = "", text }: { end: number, suffix?: string, text: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-300 font-medium">{text}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-24 lg:py-36">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-abstract.png`} 
            alt="Enterprise Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Your Trusted Partner in IT & Healthcare
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              Empowering Business. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">
                Enabling Growth.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            >
              We deliver innovative IT staffing, software solutions, and healthcare revenue cycle management to help global enterprises scale efficiently.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/5 text-white border-white/20 hover:bg-white/10 hover:text-white">
                  Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-primary py-16 -mt-8 relative z-20 mx-4 md:mx-12 rounded-3xl shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter end={500} suffix="+" text="Global Clients" />
            <StatCounter end={98} suffix="%" text="Client Retention" />
            <StatCounter end={15} suffix="+" text="Years Experience" />
            <StatCounter end={50} suffix="+" text="Countries Served" />
          </div>
        </div>
      </section>

      {/* CLIENTS WE SERVE */}
      <section className="py-14 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8"
          >
            Clients We Serve
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {clientIndustries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border ${ind.border} ${ind.bg} hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-20 group`}>
                  <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <p className={`text-[11px] font-semibold leading-tight ${ind.color}`}>{ind.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24 bg-slate-50 bg-grid-pattern relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Solutions for Modern Business
            </h2>
            <p className="text-muted-foreground text-lg">
              End-to-end services tailored to bridge the gap between talent and technology.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, title: "IT Staffing & Recruitment", desc: "Top-tier talent acquisition for contract and full-time technical roles." },
              { icon: Code, title: "Software Development", desc: "Custom enterprise applications, API integrations, and cloud solutions." },
              { icon: Server, title: "Managed Services", desc: "24/7 IT support, network monitoring, and infrastructure management." },
              { icon: Target, title: "IT Hiring Solutions", desc: "RPO and executive search to build your dream engineering team." },
              { icon: Stethoscope, title: "Medical Billing", desc: "End-to-end RCM, coding, and claims management for healthcare." },
              { icon: Globe2, title: "Global Consulting", desc: "Strategic IT roadmaps and digital transformation consulting." },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Why Industry Leaders Choose MyCorp
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just provide services; we build partnerships. Our dual expertise in complex IT environments and rigorous healthcare regulations makes us uniquely positioned to solve your toughest challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Agile Execution", desc: "Rapid deployment of teams and tech." },
                  { icon: Globe2, title: "Global Reach", desc: "Dual shore delivery models." },
                  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock monitoring." },
                  { icon: ShieldCheck, title: "Compliance", desc: "HIPAA & SOC2 compliant processes." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              {/* Using standard office stock image */}
              {/* Corporate business team meeting abstract */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="MyCorp Team" 
                className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Global Presence. Local Expertise.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Two strategic delivery centers working in sync, 24/7, across every timezone.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="border-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
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
                  <CardContent className="p-6 bg-white">
                    <p className="text-muted-foreground text-sm mb-5 flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                      {office.address}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {office.stats.map((s, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />{s}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link href="/about">
              <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm">
                Learn more about our offices <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Success Stories</h2>
            <p className="text-slate-400 text-lg">Don't just take our word for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "MyCorp Solutions transformed our hiring process. We filled 30 critical IT roles in under 45 days.",
                author: "VP Engineering",
                company: "Fortune 500 Healthcare"
              },
              {
                text: "Their managed services team saved us 40% in infrastructure costs while improving uptime to 99.99%.",
                author: "CTO",
                company: "FinTech Startup, USA"
              },
              {
                text: "The medical billing team recovered $2M in denied claims within the first quarter. Truly exceptional.",
                author: "CFO",
                company: "Multi-Specialty Clinic, NJ"
              }
            ].map((t, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-6 opacity-50" />
                  <p className="text-lg leading-relaxed mb-8">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-white">{t.author}</p>
                    <p className="text-sm text-slate-400">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GoogleIcon className="w-8 h-8" />
              <span className="text-2xl font-bold text-slate-800">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-6 h-6 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-2xl font-bold text-slate-800 ml-1">4.9</span>
            </div>
            <p className="text-slate-500">Based on 200+ Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rachel M.",
                avatar: "R",
                color: "#4285F4",
                rating: 5,
                date: "2 weeks ago",
                text: "MyCorp Solutions placed 3 senior engineers on our team within 2 weeks. The quality of candidates was exceptional — better than any agency we've used before. Highly recommend their IT staffing services!"
              },
              {
                name: "David K.",
                avatar: "D",
                color: "#34A853",
                rating: 5,
                date: "1 month ago",
                text: "Their managed IT services team completely transformed our infrastructure. Response times are incredible, and the 24/7 support means we never worry about downtime. Worth every penny."
              },
              {
                name: "Priya S.",
                avatar: "P",
                color: "#EA4335",
                rating: 5,
                date: "3 weeks ago",
                text: "We switched our medical billing to MyCorp Solutions and saw a 35% increase in clean claim submission rates. Their RCM team is HIPAA-compliant, knowledgeable, and responsive."
              },
              {
                name: "James T.",
                avatar: "J",
                color: "#FBBC04",
                rating: 5,
                date: "2 months ago",
                text: "Outstanding software development partner! They delivered our enterprise portal on time and within budget. Their dual-shore model gave us the best of both worlds — quality and cost efficiency."
              },
              {
                name: "Angela W.",
                avatar: "A",
                color: "#9C27B0",
                rating: 5,
                date: "1 month ago",
                text: "Worked with MyCorp for our RPO engagement. They reduced our time-to-hire by 60% and significantly improved the quality of our tech hires. True professionals across every interaction."
              },
              {
                name: "Ravi N.",
                avatar: "R",
                color: "#00BCD4",
                rating: 5,
                date: "3 months ago",
                text: "Top-tier IT consulting firm. Their team understood our business needs deeply and tailored a cloud migration strategy that saved us significant costs. A trusted long-term partner."
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                          style={{ backgroundColor: review.color }}
                        >
                          {review.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                          <p className="text-xs text-slate-400">{review.date}</p>
                        </div>
                      </div>
                      <GoogleIcon className="w-5 h-5 shrink-0 opacity-70" />
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=MyCorp+Solutions+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <GoogleIcon className="w-5 h-5" />
              View all reviews on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-10"
          >
            Certified. Compliant. Trusted.
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="flex flex-col items-center text-center p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group bg-white h-24 justify-center">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <Award className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-bold text-xs text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground text-[10px] mt-0.5 leading-tight">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to scale your operations?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how MyCorp Solutions can provide the talent and technology to drive your business forward.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-primary hover:bg-blue-50 hover:scale-105 transition-transform shadow-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
