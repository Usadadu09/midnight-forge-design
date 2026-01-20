import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-display text-8xl md:text-9xl font-bold text-trinity-sand mb-4">
          404
        </h1>
        <p className="font-display text-2xl tracking-wider text-foreground mb-4">
          PAGE NOT FOUND
        </p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-trinity-red text-foreground font-display tracking-wider uppercase hover:bg-trinity-dark-red transition-colors rounded-lg"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
