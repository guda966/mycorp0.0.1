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
    </div>
  );
}
