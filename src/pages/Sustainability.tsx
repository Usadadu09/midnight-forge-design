import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import naturalDyes from "@/assets/natural-dyes.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";

const naturalDyeSlides = [
  { 
    image: naturalDyes, 
    title: "MADDER ROOTS - PINK",
    description: "Natural pink dyes extracted from madder roots"
  },
  { 
    image: qualityInspection, 
    title: "TURMERIC - YELLOW",
    description: "Vibrant yellow from organic turmeric"
  },
];

const Sustainability = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % naturalDyeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + naturalDyeSlides.length) % naturalDyeSlides.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sustainabilityHero}
            alt="Sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>
      </section>

      {/* Natural Dyes Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h1 className="section-title mb-4">NATURAL DYES</h1>
            <h2 className="text-xl text-muted-foreground mb-8">Colouring Outside the Lines</h2>
            <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
              <p>
                Natural colours have a plethora of advantages. This method is more environmentally 
                friendly than the regularly used synthetic colouring method and has a significantly 
                lower environmental impact and are nontoxic.
              </p>
              <p>
                Natural dyes are derived from herbs and medicinal plants and work as anti-microbial 
                and anti-allergen agents while also leaving no trace in the environment throughout 
                the garment&apos;s life cycle.
              </p>
              <p className="text-trinity-sand">
                Scroll further to learn more about the origins of these brilliant hues!
              </p>
            </div>
          </AnimatedSection>

          {/* Slider */}
          <AnimatedSection>
            <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg">
              <div className="aspect-[16/9] relative">
                <img
                  src={naturalDyeSlides[currentSlide].image}
                  alt={naturalDyeSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl tracking-wider text-trinity-sand mb-2">
                    {naturalDyeSlides[currentSlide].title}
                  </h3>
                  <p className="text-foreground/80">
                    {naturalDyeSlides[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 backdrop-blur-sm rounded-full hover:bg-background/40 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biodegradable Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={qualityInspection}
            alt="Biodegradable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="section-title mb-4">100% BIO DEGRADABLE APPARELS</h2>
            <h3 className="text-xl text-foreground/80 mb-8">Creating sustainable products</h3>
            <p className="text-muted-foreground leading-relaxed">
              Offering 100 percent biodegradable clothing is unique in that it allows you to have 
              the most fashionable clothes without releasing any dangerous toxic chemicals into 
              the environment, which are hazardous to Flora and Fauna, as opposed to conventional clothes.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our manufacturers who produce biodegradable apparel are C2C certified (Cradle to Cradle). 
              This encompasses not just chemicals, but also material health, material re-use, renewable 
              energy management, water stewardship, and, last but not least, social fairness. It&apos;s the future.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-trinity-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">OUR COMMITMENT</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Eco-Friendly Production",
                description: "Minimizing environmental impact through sustainable manufacturing practices",
              },
              {
                title: "Ethical Sourcing",
                description: "Working with certified suppliers who prioritize fair labor practices",
              },
              {
                title: "Circular Economy",
                description: "Supporting recyclable and biodegradable materials for a greener future",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-trinity-red transition-colors">
                  <h3 className="font-display text-xl tracking-wider text-trinity-sand mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
