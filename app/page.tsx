"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingCart, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const navLinks = [
    { name: 'Collections', href: '#products' },
    { name: 'Our Story', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const featuredProducts = [
    { name: 'Andes Dining Table', price: '$2,450', image: '/images/hero.png' },
    { name: 'Sierra Lounge Chair', price: '$1,680', image: '/images/feature.png' },
    { name: 'Páramo Sideboard', price: '$2,980', image: '/images/hero.png' },
    { name: 'Valle Side Table', price: '$620', image: '/images/feature.png' },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF1E8' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="font-serif text-2xl tracking-wide" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Muebles Artesanales
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium tracking-wide transition-colors hover:opacity-70" style={{ color: '#5C3D2E' }}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link href="#contact">
                <Button className="text-white text-sm px-6 py-2.5 rounded-full" style={{ backgroundColor: '#C85A54' }}>
                  Commission a Piece
                </Button>
              </Link>
              <button className="relative p-2" style={{ color: '#5C3D2E' }}>
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" style={{ color: '#5C3D2E' }} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileNavOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-3 bg-white border-t border-[#F5E6D3]">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block py-2 text-sm font-medium" style={{ color: '#5C3D2E' }} onClick={() => setMobileNavOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMobileNavOpen(false)}>
              <Button className="w-full text-white mt-4 rounded-full" style={{ backgroundColor: '#C85A54' }}>
                Commission a Piece
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Handcrafted wooden furniture in sunlit room" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF1E8]/40 via-transparent to-[#FAF1E8]/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
            Furniture with Soul.
            <br />
            Crafted by Hand.
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#8B7355' }}>
            Timeless furniture, handcrafted in small batches by master artisans using responsibly sourced wood and natural materials.
          </p>
          <Link href="#products">
            <Button className="text-white px-10 py-6 text-base rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#C85A54' }}>
              Explore Collections
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24" style={{ backgroundColor: '#FAF1E8' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-14">
            <h2 className="text-3xl md:text-4xl font-serif" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Featured Pieces
            </h2>
            <Link href="#products" className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#C85A54' }}>
              View all collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-5 bg-[#F5E6D3]">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-medium text-base mb-1" style={{ color: '#5C3D2E' }}>{product.name}</h3>
                <span className="text-sm" style={{ color: '#8B7355' }}>{product.price}</span>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-10 text-center">
            <Link href="#products" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#C85A54' }}>
              View all collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-24" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
                Rooted in Tradition.
                <br />
                Designed for Today.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#8B7355' }}>
                We work hand in hand with artisans across Colombia, blending ancestral techniques with timeless design. Every piece tells a story—of place, of people, and of a slower, more intentional way of living.
              </p>
              <Link href="#contact">
                <Button variant="outline" className="rounded-full px-8 py-5 border-2 hover:bg-[#5C3D2E] hover:text-white transition-colors" style={{ borderColor: '#5C3D2E', color: '#5C3D2E' }}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image src="/images/feature.png" alt="Artisan woodworking in Colombian workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Workshop background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#5C3D2E]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Bring Warmth into Your Space?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are looking for the perfect dining table or a complete furniture collection, we are here to help you find pieces that tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products">
              <Button className="text-white px-10 py-6 text-base rounded-full hover:opacity-90" style={{ backgroundColor: '#C85A54' }}>
                Explore Collections
              </Button>
            </Link>
            <Link href="mailto:hola@mueblesartesanales.co">
              <Button variant="outline" className="px-10 py-6 text-base rounded-full border-2 border-white text-white hover:bg-white hover:text-[#5C3D2E] transition-colors">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#5C3D2E' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/" className="font-serif text-2xl text-white mb-6 block" style={{ fontFamily: 'Playfair Display, serif' }}>
                Muebles Artesanales
              </Link>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">
                Handcrafted furniture with soul, made in Colombia.
              </p>
              <div className="flex gap-5">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-5">Shop</h4>
              <ul className="space-y-3">
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">All Collections</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Tables</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Seating</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Storage</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-5">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#about" className="text-white/70 hover:text-white text-sm transition-colors">Our Story</Link></li>
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Muebles Artesanales. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
