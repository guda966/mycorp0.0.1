import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { MycorpLogo } from "@/components/ui/MycorpLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white pt-12 md:pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex">
              <MycorpLogo />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Your trusted partner in IT staffing, software delivery, healthcare RCM, and campus programs — headquartered in Hyderabad, India.
            </p>
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
                { label: "Healthcare Projects", slug: "healthcare-projects" },
                { label: "College Programs", slug: "college-programs" },
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
                <span>Mallareddy Heights, Srinivasa Nagar W Colony<br />Madhura Nagar, Hyderabad, Telangana 500 038, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 99886 61244</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:mycorpsolutionsteam@gmail.com" className="hover:text-primary transition-colors">mycorpsolutionsteam@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} MyCorp Solutions. All rights reserved.
          </p>
        </div>
        <div className="pt-4 text-center">
          <p className="text-slate-600 text-xs">
            Developed with ❤️ and maintained by{" "}
            <a href="https://www.leoaxis.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors underline underline-offset-2">
              Leoaxis Technologies Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
