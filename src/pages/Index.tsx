import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroFactory from "@/assets/hero-factory.jpg";
import clothingRack from "@/assets/clothing-rack.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import mensApparel from "@/assets/products/mens-apparel.jpg";
import womensApparel from "@/assets/products/womens-apparel.jpg";
import kidsApparel from "@/assets/products/kids-apparel.jpg";

const showcaseImages = [
  { src: mensApparel, alt: "Men's Apparel" },
  { src: womensApparel, alt: "Women's Apparel" },
  { src: kidsApparel, alt: "Kids Apparel" },
];

const sliderImages = [
  { src: clothingRack, alt: "Clothing Rack" },
  { src: qualityInspection, alt: "Quality Inspection" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFactory}
            alt="Industrial Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <h1 className="hero-title text-foreground">Organize</h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Teal/Gold Section */}
      <section className="bg-mamazon-gold py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl tracking-wider text-mamazon-charcoal-dark mb-6">
              YOUR PREFERRED SOURCING PARTNER
            </h2>
            <p className="text-mamazon-charcoal/80 leading-relaxed">
              We enable you to find the best in manufacturing and product development, 
              utilizing our global network of suppliers to deliver exceptional quality 
              at competitive prices. From concept to delivery, we ensure seamless 
              execution of your sourcing requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-4 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {showcaseImages.map((image, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Image Slider */}
      <section className="relative py-24 bg-mamazon-charcoal">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-[21/9] relative"
            >
              <img
                src={sliderImages[currentSlide].src}
                alt={sliderImages[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            </motion.div>

            {/* Navigation Arrows */}
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

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-foreground w-6"
                      : "bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square md:aspect-auto">
          <img
            src={qualityInspection}
            alt="Quality Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-mamazon-gold flex items-center justify-center p-12 md:p-16">
          <AnimatedSection className="text-center">
            <h3 className="font-display text-3xl md:text-4xl tracking-wider text-mamazon-charcoal-dark mb-6">
              QUALITY CRAFTSMANSHIP
            </h3>
            <p className="text-mamazon-charcoal/80 mb-8 max-w-md">
              Our commitment to excellence ensures every product meets the highest 
              standards of quality and craftsmanship.
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-mamazon-charcoal-dark text-foreground font-display tracking-wider uppercase hover:bg-mamazon-teal transition-colors"
            >
              Explore Products
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
