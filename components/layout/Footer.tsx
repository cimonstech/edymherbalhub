import Link from "next/link";
import { Mail, MapPin, Share2, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[#0F6131] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/logo/edymherbalicon_white.png"
                alt="EDYM Herbal Hub Logo"
                className="h-12 w-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Empowering young Ghanaian farmers to transform ancestral wisdom into modern agricultural innovation for a sustainable future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-white/80 hover:text-white transition-colors">
                  Impact Dashboard
                </Link>
              </li>
              <li>
                <Link href="/business-units" className="text-white/80 hover:text-white transition-colors">
                  Business Units
                </Link>
              </li>
            </ul>
          </div>

          {/* Agriculture */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Agriculture</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/business-units/herbal-products" className="text-white/80 hover:text-white transition-colors">
                  Medicinal Plants
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white transition-colors">
                  Farming Innovation
                </Link>
              </li>
              <li>
                <Link href="/business-units/agro-processing" className="text-white/80 hover:text-white transition-colors">
                  Processing Methods
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/80 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impact" className="text-white/80 hover:text-white transition-colors">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {new Date().getFullYear()} EDYM Herbal Hub. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
