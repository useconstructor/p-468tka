"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingCart, ArrowRight, Star, ChevronLeft, ChevronRight, Check, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const navLinks = [
    { name: 'Collections', href: '#products' },
    { name: 'Materials', href: '#features' },
    { name: 'Our Story', href: '#about' },
    { name: 'Journal', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const stats = [
    { value: '178+', label: 'Pieces Handcrafted' },
    { value: '32', label: 'Master Artisans' },
    { value: '100%', label: 'Sustainably Sourced' },
    { value: '15+', label: 'Years of Craft' },
  ]

  const featuredProducts = [
    { name: 'Andes Dining Table', price: '$2,450', image: '/images/hero.png' },
    { name: 'Sierra Lounge Chair', price: '$1,680', image: '/images/feature.png' },
    { name: 'Páramo Sideboard', price: '$2,980', image: '/images/hero.png' },
    { name: 'Valle Side Table', price: '$620', image: '/images/feature.png' },
  ]

  const features = [
    { title: 'Responsibly Sourced Wood', description: 'Every piece of timber is traceable and harvested from certified sustainable forests across Colombia.' },
    { title: 'Master Craftsmanship', description: 'Our artisans bring generations of woodworking knowledge to every joint, curve, and finish.' },
    { title: 'Natural Finishes', description: 'We use only plant-based oils and waxes to protect and enhance the natural beauty of wood.' },
    { title: 'Built to Last', description: 'Heirloom quality construction means your piece will be cherished for generations.' },
    { title: 'Custom Dimensions', description: 'Every piece can be tailored to fit your space perfectly.' },
    { title: 'Direct from Workshop', description: 'No middlemen. Fair prices for you, fair wages for artisans.' },
  ]

  const testimonials = [
    { name: 'Interior Designer', location: 'Bogotá', text: 'The craftsmanship is exceptional. My clients are always amazed by the quality and attention to detail in every piece.', rating: 5 },
    { name: 'Homeowner', location: 'Medellín', text: 'Our dining table has become the heart of our home. It is where we gather, share meals, and make memories.', rating: 5 },
    { name: 'Architect', location: 'Cartagena', text: 'Finally, furniture that matches the integrity of our designs. Sustainable, beautiful, and built to last.', rating: 5 },
  ]

  const pricingTiers = [
    { name: 'Ready Made', description: 'Curated pieces from our collection', features: ['Standard dimensions', 'Natural wood finishes', 'Delivery within 4 weeks', 'Care guide included'], cta: 'Browse Collection' },
    { name: 'Semi Custom', description: 'Personalize existing designs', features: ['Custom dimensions', 'Choice of wood species', 'Finish customization', 'Delivery within 8 weeks'], cta: 'Start Customizing', featured: true },
    { name: 'Bespoke', description: 'Fully custom commissions', features: ['Design consultation', 'Unlimited revisions', 'Artisan workshop visit', 'White glove delivery'], cta: 'Request Consultation' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      })
      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF1E8' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl tracking-tight" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Project 1788445793665
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: '#5C3D2E' }}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="#contact">
                <Button className="text-white text-sm px-5 py-2 rounded-full" style={{ backgroundColor: '#C85A54' }}>
                  Commission a Piece
                </Button>
              </Link>
              <button className="relative p-2" style={{ color: '#5C3D2E' }}>
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 text-xs text-white rounded-full flex items-center justify-center" style={{ backgroundColor: '#C85A54' }}>0</span>
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
          <div className="px-4 py-4 space-y-3 bg-white border-t border-[#F5E6D3]">
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
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Handcrafted wooden furniture in sunlit room" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF1E8]/30 via-transparent to-[#FAF1E8]/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
            Furniture with Soul.<br />Crafted by Hand.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: '#8B7355' }}>
            Timeless furniture, handcrafted in small batches by master artisans using responsibly sourced wood and natural materials.
          </p>
          <Link href="#products">
            <Button className="text-white px-10 py-6 text-lg rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#C85A54' }}>
              Explore Collections
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12" style={{ backgroundColor: '#FAF1E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center relative">
                {index > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#8B7355]/30" />}
                <div className="text-4xl md:text-5xl font-serif mb-2" style={{ color: '#8B7355', fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm tracking-wide" style={{ color: '#8B7355' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20" style={{ backgroundColor: '#FAF1E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-serif" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Featured Pieces
            </h2>
            <Link href="#products" className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#C85A54' }}>
              View all collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium" style={{ color: '#5C3D2E' }}>{product.name}</h3>
                  <span style={{ color: '#8B7355' }}>{product.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link href="#products" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#C85A54' }}>
              View all collections <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section id="about" className="py-20" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs tracking-widest uppercase mb-4 block" style={{ color: '#C85A54' }}>Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
                Rooted in Tradition.<br />Designed for Today.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#8B7355' }}>
                We work hand in hand with artisans across Colombia, blending ancestral techniques with timeless design. Every piece tells a story—of place, of people, and of a slower, more intentional way of living.
              </p>
              <Link href="#contact">
                <Button variant="outline" className="rounded-full px-8 py-6 border-2 hover:bg-[#5C3D2E] hover:text-white transition-colors" style={{ borderColor: '#5C3D2E', color: '#5C3D2E' }}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image src="/images/feature.png" alt="Artisan woodworking in Colombian workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section id="features" className="py-20" style={{ backgroundColor: '#FAF1E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Why Choose Handcrafted
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
              Every piece is made with intention, respecting both the craft and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl transition-shadow hover:shadow-lg" style={{ backgroundColor: '#F5E6D3' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#C85A54' }}>
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif mb-3" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B7355' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20" style={{ backgroundColor: '#5C3D2E' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Words from Our Community
            </h2>
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C85A54' }} />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>
              <div className="text-white/80">
                <span className="font-medium">{testimonials[currentTestimonial].name}</span>
                <span className="mx-2">·</span>
                <span>{testimonials[currentTestimonial].location}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20" style={{ backgroundColor: '#FAF1E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
              Ways to Work with Us
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
              From ready made pieces to fully bespoke commissions, find the approach that fits your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl ${tier.featured ? 'ring-2 scale-105' : ''}`}
                style={{ 
                  backgroundColor: tier.featured ? '#5C3D2E' : '#F5E6D3',
                  ringColor: '#C85A54'
                }}
              >
                <h3 className={`text-2xl font-serif mb-2 ${tier.featured ? 'text-white' : ''}`} style={{ color: tier.featured ? 'white' : '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : ''}`} style={{ color: tier.featured ? 'rgba(255,255,255,0.7)' : '#8B7355' }}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${tier.featured ? 'text-white' : ''}`} style={{ color: tier.featured ? 'white' : '#C85A54' }} />
                      <span className={`text-sm ${tier.featured ? 'text-white' : ''}`} style={{ color: tier.featured ? 'white' : '#5C3D2E' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact">
                  <Button 
                    className={`w-full rounded-full py-6 ${tier.featured ? 'text-[#5C3D2E] bg-white hover:bg-white/90' : 'text-white hover:opacity-90'}`}
                    style={{ backgroundColor: tier.featured ? 'white' : '#C85A54' }}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Workshop background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#5C3D2E]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Bring Warmth into Your Space?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you are looking for the perfect dining table or a complete furniture collection, we are here to help you find pieces that tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products">
              <Button className="text-white px-10 py-6 text-lg rounded-full hover:opacity-90" style={{ backgroundColor: '#C85A54' }}>
                Explore Collections
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="px-10 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-[#5C3D2E] transition-colors">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>
                Start a Conversation
              </h2>
              <p className="mb-8" style={{ color: '#8B7355' }}>
                Have questions about a piece or want to discuss a custom commission? We would love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C85A54' }}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a href="mailto:hola@mueblesartesanales.co" className="hover:opacity-70 transition-opacity" style={{ color: '#5C3D2E' }}>
                    hola@mueblesartesanales.co
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C85A54' }}>
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span style={{ color: '#5C3D2E' }}>Contact us for phone details</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C85A54' }}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span style={{ color: '#5C3D2E' }}>Colombia</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#C85A54' }}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2" style={{ color: '#5C3D2E', fontFamily: 'Playfair Display, serif' }}>Thank You!</h3>
                  <p style={{ color: '#8B7355' }}>We will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#5C3D2E' }}>Name</label>
                    <Input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border-[#8B7355]/30 focus:border-[#C85A54] focus:ring-[#C85A54]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#5C3D2E' }}>Email</label>
                    <Input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full border-[#8B7355]/30 focus:border-[#C85A54] focus:ring-[#C85A54]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#5C3D2E' }}>Message</label>
                    <Textarea
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full border-[#8B7355]/30 focus:border-[#C85A54] focus:ring-[#C85A54] min-h-[120px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <Button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="w-full text-white py-6 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                    style={{ backgroundColor: '#C85A54' }}
                  >
                    {formStatus === 'loading' ? 'Enviando...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: '#5C3D2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="font-serif text-xl text-white mb-4 block" style={{ fontFamily: 'Playfair Display, serif' }}>
                Project 1788445793665
              </Link>
              <p className="text-white/70 text-sm mb-6">
                Handcrafted furniture with soul, made in Colombia.
              </p>
              <div className="flex gap-4">
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
              <h4 className="text-white font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">All Collections</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Tables</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Seating</Link></li>
                <li><Link href="#products" className="text-white/70 hover:text-white text-sm transition-colors">Storage</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-white/70 hover:text-white text-sm transition-colors">Our Story</Link></li>
                <li><Link href="#features" className="text-white/70 hover:text-white text-sm transition-colors">Materials</Link></li>
                <li><Link href="#testimonials" className="text-white/70 hover:text-white text-sm transition-colors">Journal</Link></li>
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">FAQ</Link></li>
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Shipping</Link></li>
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Returns</Link></li>
                <li><Link href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Care Guide</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Project 1788445793665. All rights reserved.
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