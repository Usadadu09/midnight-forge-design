import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-trinity-charcoal">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="section-title mb-6">GET IN TOUCH</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? We&apos;d love to hear from you. 
              Reach out to discuss your sourcing requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl tracking-wider text-trinity-sand mb-6">
                    CONTACT INFORMATION
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="mailto:hello@trinity-india.com"
                      className="flex items-start gap-4 text-muted-foreground hover:text-trinity-sand transition-colors group"
                    >
                      <Mail className="mt-1 flex-shrink-0 group-hover:text-trinity-red transition-colors" size={20} />
                      <span>hello@trinity-india.com</span>
                    </a>
                    <div className="flex items-start gap-4 text-muted-foreground">
                      <Phone className="mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p>+91-2225967765</p>
                        <p>+91-2225968363</p>
                        <p>+91-2267208113</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-muted-foreground">
                      <MapPin className="mt-1 flex-shrink-0" size={20} />
                      <p>
                        Trinity Services, F-101, Eastern Business District,<br />
                        L.B.S Marg, Bhandup (W),<br />
                        Mumbai, Maharashtra, India 400078
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-4">
                    FOLLOW US
                  </h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-trinity-sand transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display tracking-wider text-foreground mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-trinity-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-display tracking-wider text-foreground mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-trinity-red transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-display tracking-wider text-foreground mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-trinity-red transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-display tracking-wider text-foreground mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-trinity-red transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-trinity-red text-foreground font-display tracking-wider uppercase hover:bg-trinity-dark-red transition-colors rounded-lg"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-trinity-charcoal relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 text-trinity-sand" />
            <p className="font-display text-xl tracking-wider text-foreground">Mumbai, India</p>
            <p className="text-muted-foreground mt-2">
              Eastern Business District, Bhandup
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
