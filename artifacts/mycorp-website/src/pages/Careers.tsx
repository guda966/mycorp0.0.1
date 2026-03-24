import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Bell, Briefcase, Globe2, GraduationCap, Heart, Rocket, CheckCircle2 } from "lucide-react";

const perks = [
  { icon: Globe2, title: "Remote Flexibility", desc: "Work from where you are most productive — US, India, or anywhere in between." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive global medical coverage for you and your family." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual stipend for courses, certifications, and conferences." },
  { icon: Rocket, title: "Global Mobility", desc: "Opportunities to work across our NJ and Hyderabad delivery centers." },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Careers() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

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
    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as new positions open.",
    });
  };

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative bg-[#0B1120] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={`${import.meta.env.BASE_URL}images/office-culture.png`}
            alt="Office Culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/60 to-[#0B1120]" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <Briefcase className="w-3.5 h-3.5" /> We're Hiring Soon
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Build Your Future With Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join a global team of innovators bridging the gap between talent, technology, and healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── LIFE AT MYCORP (PERKS) ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Life at MyCorp</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in fostering an environment where talent thrives — with competitive benefits and a culture of continuous learning.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 bg-slate-50 rounded-2xl border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{perk.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NO OPENINGS / STAY TUNED ── */}
      <section id="open-positions" className="py-24 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            {...fadeUp}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Icon */}
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Bell className="w-9 h-9 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              No Openings Right Now
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We don't have any active positions at the moment, but great opportunities are on the horizon.
              Drop your email and we'll notify you the moment something opens up.
            </p>

            {/* Subscribe form */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 rounded-full px-5 border-border"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 rounded-full px-7 font-semibold shrink-0"
                >
                  {loading ? "Subscribing…" : "Get Notified"}
                </Button>
              </form>
            ) : (
              <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                You're subscribed — we'll reach out when roles go live!
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-5">No spam, ever. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
