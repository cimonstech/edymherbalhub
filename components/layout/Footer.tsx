import Link from "next/link";
import { Mail, MapPin, Share2, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[#0F6131] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 lg:col-span-2">
            <div className="flex items-center">
              <img
                src="/logo/edymherbalicon_white.png"
                alt="EDYM Herbal Hub Logo"
                className="h-10 sm:h-12 w-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Empowering young Ghanaian farmers to transform ancestral wisdom into modern agricultural innovation for a sustainable future.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Share">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Instagram">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Facebook">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Twitter">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">About</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Impact Dashboard
                </Link>
              </li>
              <li>
                <Link href="/business-units" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Business Units
                </Link>
              </li>
            </ul>
          </div>

          {/* Agriculture */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Agriculture</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/business-units/herbal-products" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Medicinal Plants
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Farming Innovation
                </Link>
              </li>
              <li>
                <Link href="/business-units/agro-processing" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Processing Methods
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Community</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/impact" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white active:text-white transition-colors block py-1 touch-manipulation">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} EDYM Herbal Hub. All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link href="/contact" className="hover:text-white active:text-white transition-colors touch-manipulation">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white active:text-white transition-colors touch-manipulation">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white active:text-white transition-colors touch-manipulation">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
