import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import officeMeeting from "@/assets/office-meeting.jpg";

const teamMembers = [
  {
    name: "Paresh Sampat",
    role: "Founder & Director",
    description: "Leading Trinity Services since its inception, Paresh brings over 30 years of experience in global sourcing and manufacturing partnerships.",
  },
  {
    name: "Nishant Pandit",
    role: "Director",
    description: "With expertise in supply chain management, Nishant oversees our international operations and client relationships.",
  },
  {
    name: "Priya Murthy",
    role: "Head of Operations",
    description: "An industry veteran with extensive knowledge in garment manufacturing and quality control systems.",
  },
  {
    name: "Nishar Sampat",
    role: "Business Development",
    description: "Leading our expansion initiatives and building strategic partnerships across global markets.",
  },
];

const companies = [
  { name: "Trinity Services", logo: "TRINITY" },
  { name: "RR Designs", logo: "RR" },
  { name: "Colorcraft International", logo: "CC" },
  { name: "Design Studio", logo: "DS" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-trinity-charcoal">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="section-title mb-6">YOUR PREFERRED SOURCING PARTNER</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center text-muted-foreground space-y-4">
            <p>
              We started as a small liaison company and gradually grew into a one stop, complete 
              solution provider in Product Development, sourcing, production & quality control.
            </p>
            <p>
              What sets us apart from our competitors is our complete understanding of production 
              process and our great working relationship with our factories. This enables us to 
              monitor the product throughout the development cycle that gets translated in delivering 
              a product to a client which becomes truly theirs.
            </p>
            <p>
              Quality always is our foremost priority. Our rigorous quality checks and stringent 
              inspection system ensures that only the best products reach our clients. 
              Plus if it has to be on Time it will be On Time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-4">
        <AnimatedSection>
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={officeMeeting}
              alt="Office Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* The Team Section */}
      <section className="py-24 bg-trinity-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title mb-4">THE TEAM</h2>
            <p className="text-muted-foreground">The Pillars of our Company</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.15}>
                <div className="flex gap-6 items-start">
                  <div className="w-24 h-24 bg-trinity-charcoal-light rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-2xl font-display text-trinity-sand">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-wider text-trinity-sand mb-1">
                      {member.role}
                    </h3>
                    <p className="text-foreground font-medium mb-2">{member.name}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">OUR COMPANIES</h2>
            <p className="text-muted-foreground mt-4">
              Our other companies under the same group
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <AnimatedSection key={company.name} delay={index * 0.1}>
                <div className="aspect-square bg-card rounded-lg flex items-center justify-center border border-border hover:border-trinity-red transition-colors cursor-pointer">
                  <div className="text-center">
                    <span className="font-display text-2xl tracking-wider text-foreground">
                      {company.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2">{company.name}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
