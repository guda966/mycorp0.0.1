import { Link } from "wouter";
import { Building2, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 inline-block">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                MyCorp<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering Business. Enabling Growth. Your trusted partner in IT staffing, software delivery, and healthcare RCM — based in Hyderabad, India.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Staffing & Outsourcing", slug: "staffing-outsourcing" },
                { label: "IT Hiring Support", slug: "it-hiring" },
                { label: "IT Projects", slug: "it-projects" },
                { label: "Medical Billing & Coding", slug: "medical-billing" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Tech Park, HITEC City<br />Hyderabad, Telangana 500 081, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 (40) 6800-0199</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@mycorpsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} MyCorp Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
