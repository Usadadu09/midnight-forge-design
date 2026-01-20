import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import servicesHero from "@/assets/services-hero.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";

const services = [
  {
    title: "LOCATING SUITABLE SUPPLIERS AND MANUFACTURERS",
    description: "Our sourced base could be tailored as per customer requirements. It could be from our existing suppliers with whom we have an excellent working relationship or it could be a new supplier as per customer's specific need (Compliance, pricing). We actively work with our suppliers to reduce cost, increase quality, and maintain our clients informed of the updates/progress and develop long-term relationship.",
    image: servicesHero,
    align: "left",
  },
  {
    title: "SOURCING AND MERCHANDISE",
    description: "We handle the sourcing and merchandising from start to finish. This includes initial product development, costing negotiations, order placement, production monitoring, quality control, and final shipping coordination. Our team ensures seamless communication between buyers and suppliers throughout the entire process.",
    image: officeMeeting,
    align: "right",
  },
  {
    title: "COLLECTION DEVELOPMENT",
    description: "We assist in developing complete product collections by transforming creative concepts into manufacturable products. This encompasses technical design, material sourcing, prototype development, and production feasibility analysis to ensure commercially viable products that meet market demands.",
    image: qualityInspection,
    align: "left",
  },
];

const additionalServices = [
  "Product Development & Design",
  "Quality Control & Assurance",
  "Factory Audits & Compliance",
  "Logistics & Shipping Coordination",
  "Price Negotiation & Cost Analysis",
  "Sample Development & Approval",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <AnimatedSection className="relative z-10 text-center px-6">
          <h1 className="section-title mb-4">OUR SERVICES</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Trinity Services facilitates the covering of all stages, from fully specifying the customer&apos;s 
            needs and standards and delivering it with all product development, QC, Compliance etc.
          </p>
        </AnimatedSection>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.2}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 ${
                service.align === "right" ? "md:flex-row-reverse" : ""
              }`}>
                {service.align === "left" && (
                  <>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-trinity-sand flex items-center p-8 md:p-12">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl tracking-wider text-trinity-charcoal-dark mb-4">
                          {service.title}
                        </h3>
                        <p className="text-trinity-charcoal/80 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {service.align === "right" && (
                  <>
                    <div className="bg-card flex items-center p-8 md:p-12 order-2 md:order-1">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl tracking-wider text-trinity-sand mb-4">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden order-1 md:order-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-trinity-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">ADDITIONAL SERVICES</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service} delay={index * 0.1}>
                <div className="bg-card border border-border p-6 rounded-lg hover:border-trinity-red transition-colors">
                  <p className="font-display tracking-wider text-foreground">{service}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
