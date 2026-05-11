// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Mail, Phone, MapPin, Globe, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const contactItems = [
//   {
//     icon: Mail,
//     label: 'Email Me',
//     value: 'ajonymia321@gmail.com',
//     href: 'mailto:ajonymia321@gmail.com',
//     accent: 'hsl(var(--primary))',
//   },
//   {
//     icon: Phone,
//     label: 'WhatsApp',
//     value: '+880 1770 522886',
//     href: 'https://wa.me/+8801770522886',
//     accent: 'hsl(var(--accent))',
//   },
//   {
//     icon: MapPin,
//     label: 'Location',
//     value: 'Bangladesh',
//     href: '#',
//     accent: 'hsl(280 70% 55%)',
//   },
//   {
//     icon: Globe,
//     label: 'Response Time',
//     value: 'Within 24 Hours',
//     href: '#',
//     accent: 'hsl(var(--primary))',
//   },
// ];

// const Contact = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.contact-head',
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
//         }
//       );
//       gsap.fromTo(
//         '.contact-card',
//         { opacity: 0, y: 50, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.7,
//           stagger: 0.12,
//           ease: 'power3.out',
//           scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
//       <div
//         className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
//         style={{ background: 'var(--gradient-glow)' }}
//       />
//       <div
//         className="absolute bottom-0 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
//         style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }}
//       />

//       <div className="container mx-auto px-4 relative">
//         {/* Heading */}
//         <div className="text-center mb-14 contact-head">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-5">
//             <Sparkles size={14} className="text-primary animate-pulse" />
//             <span className="text-xs font-medium text-primary uppercase tracking-wider">
//               Let's Connect
//             </span>
//           </div>
//           <h2 className="section-title">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="section-subtitle">
//             Have a project in mind? I'm just a message away — let's build something great.
//           </p>
//         </div>

//         {/* Contact cards grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
//           {contactItems.map(({ icon: Icon, label, value, href, accent }) => (
//             <a
//               key={label}
//               href={href}
//               target={href.startsWith('http') ? '_blank' : undefined}
//               rel="noreferrer"
//               className="contact-card group relative rounded-2xl p-6 glass-card overflow-hidden transition-all duration-500 hover:-translate-y-2"
//               style={{ ['--accent' as any]: accent }}
//             >
//               {/* Glow on hover */}
//               <span
//                 className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10"
//                 style={{ background: accent }}
//               />
//               {/* Top corner arrow */}
//               <ArrowUpRight
//                 size={18}
//                 className="absolute top-4 right-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
//               />

//               <div
//                 className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
//                 style={{
//                   background: `linear-gradient(135deg, ${accent}, ${accent}80)`,
//                   boxShadow: `0 8px 24px ${accent}40`,
//                 }}
//               >
//                 <Icon className="text-primary" size={24} />
//               </div>

//               <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
//                 {label}
//               </p>
//               <p className="font-semibold text-base break-words group-hover:text-primary transition-colors">
//                 {value}
//               </p>
//             </a>
//           ))}
//         </div>

//         {/* Big CTA card */}
//         <div className="contact-card max-w-4xl mx-auto">
//           <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 glass-card glow-ring text-center">
//             <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />

//             <div className="relative z-10">
//               <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 animate-pulse-glow">
//                 <MessageCircle className="text-primary-foreground" size={28} />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-3">
//                 Prefer a <span className="text-gradient">quick chat?</span>
//               </h3>
//               <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
//                 Send a message on WhatsApp or email — I usually reply within a few hours.
//               </p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//                 <a
//                   href="https://wa.me/+8801770522886"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="btn-primary inline-flex items-center gap-2"
//                 >
//                   <Phone size={18} />
//                   WhatsApp Me
//                 </a>
//                 <a
//                   href="mailto:ajonymia321@gmail.com"
//                   className="btn-outline inline-flex items-center gap-2"
//                 >
//                   <Mail size={18} />
//                   Send Email
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;






import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Globe, MessageCircle, Sparkles, ArrowUpRight, Send, User, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be under 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255),
  subject: z.string().trim().min(1, 'Subject is required').max(150, 'Subject must be under 150 characters'),
  message: z.string().trim().min(5, 'Message is too short').max(2000, 'Message must be under 2000 characters'),
});

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    icon: Mail,
    label: 'Email Me',
    value: 'ajonymia321@gmail.com',
    href: 'mailto:ajonymia321@gmail.com',
    accent: 'hsl(var(--primary))',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+880 1770 522886',
    href: 'https://wa.me/+8801770522886',
    accent: 'hsl(var(--accent))',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangladesh',
    href: '#',
    accent: 'hsl(280 70% 55%)',
  },
  {
    icon: Globe,
    label: 'Response Time',
    value: 'Within 24 Hours',
    href: '#',
    accent: 'hsl(var(--primary))',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const { name, email, subject, message } = result.data;
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto = `mailto:ajonymia321@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Message ready to send',
        description: 'Your email client has been opened with your message.',
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-head',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        }
      );
      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'var(--gradient-glow)' }}
      />
      <div
        className="absolute bottom-0 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-14 contact-head">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-5">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Let's Connect
            </span>
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'm just a message away — let's build something great.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
          {contactItems.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-card group relative rounded-2xl p-6 glass-card overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.35)] card-shimmer card-glow-border"
              style={{ ['--accent' as any]: accent }}
            >
              {/* Glow on hover */}
              <span
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 -z-10"
                style={{ background: accent }}
              />
              {/* Top corner arrow */}
              <ArrowUpRight
                size={18}
                className="absolute top-4 right-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent}80)`,
                  boxShadow: `0 8px 24px ${accent}40`,
                }}
              >
                <Icon className="text-primary" size={24} />
              </div>

              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                {label}
              </p>
              <p className="font-semibold text-base break-words group-hover:text-primary transition-colors">
                {value}
              </p>
            </a>
          ))}
        </div>

        {/* Contact form + quick chat */}
        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Form */}
          <div className="contact-card lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 glass-card glow-ring">
              <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Send className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Send a <span className="text-gradient">message</span>
                    </h3>
                    <p className="text-xs text-muted-foreground">I'll get back within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                        Name
                      </Label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          maxLength={100}
                          className="pl-9 bg-background/50 border-border/60 focus-visible:border-primary"
                          aria-invalid={!!errors.name}
                        />
                      </div>
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          maxLength={255}
                          className="pl-9 bg-background/50 border-border/60 focus-visible:border-primary"
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      maxLength={150}
                      className="bg-background/50 border-border/60 focus-visible:border-primary"
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      maxLength={2000}
                      className="bg-background/50 border-border/60 focus-visible:border-primary resize-none"
                      aria-invalid={!!errors.message}
                    />
                    <div className="flex justify-between text-xs">
                      {errors.message ? (
                        <span className="text-destructive">{errors.message}</span>
                      ) : (
                        <span className="text-muted-foreground">Min 5 characters</span>
                      )}
                      <span className="text-muted-foreground">{form.message.length}/2000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick chat side card */}
          <div className="contact-card lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 glass-card glow-ring h-full flex flex-col">
              <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 animate-pulse-glow">
                  <MessageCircle className="text-primary-foreground" size={26} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Prefer a <span className="text-gradient">quick chat?</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Reach out directly on WhatsApp or email — I usually reply within a few hours.
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href="https://wa.me/+8801770522886"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    WhatsApp Me
                  </a>
                  <a
                    href="mailto:ajonymia321@gmail.com"
                    className="btn-outline inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

