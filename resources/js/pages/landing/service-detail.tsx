import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { ArrowLeft, Clock, ImageIcon, CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ScheduleItem {
  label: string;
  time: string;
}

interface ServiceData {
  title: string;
  description: string;
  schedule?: string | ScheduleItem[]; 
  points?: string[];
  images: string[];
}

export default function ServiceDetail({ service }: { service: ServiceData }) {
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
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {service.title}
            </h1>
            
            {service.schedule && (
                <>
                  {Array.isArray(service.schedule) ? (
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-md">
                        <div className="flex items-center gap-2 mb-3 text-yellow-300 border-b border-white/10 pb-2">
                            <CalendarDays className="w-5 h-5" />
                            <span className="font-bold">Jadwal Praktik & Pelayanan</span>
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
                </>
            )}
            
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Layanan</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {service.description}
                        </p>
                        
                        {service.points && (
                            <ul className="mt-4 space-y-2">
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
        </section>

      </main>
    </PublicLayout>
  )
}