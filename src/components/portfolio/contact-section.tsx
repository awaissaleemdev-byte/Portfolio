'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
    }
  return (
    <section id="contact" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Contact Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Have a question or want to work together? Drop me a message below.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" required/>
                </div>
           </div>
           <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" className="min-h-[150px]" required/>
           </div>
           <div className="text-center">
             <Button type="submit" size="lg">Send Message</Button>
           </div>
        </form>
      </div>
    </section>
  );
}
