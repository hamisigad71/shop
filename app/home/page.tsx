// This file is now the Homepage (previously app/page.tsx)
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Heart,
  ArrowRight,
  Play,
  Camera,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CountdownTimer } from "@/components/countdown-timer";
import { ProductAccessoryCarousel } from "@/components/product-accessory-carousel";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Comfort Scrub Set",
    price: 4500,
    originalPrice: 5500,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/505796942_18014423720724332_1222022728623227707_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFzMNK9SyxafOrgpwWJwMVK2AVHOAdVcNrYBUc4B1Vw2nVGJPHwUH5SbtGutuw28_ywN_rrhYKhxhEAZkmgiS9F&_nc_ohc=hA23a14AQOcQ7kNvwHZ7XDE&_nc_oc=AdmI0ZQmWemQquWNNf2221TSu39c2ZUEZmrKsrPOr6Oo6Fe245vBr1XwW2JTbv5RHGw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=20AICgXiDS0suuS1o0u4rg&oh=00_AfSMoXLyPgkWvvwOAtU-xOsZBLOWWws4THxV9z1y0cBHOQ&oe=687F93E1",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Professional V-Neck Top",
    price: 2800,
    originalPrice: 3200,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/491451079_18008815346724332_4393147366511598947_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFPIN4dlvIqyWnRrr-bry7RQA3_a6nl20hADf9rqeXbSOYj0wSJ4vQ70qnXnVGV8taDhtR0X_jxDv_rP4Wg_bug&_nc_ohc=fLo5MY9L2yAQ7kNvwHSRElt&_nc_oc=Adn5nT59_c5nwQ4W2pfBDGtfKYODm-9DbGKcdD3rZW8lvfvTL0-0FxJPcl1ZFlDZRgo&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=67omIC1qy5CVmOjhk51DFg&oh=00_AfQFYZK7iWbyuk3ST_2J-lFHpsA_8dbn-KcvjyKfyY0qvg&oe=687F8C6D",
    rating: 4.9,
    reviews: 89,
    badge: "New",
  },
  {
    id: 3,
    name: "Elastic Waist Scrub Pants",
    price: 3200,
    originalPrice: 3800,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/495866019_18010193606724332_7813781426150353842_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFUbgmRDcFHDgEC7JGs0HSNCJtupFuaO00Im26kW5o7VmNVNAdYZC1mH6AZn5xope92D0NYmQi8W9g8g6RkeBJ&_nc_ohc=gjHMM9PTb4AQ7kNvwHwunpd&_nc_oc=AdkPGtsDDYDpHVy8z0NrXUmMZHpvZk_bx39fzWhDycsH-iGHsW-4NOKocwhB8fjj4_c&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=p9YLJU601B_FtajHG6OQFw&oh=00_AfR5fuXJZfnKiWGkTcpr9_OvEOnY4xgMWUS1S6X2LnRLqg&oe=687F90D2",
    rating: 4.7,
    reviews: 156,
    badge: "Popular",
  },
  {
    id: 4,
    name: "Antimicrobial Scrub Set",
    price: 5200,
    originalPrice: 6000,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/504445908_18014423756724332_7874801041506342832_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMZ9UnYw1XNR22hmQSWXIwCLnc8T5trUYIudzxPm2tRloL5EfHgOJ8lwstGqb4eQpE1FBpENLKC-tpg13Huao-&_nc_ohc=Ysb1_DGp2IoQ7kNvwEIpZRF&_nc_oc=AdlT38D7zWaUB3oAbHaW5Mo3qjt2fD-1LPUth80YugX5ztGstPl_0xgv-sfN-FfZ4W4&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=zVRXE8QCNm5hpv4TpsF_nw&oh=00_AfSpP3zs1HO3DcXVHEph6IY8i1AtV2kmUzPoSPjIcHF5ew&oe=687FDF8C",
    rating: 4.9,
    reviews: 203,
    badge: "Premium",
  },
  // Duplicating products to create 2 rows of 4
  {
    id: 5,
    name: "Classic Comfort Scrub Top",
    price: 3000,
    originalPrice: 3500,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/504519285_18014423663724332_3007188149829511972_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFz--OxPaTakJgIwLY0Lf4VQlmPWOezYJ5CWY9Y57NgnlsnCTBcDDHYYBYD0IuUySGQQK9fC4x1_QvibPwJ0tvN&_nc_ohc=tm0MRJtdXyQQ7kNvwE8lgYu&_nc_oc=AdkV_8a9AuR2O6ibQdI0TcqI1NcZj4aO258zOVm7IUx-raGUBnz7rea-9miTHnCjvqs&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=DL1_Jk24wOSWO1iOjkbnPw&oh=00_AfRbPIhPFcQeVfxiRShPzYYzR8eWqc-3qaCFY-Jbj1DW-w&oe=687FF252",
    rating: 4.7,
    reviews: 95,
    badge: "New Arrival",
  },
  {
    id: 6,
    name: "Stretch Fit Scrub Pants",
    price: 3800,
    originalPrice: 4200,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/504514843_18014423708724332_8535992080632231626_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH87JBt-E2oLo93PZ7pc51BPZTHkXz_hog9lMeRfP-GiHS-c2ta4JLXPGa1_SzYaM6_PZaoentQcfHHv9YxksJf&_nc_ohc=diJUnNFRDMUQ7kNvwETvSpH&_nc_oc=AdlEyN3mo_S04VMiNJY0IIFqC4OtjtLr9CEA25kL7pHSSKRL2fNh5-x2u2zXKpZheCw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=I5IF9IDNYpVjWPLW07xZWw&oh=00_AfTm-Mp3vJSgdnGyie13tEmdpDkthRBxJJx9srtbfTQZZg&oe=687FDF1E",
    rating: 4.8,
    reviews: 110,
    badge: "Limited Edition",
  },
  {
    id: 7,
    name: "Unisex Scrub Jacket",
    price: 4000,
    originalPrice: 4800,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/477724615_18000663743724332_8483099799931340589_n.jpg?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHSCd9A1WCLPHehe9QG0BD4h08U1i9i7o2HTxTWL2LujcNahmtfXG8rv1V7bof6Nuu8tqg5JbmZj8fQ3bl0lV1E&_nc_ohc=pO8mdSZjGroQ7kNvwHtdZ14&_nc_oc=AdlaL8jVdYzTyLyPClqkCNA-YC2LTM7cpQYKFEqiGxFyvthM4rA0gGmI7sUdhSvVbIs&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ZWfZ9gfRFz0Qx0mjvTF8FA&oh=00_AfSeT3xEVt9PXFi1_WszdIqpPR5acUlV7oH_K1oVJtj-wQ&oe=687FEFBF",
    rating: 4.6,
    reviews: 75,
    badge: "Warmth",
  },
  {
    id: 8,
    name: "Comfort Fit Scrub Set",
    price: 4900,
    originalPrice: 5800,
    image:
      "https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/491468740_18009437327724332_6210034551412919321_n.webp?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHOG5jBXLGxAnJkXgu_HZQ-I5FjN8_zpCsjkWM3z_OkK51Np34-CL-ZFj2OHEOFA6xyPzSk_OR7OK4rMEGZMYOb&_nc_ohc=VXz-99bubFcQ7kNvwG4uy5o&_nc_oc=AdnNjJJpgy42jTnx3ycCzYmiq6Jg50PO74UIBouQGGvj9BGZ3FW0J8x69-OEoPPIBrU&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ZAOUbxyQ_grIaty9-9c5cw&oh=00_AfT1qWtRiH2aiC88oPptGjps_bBj7YKsr9vx22Y8XlWVwA&oe=687FEA17",
    rating: 4.9,
    reviews: 180,
    badge: "Best Value",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Kimani",
    role: "Pediatric Nurse",
    content:
      "The quality and comfort of JoJo Scrubs is unmatched. I've been wearing them for 2 years and they still look brand new!",
    rating: 5,
    // Using randomuser.me for a more typical avatar look
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Michael Ochieng",
    role: "Emergency Medicine",
    content:
      "Perfect fit, durable fabric, and the antimicrobial properties give me peace of mind during long shifts.",
    rating: 5,
    // Using randomuser.me for a more typical avatar look
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nurse Grace Wanjiku",
    role: "ICU Specialist",
    content:
      "Finally found scrubs that combine style, comfort, and functionality. The delivery was super fast too!",
    rating: 5,
    // Using randomuser.me for a more typical avatar look
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate next Friday for the promotion
  const getNextFriday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
    let daysUntilFriday = 5 - dayOfWeek;
    if (daysUntilFriday <= 0) {
      daysUntilFriday += 7;
    }
    const nextFriday = new Date(
      today.setDate(today.getDate() + daysUntilFriday)
    );
    nextFriday.setHours(10, 0, 0, 0); // Set to 10:00 AM
    return nextFriday.toISOString();
  };

  const promotionTargetDate = getNextFriday();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO SECTION (REVISED) ===== */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center items-start p-8 lg:p-16 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-6 bg-pink-100 text-pink-700 px-4 py-2 text-sm font-medium border border-pink-200">
              🇰🇪 Proudly Kenyan • Free Delivery Nationwide
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Engineered for Comfort.
            <span className="block bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              Designed for Heroes.
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-slate-600 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover Kenya's finest medical scrubs. Unmatched comfort, durable
            fabrics, and professional style, trusted by healthcare heroes
            nationwide.
          </motion.p>
          <motion.div
            className="flex flex-row flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <Link href="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Story
            </Button>
          </motion.div>
        </div>
        {/* IMAGE CONTAINER FIXES HERE */}
        <div className="relative min-h-[50vh] lg:min-h-screen">
          <Image
            src="https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/488582576_18006617801724332_1087545292500469767_n.jpg?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFihvncD2Or8CBMdQjudX2y2oVvCPuqSu_ahW8I-6pK76BibyAz9FsaxP1Mr2gsNE57RcDBtKhzRN11GB_py6QI&_nc_ohc=DpQMiTeebYMQ7kNvwF4CAxm&_nc_oc=Adk9D4e9mQ_mEbwE9jEWpidf5trQU8Kjlwy6gGz_Boo3EdUAddTZwbDW9AfieMvfd-I&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=WxUr7t4Flke4be3lIpdndw&oh=00_AfQRYl4lNaYVbbhOIZTRNZWulXQnzT-Ou1XKsnlMssGAyA&oe=687FC0AA"
            alt="Confident medical professional smiling while wearing premium scrubs"
            fill
            className="object-cover object-top sm:object-center md:object-center"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-r"></div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Product Varieties</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Promotion */}
      <CountdownTimer
        targetDate={promotionTargetDate}
        promotionMessage="Flash Sale! Get 20% OFF All Scrubs This Friday!"
      />

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular scrubs, loved by healthcare
              professionals across Kenya
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg pb-[125%]">
                      {/* Added aspect ratio for products */}
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill // Use fill with parent aspect ratio
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // Optimized sizes
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          {product.badge}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Quick Add
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <h3 className=" text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <span className="text-2xl  text-pink-600">
                          KSh {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Virtual Try-On Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-center lg:text-left space-y-6">
              <Badge className="bg-pink-600 text-white px-4 py-2 text-sm font-medium rounded-full">
                Innovation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Experience Your Scrubs with{" "}
                <span className="text-pink-600">Virtual Try-On</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Not sure which color or style suits you best? Our cutting-edge
                virtual try-on feature lets you see how JoJo Scrubs look on you
                before you buy.
              </p>
              <Button
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/virtual-try-on">
                  Try It Now
                  <Camera className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://scontent-mba2-1.xx.fbcdn.net/v/t51.75761-15/490767791_18008474696724332_7241502076619063386_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFznufF3xUPPpBBVGdmscXfQkEONTS59QBCQQ41NLn1AHaedUij9p7T6qw28IqRqYgt44FANf9wmL-PWxitaWaY&_nc_ohc=bRAJ_kHD7pEQ7kNvwFq2uuD&_nc_oc=AdlXBW05XBAw6wxAh2kIEXpkxYRESkyULQAtxklk4Da2rE6pFEL58dSNLwIFBDdEmcE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Oc07UeIrlYniO-biftl-AQ&oh=00_AfR9oQrmMdGftJsT8xLm-aW5MQDszNX9vieQpxu2MrCsfA&oe=687FE213" // Placeholder for a virtual try-on interface
                alt="Virtual Try-On Interface"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Play className="h-16 w-16 text-white/80 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New: Product Accessory Carousel */}
      <ProductAccessoryCarousel />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Heroes
            </h2>
            <p className="text-xl text-gray-600">
              See what medical professionals are saying about JoJo Scrubs
            </p>
          </motion.div>

          <motion.div
            className="relative"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white border-0 shadow-xl pt-10">
              {" "}
              {/* Added pt-10 for space for logo */}
              {/* Testimonial Avatar Fix */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-1 rounded-full shadow-lg border-4 border-white z-10">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={
                      testimonials[currentTestimonial].image ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover" // Ensure the image fills the circular space
                    sizes="80px" // Fixed size for the avatar
                  />
                </div>
              </div>
              <CardContent className="p-8 text-center pt-12">
                {" "}
                {/* Adjusted padding-top */}
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-xl mb-2">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </blockquote>
                  <div className="text-sm text-gray-500 mb-4">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-pink-500 fill-current"
                      />
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-pink-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F43F93] text-white">
        {" "}
        {/* Changed background to solid pink */}
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Scrubs?
            </h2>
            <p className="text-xl mb-8 text-white">
              {" "}
              {/* Changed text color to white */}
              Join thousands of healthcare professionals who trust JoJo Scrubs
              for their daily comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#F43F93] px-8 py-4 text-lg font-semibold rounded-full" // Changed button background and text color
                asChild
              >
                <Link href="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#F43F93] px-8 py-4 text-lg font-semibold rounded-full bg-transparent" // Changed hover text color
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
