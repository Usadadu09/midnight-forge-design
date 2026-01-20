import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import mensApparel from "@/assets/products/mens-apparel.jpg";
import womensApparel from "@/assets/products/womens-apparel.jpg";
import babyApparel from "@/assets/products/baby-apparel.jpg";
import sweaters from "@/assets/products/sweaters.jpg";
import sportswear from "@/assets/products/sportswear.jpg";
import accessories from "@/assets/products/accessories.jpg";
import homeTextiles from "@/assets/products/home-textiles.jpg";
import kitchenware from "@/assets/products/kitchenware.jpg";
import ceramics from "@/assets/products/ceramics.jpg";
import sportsGoods from "@/assets/products/sports-goods.jpg";
import handTools from "@/assets/products/hand-tools.jpg";
import foodProducts from "@/assets/products/food-products.jpg";

const productData: Record<string, { title: string; description: string; heroImage: string; images: string[] }> = {
  mens: {
    title: "MENS APPAREL",
    description: "Premium men's fashion including casual wear, formal attire, and seasonal collections. Quality fabrics and expert tailoring for the modern gentleman.",
    heroImage: mensApparel,
    images: [mensApparel, mensApparel, mensApparel, mensApparel, mensApparel, mensApparel],
  },
  womens: {
    title: "WOMENS APPAREL",
    description: "Elegant women's fashion ranging from everyday essentials to statement pieces. Thoughtfully designed with quality materials and attention to detail.",
    heroImage: womensApparel,
    images: [womensApparel, womensApparel, womensApparel, womensApparel, womensApparel, womensApparel],
  },
  baby: {
    title: "BABY APPAREL",
    description: "Soft, gentle, and adorable baby clothing. Made with the finest materials to keep your little ones comfortable and stylish.",
    heroImage: babyApparel,
    images: [babyApparel, babyApparel, babyApparel, babyApparel, babyApparel, babyApparel],
  },
  sweaters: {
    title: "SWEATERS",
    description: "Cozy knitwear for all seasons. From chunky cable knits to lightweight cardigans, our sweater collection offers warmth and style.",
    heroImage: sweaters,
    images: [sweaters, sweaters, sweaters, sweaters, sweaters, sweaters],
  },
  sportswear: {
    title: "SPORTSWEAR",
    description: "Performance-driven athletic wear designed for comfort and functionality. From running gear to yoga essentials.",
    heroImage: sportswear,
    images: [sportswear, sportswear, sportswear, sportswear, sportswear, sportswear],
  },
  accessories: {
    title: "FASHION ACCESSORIES",
    description: "Complete your look with our curated selection of fashion accessories. Bags, belts, scarves, and more.",
    heroImage: accessories,
    images: [accessories, accessories, accessories, accessories, accessories, accessories],
  },
  home: {
    title: "HOME TEXTILES & MORE",
    description: "Transform your living space with our home textile collection. Bedding, cushions, throws, and decorative items.",
    heroImage: homeTextiles,
    images: [homeTextiles, homeTextiles, homeTextiles, homeTextiles, homeTextiles, homeTextiles],
  },
  kitchenware: {
    title: "KITCHENWARE, SERVEWARE & MORE",
    description: "Premium kitchen essentials and serveware. Stainless steel cutlery, cooking utensils, and dining accessories.",
    heroImage: kitchenware,
    images: [kitchenware, kitchenware, kitchenware, kitchenware, kitchenware, kitchenware],
  },
  ceramics: {
    title: "CERAMICS & PORCELAIN",
    description: "Elegant ceramics and porcelain dinnerware. Plates, bowls, cups, and decorative pieces for your home.",
    heroImage: ceramics,
    images: [ceramics, ceramics, ceramics, ceramics, ceramics, ceramics],
  },
  sports: {
    title: "SPORTS GOODS",
    description: "Quality sports equipment and accessories. From balls to fitness gear, we source the best in sporting goods.",
    heroImage: sportsGoods,
    images: [sportsGoods, sportsGoods, sportsGoods, sportsGoods, sportsGoods, sportsGoods],
  },
  tools: {
    title: "HAND TOOLS",
    description: "Professional-grade hand tools for every job. Wrenches, screwdrivers, pliers, and more from trusted manufacturers.",
    heroImage: handTools,
    images: [handTools, handTools, handTools, handTools, handTools, handTools],
  },
  food: {
    title: "FOOD PRODUCTS",
    description: "Authentic Indian food products including grains, spices, sauces, pickles, and specialty items for global markets.",
    heroImage: foodProducts,
    images: [foodProducts, foodProducts, foodProducts, foodProducts, foodProducts, foodProducts],
  },
};

const ProductDetail = () => {
  const { category } = useParams<{ category: string }>();
  const product = category ? productData[category] : null;

  if (!product) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="section-title mb-4">Product Not Found</h1>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-trinity-sand hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end justify-center overflow-hidden pb-12">
        <div className="absolute inset-0">
          <img
            src={product.heroImage}
            alt={product.title}
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
          <h1 className="section-title">{product.title}</h1>
        </AnimatedSection>
      </section>

      {/* Description */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {product.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-trinity-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-2xl tracking-[0.3em] text-trinity-sand border-b border-border pb-4 inline-block">
              GALLERY
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="aspect-square overflow-hidden rounded-lg bg-card group cursor-pointer">
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl tracking-wider text-foreground mb-4">
              Interested in this category?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss your sourcing requirements. We&apos;ll help you find 
              the perfect manufacturers and suppliers for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-trinity-red text-foreground font-display tracking-wider uppercase hover:bg-trinity-dark-red transition-colors rounded-lg"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
