import { useState, useEffect, useCallback } from "react"
import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { ArrowLeft, Clock, ImageIcon, CalendarDays, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ScheduleItem {
  label: string;
  time: string;
}

interface DetailedItem {
  name: string;
  images: string[];
  desc?: string;
}

interface ServiceData {
  slug?: string;
  title: string;
  description: string;
  schedule?: string | ScheduleItem[]; 
  points?: string[];
  images: string[];
  detailed_items?: DetailedItem[];
}

const ManajemenImageSlider = ({ images }: { images: string[] }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    
    const slideImages = images && images.length > 0 ? images : ["/images/placeholder.svg"]

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, [slideImages.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
    }, [slideImages.length])

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, nextSlide])

    return (
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg mb-10 group bg-gray-100">
            {slideImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800?text=Foto+Manajemen"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
            ))}

            <button
                onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slideImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                            index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function ServiceDetail({ service }: { service: ServiceData }) {
  const isDetailedLayout = service.detailed_items && service.detailed_items.length > 0;
  const isManajemen = service.slug === 'manajemen-puskesmas';
  
  return (
    <PublicLayout>
      <Head title={service.title} />

      <main className="min-h-screen bg-slate-50">
        
        <section className="pt-32 pb-12 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <Link 
                href="/services" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Layanan
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {service.title}
            </h1>
            
            {isManajemen && (
                <p className="text-white/90 text-lg max-w-3xl leading-relaxed">
                    {service.description}
                </p>
            )}

            {service.schedule && !isManajemen && (
                <div className="mt-4">
                  {Array.isArray(service.schedule) ? (
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-md">
                        <div className="flex items-center gap-2 mb-3 text-yellow-300 border-b border-white/10 pb-2">
                            <CalendarDays className="w-5 h-5" />
                            <span className="font-bold">Jadwal Pelayanan</span>
                        </div>
                        <ul className="space-y-2">
                            {service.schedule.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-start text-sm gap-4">
                                    <span className="text-white/90 font-medium">{item.label}</span>
                                    <span className="text-white font-bold text-right bg-white/20 px-2 py-0.5 rounded text-xs">
                                        {item.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-white/90 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                        <Clock className="w-4 h-4 text-yellow-300" />
                        <span className="font-bold text-yellow-300">Jadwal: {service.schedule}</span>
                    </div>
                  )}
                </div>
            )}
            
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 lg:px-8">
            
            {isManajemen ? (
                <div className="max-w-5xl mx-auto">
                    
                    <ManajemenImageSlider images={service.images} />

                    {service.points && (
                        <div>
                             <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Lingkup Manajemen</h3>
                             <div className="grid md:grid-cols-2 gap-4">
                                {service.points.map((pt, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group cursor-pointer hover:border-primary/50">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-gray-800 text-lg">{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            ) : isDetailedLayout ? (
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12 text-center">
                         <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Layanan</h2>
                         <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>

                    <div className="space-y-12">
                        {service.detailed_items?.map((item, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 flex flex-col md:flex-row">
                                <div className="md:w-1/2 bg-gray-100 p-2">
                                    <div className={`grid gap-2 h-full ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                        {item.images.map((img, imgIdx) => (
                                            <div 
                                                key={imgIdx} 
                                                className={`relative overflow-hidden rounded-xl bg-gray-200 ${
                                                    item.images.length === 3 && imgIdx === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                                                } ${item.images.length === 1 ? 'h-64 md:h-full' : ''}`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${item.name} ${imgIdx}`}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400?text=Foto"; }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">{item.name}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-lg pl-14 border-l-2 border-gray-100 ml-5">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Layanan</h3>
                            <p className="text-gray-600 leading-relaxed text-lg text-left">
                                {service.description}
                            </p>
                            
                            {service.points && (
                                <ul className="mt-4 space-y-2 text-left">
                                    {service.points.map((p, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <Badge variant="outline" className="text-primary border-primary bg-primary/5">
                                    Tersedia untuk Pasien BPJS & Umum
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <ImageIcon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold text-gray-900">Galeri Kegiatan & Fasilitas</h3>
                        </div>

                        {service.images && service.images.length > 0 ? (
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.images.map((img, index) => (
                                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-md aspect-video bg-gray-200 cursor-pointer">
                                        <img 
                                            src={img} 
                                            alt={`${service.title} ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/94a3b8?text=Foto+Layanan";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="h-40 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300">
                                <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                                <p>Dokumentasi foto belum tersedia.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>

      </main>
    </PublicLayout>
  )
}