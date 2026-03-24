import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="w-full pb-24">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              About <span className="text-primary">MyCorp</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded in 2010, we've grown from a boutique IT staffing firm to a global leader in technology solutions and healthcare revenue cycle management.
            </p>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver innovative IT and healthcare solutions that empower businesses to scale, operate efficiently, and achieve sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted global partner for enterprise IT staffing, software solutions, and healthcare revenue cycle management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity in all dealings, Innovation in our solutions, Excellence in delivery, true Partnership with clients, and Agility in execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#0B1120] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Global Presence. Local Expertise.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                With dual-shore delivery centers in New Jersey, USA and Hyderabad, India, we offer the perfect balance of localized account management and scalable global delivery.
              </p>
              <ul className="space-y-4">
                {["24/7 Follow-the-sun support model", "Cost-optimized offshore delivery", "Local onshore consulting and strategy", "50+ countries served globally"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={`${import.meta.env.BASE_URL}images/globe-network.png`}
                alt="Global Network"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">Guided by industry veterans with decades of experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
              { name: "Rajesh Kumar", role: "Chief Operating Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" },
              { name: "Michael Chen", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" }
            ].map((leader, i) => (
              <div key={i} className="text-center group">
                {/* professional executive portrait */}
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-primary transition-colors">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
