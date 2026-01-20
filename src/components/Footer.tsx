import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-mamazon-charcoal-dark border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mamazon-logo mb-8">
            MAMAZON
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 mb-8 text-muted-foreground">
            <a
              href="mailto:hello@mamazon.com"
              className="flex items-center gap-2 hover:text-mamazon-gold transition-colors"
            >
              <Mail size={16} />
              hello@mamazon.com
            </a>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              +91-2225967765 / 2225968363 / 2267208113
            </div>
            <div className="flex items-center gap-2 max-w-md">
              <MapPin size={16} className="flex-shrink-0" />
              Mamazon Services, F-101, Eastern Business District, L.B.S Marg, Bhandup (W), Mumbai, Maharashtra, India 400078
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-full hover:bg-mamazon-teal hover:border-mamazon-teal transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            ©2024 by Mamazon Services.
          </p>
        </div>
      </div>
    </footer>
  );
};
