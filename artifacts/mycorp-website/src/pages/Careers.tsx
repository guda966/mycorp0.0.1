import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Briefcase, Clock, UploadCloud } from "lucide-react";

const openJobs = [
  { id: 1, title: "Senior Full Stack Developer (React/Node)", location: "Remote, USA", type: "Full-time", dept: "IT Solutions" },
  { id: 2, title: "AWS Cloud Architect", location: "Hybrid, New Jersey", type: "Full-time", dept: "IT Solutions" },
  { id: 3, title: "Medical Billing Specialist (AR)", location: "Remote / Hyderabad", type: "Full-time", dept: "Medical Billing" },
  { id: 4, title: "DevOps Engineer (Kubernetes)", location: "Contract, USA", type: "Contract", dept: "IT Staffing" },
  { id: 5, title: "IT Support Analyst (L2)", location: "Hyderabad, India", type: "Full-time", dept: "Managed Services" },
  { id: 6, title: "Senior Medical Coder (CPC)", location: "Hyderabad, India", type: "Full-time", dept: "Medical Billing" },
  { id: 7, title: "Cybersecurity Analyst", location: "New Jersey, USA", type: "Full-time", dept: "Managed Services" },
  { id: 8, title: "Talent Acquisition Specialist", location: "Remote, India", type: "Full-time", dept: "IT Hiring" },
];

const applySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  portfolio: z.string().optional(),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export default function Careers() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<typeof openJobs[0] | null>(null);
  
  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: { name: "", email: "", portfolio: "" }
  });

  const onSubmit = async (data: ApplyFormValues) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying to ${selectedJob?.title}. We'll be in touch soon.`,
    });
    
    form.reset();
    setSelectedJob(null);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-[#0B1120] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src={`${import.meta.env.BASE_URL}images/office-culture.png`}
            alt="Office Culture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Build Your Future With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Join a global team of innovators bridging the gap between talent, technology, and healthcare.
          </p>
          <Button size="lg" className="rounded-full shadow-lg" onClick={() => {
            document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Life at MyCorp</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We believe in fostering an environment where talent thrives. Enjoy competitive benefits and a culture of continuous learning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Remote Flexibility", desc: "Work from where you are most productive." },
              { title: "Health & Wellness", desc: "Comprehensive global medical coverage." },
              { title: "Learning Budget", desc: "Annual stipend for courses and certifications." },
              { title: "Global Mobility", desc: "Opportunities to work across our global offices." }
            ].map((perk, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-border">
                <h3 className="font-bold text-lg text-primary mb-2">{perk.title}</h3>
                <p className="text-slate-600 text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" className="py-20 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold mb-10">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{job.dept}</span>
                      <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" /> {job.type}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white" onClick={() => setSelectedJob(job)}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Apply for Role</DialogTitle>
            <DialogDescription>
              {selectedJob?.title} - {selectedJob?.location}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Jane Doe" {...form.register("name")} />
              {form.formState.errors.name && <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="jane@example.com" {...form.register("email")} />
              {form.formState.errors.email && <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="portfolio">LinkedIn / Portfolio URL (Optional)</Label>
              <Input id="portfolio" placeholder="https://..." {...form.register("portfolio")} />
            </div>

            <div className="space-y-2 pt-2">
              <Label>Resume / CV</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <UploadCloud className="w-8 h-8 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX up to 5MB</p>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
}
