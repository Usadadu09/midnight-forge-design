import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";

const retailers = [
  { name: "NORMA", color: "#E31837" },
  { name: "Biedronka", color: "#E4002B" },
  { name: "REWE", color: "#CC0000" },
  { name: "PENNY", color: "#CD1719" },
  { name: "ALDI", color: "#00529B" },
  { name: "Pingo Doce", color: "#009639" },
  { name: "dm", color: "#008ACE" },
  { name: "Netto", color: "#FFD100" },
  { name: "VÖGELE", color: "#E30613" },
  { name: "ROSSMANN", color: "#C8102E" },
  { name: "JCPenney", color: "#C8102E" },
  { name: "MAX", color: "#000000" },
  { name: "LIDL", color: "#0050AA" },
  { name: "KAUFHOF", color: "#004B87" },
  { name: "Sinsay", color: "#000000" },
  { name: "C&A", color: "#E30613" },
  { name: "Kaufland", color: "#E10A0A" },
  { name: "metro", color: "#003D7A" },
  { name: "TAKKO", color: "#E30613" },
  { name: "KiK", color: "#E30613" },
];

const brands = [
  { name: "SACOOR", color: "#1C1C1C" },
  { name: "GANESH", color: "#8B4513" },
  { name: "Ed Hardy", color: "#FFD700" },
  { name: "Flying Machine", color: "#1E90FF" },
];

const licensedBrands = [
  { name: "Paw Patrol", color: "#00A3E0" },
  { name: "Minions", color: "#FFD700" },
  { name: "Mickey Mouse", color: "#E31837" },
  { name: "Lilo & Stitch", color: "#4169E1" },
  { name: "Disney Princess", color: "#FF69B4" },
  { name: "Frozen", color: "#87CEEB" },
  { name: "LOL Surprise", color: "#FF1493" },
  { name: "Spider-Man", color: "#E31837" },
  { name: "Superman", color: "#0033A0" },
  { name: "Tom and Jerry", color: "#FFB347" },
  { name: "Fast & Furious", color: "#333333" },
];

const LogoCard = ({ name, color, size = "normal" }: { name: string; color: string; size?: "normal" | "small" }) => (
  <div 
    className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
    hover:border-trinity-red/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-trinity-red/20
    ${size === "small" ? "p-4" : "p-6"}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className={`flex items-center justify-center ${size === "small" ? "h-12" : "h-16"}`}>
      <span 
        className={`font-display font-bold tracking-wider text-center transition-all duration-300 group-hover:scale-110
        ${size === "small" ? "text-sm md:text-base" : "text-lg md:text-xl"}`}
        style={{ color }}
      >
        {name}
      </span>
    </div>
    <div 
      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
      style={{ backgroundColor: color }}
    />
  </div>
);

const SupplyChain = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-trinity-charcoal via-trinity-charcoal-dark to-trinity-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-trinity-red/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight">
              GLOBAL <span className="text-trinity-red">PARTNERS</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Over the years we have earned the trust of hundreds of buyers & importers, brands and retailers 
              from India, South East Asia to USA and the Middle East. We have serviced Department Stores, 
              Chain Stores, Cash & Carry chains, Retail, Ecommerce & Distributors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Retailers Logo Wall */}
      <section className="py-20 bg-trinity-charcoal-dark relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-sm font-display tracking-[0.3em] text-trinity-red mb-4">TRUSTED BY</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">LEADING RETAILERS</h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {retailers.map((retailer, index) => (
              <AnimatedSection key={retailer.name} delay={index * 0.03}>
                <LogoCard name={retailer.name} color={retailer.color} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-trinity-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-trinity-red to-transparent" />
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-display tracking-[0.3em] text-trinity-sand mb-4">MANUFACTURED FOR</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">PREMIUM BRANDS</h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {brands.map((brand, index) => (
              <AnimatedSection key={brand.name} delay={index * 0.1}>
                <LogoCard name={brand.name} color={brand.color} />
              </AnimatedSection>
            ))}
          </div>

          {/* Licensed Brands */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-sm font-display tracking-[0.3em] text-trinity-red mb-4">LICENSED</h2>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">CHARACTER BRANDS</h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {licensedBrands.map((brand, index) => (
              <AnimatedSection key={brand.name} delay={index * 0.05}>
                <LogoCard name={brand.name} color={brand.color} size="small" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach with Enhanced Map */}
      <section className="py-24 bg-gradient-to-b from-trinity-charcoal-dark to-trinity-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-trinity-red rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-trinity-sand rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-sm font-display tracking-[0.3em] text-trinity-red mb-4">SOURCING NETWORK</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">GLOBAL REACH</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16 text-lg">
              Our sourcing network spans across major manufacturing hubs in Asia, 
              ensuring competitive pricing and exceptional quality for all your needs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {["India", "Bangladesh", "Nepal", "Sri Lanka", "Thailand", "Myanmar", "Malaysia"].map((country, index) => (
                <AnimatedSection key={country} delay={index * 0.1}>
                  <div className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full 
                    hover:border-trinity-red hover:bg-trinity-red/10 transition-all duration-500 cursor-pointer">
                    <span className="font-display tracking-wider text-foreground group-hover:text-trinity-red transition-colors">
                      {country}
                    </span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-trinity-red rounded-full opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 animate-pulse" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default SupplyChain;
