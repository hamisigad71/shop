import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with JoJo Scrubs</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, exclusive offers, and healthcare fashion tips delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20"
            />
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 font-semibold">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <div>
                  <div className="font-bold text-xl">JoJo Scrubs</div>
                  <div className="text-sm text-gray-400">Premium Medical Wear</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Kenya's leading provider of premium medical scrubs, serving healthcare professionals with quality,
                comfort, and style since 2019.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "All Products", href: "/products" },
                  { name: "New Arrivals", href: "/products?filter=new" },
                  { name: "Best Sellers", href: "/products?filter=popular" },
                  { name: "Size Guide", href: "/size-guide" },
                  { name: "Care Instructions", href: "/care-guide" },
                  { name: "Bulk Orders", href: "/bulk-orders" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
              <ul className="space-y-2">
                {[
                  { name: "Contact Us", href: "/contact" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Shipping Info", href: "/shipping" },
                  { name: "Returns & Exchanges", href: "/returns" },
                  { name: "Track Your Order", href: "/track-order" },
                  { name: "Privacy Policy", href: "/privacy" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+254 700 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">info@jojoscrubs.co.ke</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    Westlands, Nairobi
                    <br />
                    Kenya
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium mb-3">Business Hours</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Truck className="h-8 w-8 text-blue-400" />
              <div className="text-sm font-medium">Free Delivery</div>
              <div className="text-xs text-gray-400">Orders over KSh 5,000</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <RotateCcw className="h-8 w-8 text-green-400" />
              <div className="text-sm font-medium">Easy Returns</div>
              <div className="text-xs text-gray-400">30-day return policy</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-purple-400" />
              <div className="text-sm font-medium">Secure Payment</div>
              <div className="text-xs text-gray-400">SSL encrypted</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CreditCard className="h-8 w-8 text-yellow-400" />
              <div className="text-sm font-medium">M-Pesa & Cards</div>
              <div className="text-xs text-gray-400">Multiple payment options</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 JoJo Scrubs. All rights reserved. Made with ❤️ in Kenya.</div>
            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">We accept:</span>
                <div className="flex space-x-2">
                  <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">M-PESA</div>
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">VISA</div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs">MC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
