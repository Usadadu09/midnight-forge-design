import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const retailers = [
  "NORMA", "Biedronka", "REWE", "PENNY", "ALDI",
  "Pingo Doce", "dm", "Netto", "VÖGELE", "ROSSMANN",
  "JCPenney", "MAX", "MY HOUSE", "LIDL", "KAUFHOF",
  "109°F", "Sinsay", "C&A", "Kaufland", "metro",
  "TAKKO", "KiK"
];

const brands = [
  "SACOOR Brothers", "GANESH", "Ed Hardy", "Flying Machine",
  "Paw Patrol", "Minions", "Mickey Mouse", "Lilo & Stitch",
  "Disney Princess", "Frozen", "LOL Surprise", "Spider-Man",
  "Superman", "Tom and Jerry", "Fast & Furious"
];

const SupplyChain = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-trinity-charcoal">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="section-title mb-6">RETAILERS WE HAVE SERVICED</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Over the years we have earned the trust of hundreds of buyers & Importers, Brands and Retailers 
              from India, South East Asia to USA and the Middle East. We have serviced Department Stores, 
              Chain Stores, Cash & Carry chains, Retail, Ecommerce & Distributors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Retailers Grid */}
      <section className="py-16 bg-trinity-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {retailers.map((retailer, index) => (
              <AnimatedSection key={retailer} delay={index * 0.05}>
                <div className="aspect-[3/2] bg-foreground rounded-lg flex items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                  <span className="font-display text-sm md:text-base tracking-wider text-trinity-charcoal-dark text-center font-bold">
                    {retailer}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">BRANDS WE PRODUCED FOR</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {brands.slice(0, 4).map((brand, index) => (
              <AnimatedSection key={brand} delay={index * 0.1}>
                <div className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center p-6 hover:border-trinity-red transition-colors cursor-pointer">
                  <span className="font-display text-lg tracking-wider text-foreground text-center">
                    {brand}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Licensed Brands */}
          <AnimatedSection className="mt-16">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {brands.slice(4).map((brand, index) => (
                <div
                  key={brand}
                  className="aspect-[3/2] bg-card border border-border rounded-lg flex items-center justify-center p-4 hover:border-trinity-red transition-colors cursor-pointer"
                >
                  <span className="font-display text-xs md:text-sm tracking-wider text-foreground text-center">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-trinity-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="section-title mb-8">GLOBAL REACH</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              Our sourcing network spans across major manufacturing hubs in Asia, 
              ensuring competitive pricing and exceptional quality for all your needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {["India", "Bangladesh", "Nepal", "Sri Lanka", "Thailand", "Myanmar", "Malaysia"].map((country) => (
                <div
                  key={country}
                  className="py-4 px-6 bg-card border border-border rounded-lg hover:bg-trinity-red hover:border-trinity-red transition-all cursor-pointer"
                >
                  <span className="font-display tracking-wider text-foreground">{country}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SupplyChain;
