import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbox } from "@/components/Lightbox";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import boy1 from "@/assets/kids/boy-1.jpg";
import boy2 from "@/assets/kids/boy-2.jpg";
import boy3 from "@/assets/kids/boy-3.jpg";
import boy4 from "@/assets/kids/boy-4.jpg";
import boy5 from "@/assets/kids/boy-5.jpg";
import girl1 from "@/assets/kids/girl-1.jpg";
import girl2 from "@/assets/kids/girl-2.jpg";
import girl3 from "@/assets/kids/girl-3.jpg";
import girl4 from "@/assets/kids/girl-4.jpg";
import embellish1 from "@/assets/kids/embellish-1.jpg";
import embellish2 from "@/assets/kids/embellish-2.jpg";
import embellish3 from "@/assets/kids/embellish-3.jpg";
import kidsHero from "@/assets/products/kids-apparel.jpg";

const boysImages = [boy1, boy2, boy3, boy4, boy5, boy1, boy2, boy3, boy4];
const girlsImages = [girl1, girl2, girl3, girl4, girl1, girl2, girl3, girl4];
const embellishImages = [embellish1, embellish2, embellish3, embellish1, embellish2, embellish3];
const allImages = [...boysImages, ...girlsImages, ...embellishImages];

const KidsApparel = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (globalIndex: number) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end justify-center overflow-hidden pb-12">
        <div className="absolute inset-0">
          <img
            src={kidsHero}
            alt="Kids Apparel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <AnimatedSection className="relative z-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
          <h1 className="section-title">KIDS APPAREL</h1>
        </AnimatedSection>
      </section>

      {/* Description */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Stylish, comfortable, and durable children's clothing. From casual everyday wear to 
              special occasion outfits, our kids' apparel collection features quality fabrics, 
              playful designs, and expert craftsmanship for children of all ages.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Boys Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl tracking-[0.3em] text-mamazon-gold border-b border-border pb-4 inline-block">
              BOYS
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {boysImages.map((image, index) => (
              <AnimatedSection key={`boy-${index}`} delay={index * 0.05}>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-card group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Boys apparel ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <button className="discover-btn">See More</button>
          </AnimatedSection>
        </div>
      </section>

      {/* Girls Section */}
      <section className="py-16 bg-mamazon-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl tracking-[0.3em] text-mamazon-gold border-b border-border pb-4 inline-block">
              GIRLS
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {girlsImages.map((image, index) => (
              <AnimatedSection key={`girl-${index}`} delay={index * 0.05}>
                <div 
                  className="aspect-[3/4] overflow-hidden rounded-lg bg-card group cursor-pointer"
                  onClick={() => openLightbox(boysImages.length + index)}
                >
                  <img
                    src={image}
                    alt={`Girls apparel ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <button className="discover-btn">See More</button>
          </AnimatedSection>
        </div>
      </section>

      {/* Embellishments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl tracking-[0.3em] text-mamazon-gold border-b border-border pb-4 inline-block">
              EMBELLISHMENTS
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {embellishImages.map((image, index) => (
              <AnimatedSection key={`embellish-${index}`} delay={index * 0.05}>
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-card group cursor-pointer"
                  onClick={() => openLightbox(boysImages.length + girlsImages.length + index)}
                >
                  <img
                    src={image}
                    alt={`Embellishment ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <button className="discover-btn">Explore More</button>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default KidsApparel;
