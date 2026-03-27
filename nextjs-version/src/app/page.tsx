'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, ShoppingCart, Shield, Zap, Clock, 
  Star, MessageCircle, Copy, Check, ExternalLink, ChevronLeft, 
  ChevronRight, Phone, Mail, MapPin, Instagram, Facebook,
  Package, Users, Award, HeadphonesIcon, ArrowRight, Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'

// Product Data
interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  isBestSeller?: boolean
  prices: {
    '1 Minggu': number
    '1 Bulan': number
    '3 Bulan': number
    '6 Bulan': number
  }
}

const products: Product[] = [
  // Editing
  {
    id: 'capcut',
    name: 'CapCut Pro',
    category: 'Editing',
    image: '/products/capcut.png',
    description: 'Edit video dengan efek AI lengkap untuk konten TikTok',
    isBestSeller: true,
    prices: { '1 Minggu': 8000, '1 Bulan': 20000, '3 Bulan': 55000, '6 Bulan': 100000 }
  },
  {
    id: 'premiere',
    name: 'Adobe Premiere Pro',
    category: 'Editing',
    image: '/products/premiere.png',
    description: 'Software editing video standar industri profesional',
    prices: { '1 Minggu': 25000, '1 Bulan': 65000, '3 Bulan': 180000, '6 Bulan': 350000 }
  },
  {
    id: 'aftereffects',
    name: 'Adobe After Effects',
    category: 'Editing',
    image: '/products/premiere.png',
    description: 'Software efek visual dan animasi profesional',
    prices: { '1 Minggu': 25000, '1 Bulan': 65000, '3 Bulan': 180000, '6 Bulan': 350000 }
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Editing',
    image: '/products/premiere.png',
    description: 'Software editing foto paling powerful di dunia',
    prices: { '1 Minggu': 20000, '1 Bulan': 55000, '3 Bulan': 150000, '6 Bulan': 280000 }
  },
  {
    id: 'lightroom',
    name: 'Adobe Lightroom',
    category: 'Editing',
    image: '/products/premiere.png',
    description: 'Edit warna foto dengan preset aesthetic',
    prices: { '1 Minggu': 15000, '1 Bulan': 40000, '3 Bulan': 110000, '6 Bulan': 200000 }
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Produktivitas',
    image: '/products/canva.png',
    description: 'Desain grafis mudah dengan ribuan template',
    isBestSeller: true,
    prices: { '1 Minggu': 10000, '1 Bulan': 25000, '3 Bulan': 70000, '6 Bulan': 130000 }
  },
  // Streaming Musik
  {
    id: 'spotify',
    name: 'Spotify Premium',
    category: 'Musik',
    image: '/products/spotify.png',
    description: 'Streaming musik tanpa iklan dengan playlist AI',
    isBestSeller: true,
    prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
  },
  {
    id: 'youtubemusic',
    name: 'YouTube Music',
    category: 'Musik',
    image: '/products/youtube-music.png',
    description: 'Streaming musik + video YouTube tanpa iklan',
    prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
  },
  {
    id: 'applemusic',
    name: 'Apple Music',
    category: 'Musik',
    image: '/products/youtube-music.png',
    description: 'Streaming musik kualitas tinggi untuk audiophile',
    prices: { '1 Minggu': 8000, '1 Bulan': 20000, '3 Bulan': 55000, '6 Bulan': 100000 }
  },
  // Streaming Video
  {
    id: 'netflix',
    name: 'Netflix Premium',
    category: 'Streaming',
    image: '/products/netflix.png',
    description: 'Film & series original berkualitas tinggi',
    isBestSeller: true,
    prices: { '1 Minggu': 15000, '1 Bulan': 35000, '3 Bulan': 95000, '6 Bulan': 180000 }
  },
  {
    id: 'disney',
    name: 'Disney+ Hotstar',
    category: 'Streaming',
    image: '/products/netflix.png',
    description: 'Film Disney, Marvel, Star Wars & anime',
    prices: { '1 Minggu': 10000, '1 Bulan': 25000, '3 Bulan': 70000, '6 Bulan': 130000 }
  },
  {
    id: 'viu',
    name: 'Viu Premium',
    category: 'Streaming',
    image: '/products/netflix.png',
    description: 'Drama Asia dengan subtitle cepat',
    prices: { '1 Minggu': 5000, '1 Bulan': 15000, '3 Bulan': 40000, '6 Bulan': 75000 }
  },
  // AI
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    category: 'AI',
    image: '/products/chatgpt.png',
    description: 'AI chatbot dengan akses GPT-4 dan fitur coding',
    isBestSeller: true,
    prices: { '1 Minggu': 35000, '1 Bulan': 85000, '3 Bulan': 240000, '6 Bulan': 450000 }
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'AI',
    image: '/products/chatgpt.png',
    description: 'AI generator gambar dengan hasil realistis',
    prices: { '1 Minggu': 40000, '1 Bulan': 100000, '3 Bulan': 280000, '6 Bulan': 520000 }
  },
  {
    id: 'notion',
    name: 'Notion AI',
    category: 'AI',
    image: '/products/chatgpt.png',
    description: 'All-in-one workspace dengan fitur AI',
    prices: { '1 Minggu': 15000, '1 Bulan': 40000, '3 Bulan': 110000, '6 Bulan': 200000 }
  },
  // Gaming
  {
    id: 'steam',
    name: 'Steam Wallet',
    category: 'Gaming',
    image: '/products/netflix.png',
    description: 'Balance untuk beli game di Steam',
    prices: { '1 Minggu': 50000, '1 Bulan': 150000, '3 Bulan': 400000, '6 Bulan': 750000 }
  }
]

const categories = ['Semua', 'Editing', 'Musik', 'Streaming', 'AI', 'Produktivitas', 'Gaming']

const testimonials = [
  {
    name: 'Rizky Pratama',
    avatar: 'R',
    rating: 5,
    comment: 'Pelayanan cepat banget! 5 menit udah dapat akun Netflix. Recommended!',
    product: 'Netflix Premium'
  },
  {
    name: 'Dewi Anggraini',
    avatar: 'D',
    rating: 5,
    comment: 'Sudah langganan Canva Pro 6 bulan, tidak pernah ada masalah. Mantap!',
    product: 'Canva Pro'
  },
  {
    name: 'Budi Santoso',
    avatar: 'B',
    rating: 5,
    comment: 'Harga termurah dibanding yang lain, respon CS juga ramah. Top!',
    product: 'Spotify Premium'
  },
  {
    name: 'Siti Nurhaliza',
    avatar: 'S',
    rating: 5,
    comment: 'ChatGPT Plus works perfectly untuk kerja saya. Worth it banget!',
    product: 'ChatGPT Plus'
  }
]

const heroSlides = [
  {
    title: 'Akun Premium Murah, Aman & Bergaransi',
    subtitle: 'Dapatkan akun premium aplikasi favorit Anda dengan harga terjangkau dan proses instan',
    image: '/hero-banner.png'
  },
  {
    title: 'AI Tools Premium Tersedia!',
    subtitle: 'ChatGPT Plus, Midjourney, dan AI tools lainnya dengan harga spesial',
    image: '/hero-banner.png'
  },
  {
    title: 'Streaming Tanpa Batas',
    subtitle: 'Netflix, Disney+, Spotify dan masih banyak lagi dalam satu tempat',
    image: '/hero-banner.png'
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Product prices state - initialize with default values
  const getDefaultDurations = () => {
    const initial: Record<string, string> = {}
    products.forEach(p => {
      initial[p.id] = '1 Bulan'
    })
    return initial
  }
  const [productDurations, setProductDurations] = useState<Record<string, string>>(getDefaultDurations)

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Get filtered products
  const filteredProducts = selectedCategory === 'Semua' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  // Display products (limit to 6 if not showing all)
  const displayProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 6)

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  // Handle WhatsApp order
  const handleOrder = (product: Product) => {
    const duration = productDurations[product.id] || '1 Bulan'
    const price = product.prices[duration as keyof typeof product.prices]
    
    const message = encodeURIComponent(
      `Halo INIFIRLI STORE, saya ingin membeli:\n\n` +
      `Produk: ${product.name}\n` +
      `Durasi: ${duration}\n` +
      `Total: ${formatPrice(price)}\n\n` +
      `Saya akan bayar via Dana / QRIS`
    )
    
    window.open(`https://wa.me/628516930771?text=${message}`, '_blank')
    
    toast({
      title: 'Redirecting ke WhatsApp...',
      description: `Pesanan ${product.name} sedang diproses`,
    })
  }

  // Copy Dana number
  const copyDanaNumber = () => {
    navigator.clipboard.writeText('082143041255')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: 'Berhasil disalin!',
      description: 'Nomor Dana telah disalin ke clipboard',
    })
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">INIFIRLI STORE</h2>
          <p className="text-gray-400 mt-2">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a 
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center glow-red">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text">INIFIRLI STORE</span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Produk', 'Pembayaran', 'Kontak'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Button className="btn-glow bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0">
                <a href="#produk">Beli Sekarang</a>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-3">
                {['Home', 'Produk', 'Pembayaran', 'Kontak'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button className="w-full btn-glow bg-gradient-to-r from-red-500 to-orange-500">
                  <a href="#produk" onClick={() => setMobileMenuOpen(false)}>Beli Sekarang</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30">
                🔥 Promo Spesial Hari Ini!
              </Badge>
              
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  <span className="gradient-text glow-text">{heroSlides[currentSlide].title}</span>
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg"
                  className="btn-glow bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 text-lg px-8 py-6"
                >
                  <a href="#produk" className="flex items-center gap-2">
                    Beli Sekarang <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <a href="https://wa.me/628516930771" target="_blank" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Hubungi Kami
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { icon: Users, value: '10K+', label: 'Customer' },
                  { icon: Package, value: '50+', label: 'Produk' },
                  { icon: Star, value: '4.9', label: 'Rating' }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="text-center p-4 rounded-xl glass"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image/Banner */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass p-2">
                <img
                  src={heroSlides[currentSlide].image}
                  alt="Hero Banner"
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === idx 
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Pilih <span className="gradient-text">INIFIRLI STORE</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik untuk kebutuhan akun premium Anda
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Proses Cepat', desc: 'Akun dikirim dalam hitungan menit setelah pembayaran dikonfirmasi' },
              { icon: Shield, title: 'Aman & Terpercaya', desc: 'Garansi akun aktif dan proteksi dari banned atau suspend' },
              { icon: HeadphonesIcon, title: 'Fast Respon', desc: 'Customer service siap membantu 24/7 via WhatsApp' },
              { icon: Award, title: 'Harga Terjangkau', desc: 'Harga kompetitif dengan kualitas layanan premium' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4 glow-red">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section id="produk" className="py-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-red-500/10 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30">
              Katalog Produk
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilih <span className="gradient-text">Akun Premium</span> Anda
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Berbagai akun premium aplikasi populer dengan harga terjangkau
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setShowAllProducts(false)
                }}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white glow-red'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product, idx) => {
                const duration = productDurations[product.id] || '1 Bulan'
                const price = product.prices[duration as keyof typeof product.prices]

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Card className="glass border-white/10 overflow-hidden card-hover h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        
                        {product.isBestSeller && (
                          <Badge className="absolute top-3 right-3 badge-bestseller text-white border-0">
                            🔥 BEST SELLER
                          </Badge>
                        )}

                        <Badge className="absolute top-3 left-3 bg-black/50 text-gray-300 border-white/10">
                          {product.category}
                        </Badge>
                      </div>

                      <CardHeader className="pb-2">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
                      </CardHeader>

                      <CardContent className="flex-1">
                        {/* Duration Select */}
                        <div className="mb-4">
                          <label className="text-sm text-gray-400 mb-2 block">Pilih Durasi:</label>
                          <select
                            value={duration}
                            onChange={(e) => setProductDurations(prev => ({ ...prev, [product.id]: e.target.value }))}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                          >
                            <option value="1 Minggu" className="bg-gray-900">1 Minggu</option>
                            <option value="1 Bulan" className="bg-gray-900">1 Bulan</option>
                            <option value="3 Bulan" className="bg-gray-900">3 Bulan</option>
                            <option value="6 Bulan" className="bg-gray-900">6 Bulan</option>
                          </select>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-400">Total Harga:</p>
                            <p className="text-2xl font-bold gradient-text">{formatPrice(price)}</p>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button
                          onClick={() => handleOrder(product)}
                          className="w-full btn-glow bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Beli Sekarang
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          {filteredProducts.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Button
                onClick={() => setShowAllProducts(!showAllProducts)}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8"
              >
                {showAllProducts ? 'Tampilkan Lebih Sedikit' : `Tampilkan Lebih Banyak (${filteredProducts.length - 6} lagi)`}
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showAllProducts ? 'rotate-180' : ''}`} />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30">
              Testimoni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apa Kata <span className="gradient-text">Customer Kami</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ribuan customer puas dengan layanan kami
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.product}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm italic">&quot;{item.comment}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="pembayaran" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30">
              Pembayaran
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metode <span className="gradient-text">Pembayaran</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pilih metode pembayaran yang paling nyaman untuk Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Dana */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dana</h3>
                  <p className="text-gray-400">E-Wallet</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-400 mb-1">Nomor Dana:</p>
                <p className="text-2xl font-mono font-bold">082143041255</p>
                <p className="text-sm text-gray-400 mt-2">a.n. Firlian Agna Syahrial</p>
              </div>

              <Button
                onClick={copyDanaNumber}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Tersalin!' : 'Salin Nomor Dana'}
              </Button>
            </motion.div>

            {/* QRIS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">QRIS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">QRIS</h3>
                  <p className="text-gray-400">Semua E-Wallet & M-Banking</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-center">
                <img
                  src="/qris.jpg"
                  alt="QRIS Code"
                  className="w-48 h-48 object-contain"
                />
              </div>

              <p className="text-center text-gray-400 text-sm">
                Scan QR Code di atas untuk pembayaran via QRIS
              </p>
            </motion.div>
          </div>

          {/* Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Setelah Transfer?</h3>
              <p className="text-gray-400 mb-4">
                Kirim bukti pembayaran ke WhatsApp kami untuk proses lebih cepat
              </p>
              <Button
                className="btn-glow bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0"
              >
                <a href="https://wa.me/628516930771" target="_blank" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Kirim Bukti via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 relative bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30">
              Kontak
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ada pertanyaan? Jangan ragu untuk menghubungi kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: 'WhatsApp', value: '08516930771', link: 'https://wa.me/628516930771' },
              { icon: Mail, title: 'Email', value: 'inifirlistore@gmail.com', link: 'mailto:inifirlistore@gmail.com' },
              { icon: Instagram, title: 'Instagram', value: '@inifirli.store', link: 'https://instagram.com/inifirli.store' }
            ].map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center card-hover block"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4 glow-red">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">INIFIRLI STORE</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Platform jual beli akun premium digital terpercaya dengan harga terjangkau, 
                proses cepat, dan garansi akun aktif.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/inifirli.store" target="_blank" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/628516930771" target="_blank" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Produk', 'Pembayaran', 'Kontak'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Produk Populer</h4>
              <ul className="space-y-2">
                {['Netflix Premium', 'Spotify Premium', 'Canva Pro', 'CapCut Pro', 'ChatGPT Plus'].map((product) => (
                  <li key={product}>
                    <a href="#produk" className="text-gray-400 hover:text-white transition-colors">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} INIFIRLI STORE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
