import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "18005550199";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to learn more about MyCorp Solutions services.");

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

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company name required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", phone: "", service: "", message: "" }
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Our team will get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-[#0B1120] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Whether you're looking for IT talent, custom software, or healthcare RCM services, our global team is ready to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0">
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">Send us a message</h2>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input placeholder="John Smith" {...form.register("name")} className="bg-slate-50" />
                      {form.formState.errors.name && <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Work Email *</Label>
                      <Input type="email" placeholder="john@company.com" {...form.register("email")} className="bg-slate-50" />
                      {form.formState.errors.email && <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Company Name *</Label>
                      <Input placeholder="Acme Corp" {...form.register("company")} className="bg-slate-50" />
                      {form.formState.errors.company && <p className="text-destructive text-xs">{form.formState.errors.company.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <Input placeholder="+1 (555) 000-0000" {...form.register("phone")} className="bg-slate-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Service of Interest *</Label>
                    <Select onValueChange={(val) => form.setValue("service", val)}>
                      <SelectTrigger className="bg-slate-50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="staffing">IT Staffing & Recruitment</SelectItem>
                        <SelectItem value="software">Software Development</SelectItem>
                        <SelectItem value="managed">Managed IT Services</SelectItem>
                        <SelectItem value="medical">Medical Billing & RCM</SelectItem>
                        <SelectItem value="other">Other / General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.service && <p className="text-destructive text-xs">{form.formState.errors.service.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      className="min-h-[150px] bg-slate-50"
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto px-10" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-md bg-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold mb-1">US Headquarters</p>
                      <p className="text-blue-100 text-sm">100 Enterprise Way, Suite 400<br/>New Jersey, NJ 08001</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold mb-1">India Delivery Center</p>
                      <p className="text-blue-100 text-sm">Tech Park, Hitec City<br/>Hyderabad, TS 500081</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Phone</p>
                      <p className="text-blue-100 text-sm">+1 (800) 555-0199</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-blue-100 text-sm">contact@mycorpsolutions.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat with us on WhatsApp</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-semibold">Do you provide remote IT staffing?</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Yes, we provide both on-site and remote IT professionals globally, tailored to your time zone and operational needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm font-semibold">Are your medical billers certified?</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      Absolutely. Our RCM team consists of AAPC and AHIMA certified coders strictly adhering to HIPAA compliance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm font-semibold">What is your typical SLA?</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      For managed services, we guarantee 99.99% uptime with immediate incident response for critical P1 issues.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* GOOGLE MAPS SECTION */}
      <div className="container mx-auto px-4 md:px-6 mt-16 mb-8">
        <div className="flex items-center gap-2 mb-8">
          <GoogleIcon className="w-6 h-6" />
          <h2 className="text-2xl font-bold font-display text-slate-800">Our Offices on Google Maps</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <div className="bg-primary text-white px-5 py-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-sm">US Headquarters — New Jersey, USA</span>
            </div>
            <iframe
              title="MyCorp Solutions New Jersey Office"
              src="https://maps.google.com/maps?q=New+Jersey,+USA&output=embed&z=9"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <div className="bg-primary text-white px-5 py-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-sm">India Delivery Center — Hyderabad, India</span>
            </div>
            <iframe
              title="MyCorp Solutions Hyderabad Office"
              src="https://maps.google.com/maps?q=Hitec+City,+Hyderabad,+Telangana,+India&output=embed&z=13"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
