import { useState, useEffect, useCallback } from "react"
import { Link } from "@inertiajs/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/puskesmas-light.jpeg",
    title: "Selamat Datang di UPT Puskesmas Kwanyar",
    subtitle: "Melayani Kesehatan Masyarakat dengan Sepenuh Hati",
    cta: "Lihat Layanan",
    ctaLink: "/services",
  },
  {
    id: 2,
    image: "/images/formal-achivement.jpeg",
    title: "Layanan Kesehatan Berkualitas",
    subtitle: "Tim medis profesional siap memberikan pelayanan terbaik untuk Anda dan keluarga",
    cta: "Tentang Kami",
    ctaLink: "/profile/about",
  },
  {
    id: 3,
    image: "/images/puskesmas-night.jpeg",
    title: "Program Kesehatan Masyarakat",
    subtitle: "Berbagai program inovatif untuk meningkatkan kualitas kesehatan komunitas",
    cta: "Lihat Kegiatan",
    ctaLink: "/information/activities",
  },
  {
    id: 4,
    image: "/images/formal.jpeg",
    title: "Kesehatan Ibu dan Anak",
    subtitle: "Program khusus untuk kesejahteraan ibu hamil, menyusui, dan tumbuh kembang anak",
    cta: "Pelajari Lebih Lanjut",
    ctaLink: "/services",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image || "/images/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-2xl">
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl text-white/90 mb-8 leading-relaxed transition-all duration-700 delay-400 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={`transition-all duration-700 delay-600 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 rounded-full shadow-lg"
                  >
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          prevSlide()
          setIsAutoPlaying(false)
        }}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => {
          nextSlide()
          setIsAutoPlaying(false)
        }}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-10 bg-white" : "w-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}