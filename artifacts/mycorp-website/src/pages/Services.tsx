import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Code, Server, Target, Stethoscope, 
  CheckCircle2, ArrowRight
} from "lucide-react";
import { clsx } from "clsx";

const servicesData = [
  {
    id: "staffing",
    icon: Users,
    title: "IT Staffing & Recruitment",
    shortDesc: "End-to-end talent acquisition for technical roles.",
    description: "Finding the right IT talent is challenging. We provide end-to-end recruitment services for contract, contract-to-hire, and direct-hire positions to ensure your projects never stall due to lack of resources.",
    benefits: ["Access to pre-vetted technical talent pool", "Reduced time-to-hire by up to 40%", "Flexible scaling for project-based needs", "Thorough technical screening process"],
    specialties: ["Software Engineers", "Data Scientists", "Cloud Architects", "DevOps Engineers", "Cybersecurity Experts"]
  },
  {
    id: "solutions",
    icon: Code,
    title: "IT Solutions & Software Dev",
    shortDesc: "Custom software and digital transformation.",
    description: "Transform your business with custom software tailored to your specific needs. From legacy system modernization to native cloud applications, our engineering teams deliver scalable, secure, and robust solutions.",
    benefits: ["Agile development methodology", "Scalable cloud-native architectures", "Seamless API integrations", "Comprehensive QA and testing"],
    specialties: ["React & Node.js", "Python & Django", "AWS, Azure, GCP", "Microservices", "Mobile App Development"]
  },
  {
    id: "support",
    icon: Server,
    title: "IT Support & Managed Services",
    shortDesc: "24/7 infrastructure and network management.",
    description: "Focus on your core business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and 24/7 support to ensure high availability and security.",
    benefits: ["99.99% Guaranteed Uptime SLAs", "Proactive threat monitoring", "Predictable IT budgeting", "Rapid incident response"],
    specialties: ["24/7 Helpdesk (L1/L2/L3)", "NOC Services", "Cloud Infrastructure Mgmt", "Cybersecurity Monitoring"]
  },
  {
    id: "hiring",
    icon: Target,
    title: "IT Hiring & RPO",
    shortDesc: "Strategic recruitment process outsourcing.",
    description: "Scale your hiring capabilities instantly with our RPO solutions. We act as an extension of your internal HR team, handling everything from sourcing and screening to onboarding and employer branding.",
    benefits: ["Lower cost-per-hire", "Improved quality of candidates", "Scalable recruiting capacity", "Enhanced employer brand"],
    specialties: ["RPO (Recruitment Process Outsourcing)", "Executive Search", "ATS Implementation", "Onboarding Programs"]
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "Medical Billing & RCM",
    shortDesc: "End-to-end healthcare revenue cycle management.",
    description: "Maximize your healthcare facility's revenue with our comprehensive RCM services. We handle the complexities of coding, billing, and collections so providers can focus on patient care.",
    benefits: ["Reduced claim denial rates", "Faster AR recovery times", "Strict HIPAA compliance", "Transparent financial reporting"],
    specialties: ["ICD-10/CPT Coding", "Claims Submission", "Denial Management", "Provider Credentialing", "AR Recovery"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];
  const ActiveIcon = activeService.icon;

  return (
    <div className="w-full pb-24 bg-slate-50 min-h-screen">
      <section className="bg-[#0B1120] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-slate-300">
            Comprehensive solutions designed to solve complex business challenges through talent, technology, and industry expertise.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Vertical Tabs List */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={clsx(
                    "flex items-center text-left p-4 rounded-xl transition-all duration-200 border-2",
                    isActive 
                      ? "bg-white border-primary shadow-md" 
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-border text-muted-foreground"
                  )}
                >
                  <div className={clsx(
                    "w-10 h-10 rounded-lg flex items-center justify-center mr-4 shrink-0 transition-colors",
                    isActive ? "bg-primary text-white" : "bg-slate-200 text-slate-500"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={clsx("font-bold text-base", isActive ? "text-foreground" : "")}>
                      {service.title}
                    </div>
                    <div className="text-sm hidden md:block mt-1">
                      {service.shortDesc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden bg-white">
                  <div className="bg-primary/5 p-8 md:p-10 border-b border-primary/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary text-white rounded-xl shadow-lg">
                        <ActiveIcon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-display font-bold">{activeService.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>
                  
                  <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {activeService.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        Specialties & Tech
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activeService.specialties.map((spec, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium border border-slate-200">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  
                  <div className="p-8 bg-slate-50 border-t border-border flex justify-between items-center">
                    <p className="text-muted-foreground font-medium hidden sm:block">Ready to discuss your needs?</p>
                    <Link href="/contact">
                      <Button className="rounded-full shadow-md hover:shadow-lg w-full sm:w-auto">
                        Request Service <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
