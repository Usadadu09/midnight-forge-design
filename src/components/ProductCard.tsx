import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  image: string;
  href?: string;
}

export const ProductCard = ({ title, image, href = "#" }: ProductCardProps) => {
  return (
    <Link to={href} className="product-card group block relative aspect-square">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="font-display text-xl md:text-2xl tracking-wider uppercase text-foreground mb-4">
          {title}
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="discover-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Discover
        </motion.button>
      </div>
    </Link>
  );
};
