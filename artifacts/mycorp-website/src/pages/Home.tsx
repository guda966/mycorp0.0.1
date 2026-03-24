import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowRight, Code, Users, Server, Stethoscope, 
  Target, Globe2, Clock, Zap, Building2, Quote, ShieldCheck
} from "lucide-react";
import { useState, useEffect } from "react";

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
