import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, MessageSquare, Clock, Star, Shield, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "919988661244";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to learn more about MyCorp Solutions services.");

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company name required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const reasons = [
  {
    icon: Zap,
    title: "Response Within 24 Hours",
    desc: "Every inquiry gets a personal response from our team — not an automated reply — within one business day.",
  },
  {
    icon: Star,
    title: "No Commitment Required",
    desc: "Our first consultation is completely free. We assess your needs, propose a solution, and let the results speak.",
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    desc: "All details you share are treated with strict confidentiality. We sign NDAs on request before any discussion.",
  },
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((res) => setTimeout(res, 1000));
    toast({ title: "Message Sent!", description: "Our team will get back to you within 24 hours." });
    form.reset();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">

      {/* ── HERO WITH MOTIVATIONAL QUOTE ── */}
      <div className="relative bg-[#0B1120] overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div {...fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs font-semibold tracking-widest uppercase">
                <MessageSquare className="w-3 h-3" /> Get in Touch
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Every Great Partnership<br className="hidden md:block" />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Starts Here.</span>
            </motion.h1>

            {/* Motivational quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="border-l-4 border-cyan-400 pl-5 mb-8"
            >
              <p className="text-lg md:text-xl text-white/75 italic leading-relaxed">
                "Coming together is a beginning, staying together is progress,<br className="hidden md:block" />
                and working together is success."
              </p>
              <p className="text-cyan-400/80 text-sm font-semibold mt-2 not-italic">— Henry Ford</p>
            </motion.div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-300 text-base max-w-xl leading-relaxed"
            >
              Whether you need top IT talent, a world-class software delivery team, or healthcare revenue cycle expertise —
              our Hyderabad team is ready to build something great with you.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── WHY REACH OUT ── */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const RIcon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <RIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-1">{r.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-display leading-tight">Send us a message</h2>
                    <p className="text-muted-foreground text-sm">We'll respond within one business day.</p>
                  </div>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input placeholder="Rahul Sharma" {...form.register("name")} className="bg-slate-50" />
                      {form.formState.errors.name && <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Work Email *</Label>
                      <Input type="email" placeholder="rahul@company.com" {...form.register("email")} className="bg-slate-50" />
                      {form.formState.errors.email && <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Company Name *</Label>
                      <Input placeholder="Your Company Pvt. Ltd." {...form.register("company")} className="bg-slate-50" />
                      {form.formState.errors.company && <p className="text-destructive text-xs">{form.formState.errors.company.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input placeholder="+91 98765 43210" {...form.register("phone")} className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Service of Interest *</Label>
                    <Select onValueChange={(val) => form.setValue("service", val)}>
                      <SelectTrigger className="bg-slate-50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="staffing">Staffing & Outsourcing</SelectItem>
                        <SelectItem value="hiring">IT Hiring Support</SelectItem>
                        <SelectItem value="projects">IT Projects</SelectItem>
                        <SelectItem value="medical">Medical Billing & Coding</SelectItem>
                        <SelectItem value="other">Other / General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.service && <p className="text-destructive text-xs">{form.formState.errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea
                      placeholder="Tell us about your requirements — the more detail, the better we can prepare for your call..."
                      className="min-h-[150px] bg-slate-50"
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-10 rounded-full shadow-md" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">

            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-[#0B1120] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" /> Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold mb-0.5 text-sm">Headquarters</p>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        MyCorp Solutions Pvt. Ltd.<br />
                        Tech Park, HITEC City<br />
                        Hyderabad, Telangana — 500 081<br />
                        <span className="text-slate-400 text-xs">India</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold mb-0.5 text-sm">Phone</p>
                      <p className="text-slate-300 text-sm">+91 99886 61244</p>
                      <p className="text-slate-400 text-xs">Mon – Sat, 9 AM – 7 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold mb-0.5 text-sm">Email</p>
                      <p className="text-slate-300 text-sm">contact@mycorpsolutions.com</p>
                      <p className="text-slate-400 text-xs">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-bold mb-0.5 text-sm">Business Hours</p>
                      <p className="text-slate-300 text-sm">Monday – Saturday</p>
                      <p className="text-slate-400 text-xs">9:00 AM – 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-foreground mb-3">Prefer to chat directly?</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-xs text-muted-foreground mt-2 text-center">Usually responds within minutes during business hours</p>
              </CardContent>
            </Card>

            {/* Mini inspiration card */}
            <Card className="border-0 shadow-md bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardContent className="p-6">
                <p className="text-base font-display font-semibold leading-snug mb-3 italic">
                  "Your success is our purpose — not just our promise."
                </p>
                <p className="text-blue-200 text-xs font-semibold">— MyCorp Solutions Team, Hyderabad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ── HYDERABAD MAP ── */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold font-display text-foreground mb-1">Visit Us in Hyderabad</h2>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Tech Park, HITEC City, Hyderabad, Telangana 500 081, India
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
          <div className="bg-[#0B1120] text-white px-5 py-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold text-sm">MyCorp Solutions — HITEC City, Hyderabad</span>
          </div>
          <iframe
            title="MyCorp Solutions Hyderabad Office"
            src="https://maps.google.com/maps?q=Hitec+City,+Hyderabad,+Telangana,+India&output=embed&z=14"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}
