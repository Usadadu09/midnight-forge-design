import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProductCard } from "@/components/ProductCard";
import mensApparel from "@/assets/products/mens-apparel.jpg";
import womensApparel from "@/assets/products/womens-apparel.jpg";
import kidsApparel from "@/assets/products/kids-apparel.jpg";
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

const products = [
  { title: "Mens Apparel", image: mensApparel, href: "/products/mens" },
  { title: "Womens Apparel", image: womensApparel, href: "/products/womens" },
  { title: "Kids Apparel", image: kidsApparel, href: "/products/kids" },
  { title: "Baby Apparel", image: babyApparel, href: "/products/baby" },
  { title: "Sweaters", image: sweaters, href: "/products/sweaters" },
  { title: "Sportswear", image: sportswear, href: "/products/sportswear" },
  { title: "Fashion Accessories", image: accessories, href: "/products/accessories" },
  { title: "Home Textiles & More", image: homeTextiles, href: "/products/home" },
  { title: "Kitchenware, Serveware & More", image: kitchenware, href: "/products/kitchenware" },
  { title: "Ceramics & Porcelain", image: ceramics, href: "/products/ceramics" },
  { title: "Sports Goods", image: sportsGoods, href: "/products/sports" },
  { title: "Hand Tools", image: handTools, href: "/products/tools" },
  { title: "Food Products", image: foodProducts, href: "/products/food" },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="section-title mb-6">PRODUCTS</h1>
            <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-8">
              Best of the Best
            </h2>
            <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
              <p>
                We cater to all sorts of Apparels whether Knits or Wovens, Sweaters or Heavy Jackets, 
                Home textiles or Fashion accessories - you name it and we will make it happen for you.
              </p>
              <p>
                We also have dedicated team to handle Non Textile items like Shoes, Sports Goods, 
                Ceramics & Stonewares, Cutlery & Kitchenwares, Hand tools and much more. All your 
                sourcing requirements are fulfilled under one roof.
              </p>
              <p className="text-trinity-sand">
                Depending on your requirement we identify suitable suppliers from Bangladesh, India, 
                Nepal, Sri Lanka, Thailand, Myanmar, Malaysia.
              </p>
              <p className="italic text-sm">
                We are excited to announce that we have recently expanded into the food category. 
                We can now help you source all sorts of food products from India like grains, nuts 
                and seeds, oils, sauces, pickles and dips, ready to cook/eat products, tea/coffee, 
                fruits and vegetables (frozen or dried), juices and other beverages.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {products.map((product, index) => (
            <AnimatedSection key={product.title} delay={index * 0.1}>
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
