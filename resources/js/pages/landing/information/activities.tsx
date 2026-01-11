import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Search, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const allActivities = [
  {
    id: 1,
    title: "Posyandu Balita Desa Maju",
    date: "5 Januari 2026",
    images: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    category: "Posyandu",
    description:
      "Kegiatan penimbangan dan pemeriksaan kesehatan balita rutin bulanan di Desa Maju. Diikuti oleh 45 balita dengan pemeriksaan tumbuh kembang dan pemberian vitamin.",
    location: "Balai Desa Maju",
  },
  {
    id: 2,
    title: "Vaksinasi COVID-19 Booster",
    date: "28 Desember 2025",
    images: [
      "/images/placeholder.svg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    category: "Imunisasi",
    description:
      "Program vaksinasi booster COVID-19 untuk masyarakat umum. Total 250 warga berhasil divaksin dalam kegiatan ini.",
    location: "Aula Puskesmas",
  },
  {
    id: 3,
    title: "Penyuluhan Kesehatan Jiwa",
    date: "20 Desember 2025",
    images: [
      "/images/health-education-seminar-with-community-members.jpg",
      "/images/placeholder.svg"
    ],
    category: "Edukasi",
    description:
      "Sosialisasi pentingnya kesehatan mental di era modern. Materi meliputi pengenalan gejala stress, depresi, dan cara penanganannya.",
    location: "Aula Kelurahan",
  },
  {
    id: 4,
    title: "Senam Sehat Lansia",
    date: "15 Desember 2025",
    images: ["/images/placeholder.svg", "/images/placeholder.svg"],
    category: "Olahraga",
    description:
      "Program kebugaran rutin untuk warga lansia setiap minggu. Diikuti oleh 60 lansia dengan instruktur bersertifikat.",
    location: "Lapangan Desa",
  },
  {
    id: 5,
    title: "Pemeriksaan Gratis PTM",
    date: "10 Desember 2025",
    images: [
      "/images/doctor-checking-blood-pressure-of-patient.jpg",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    category: "Pemeriksaan",
    description:
      "Screening penyakit tidak menular meliputi pemeriksaan tekanan darah, gula darah, dan kolesterol untuk 180 warga.",
    location: "Puskesmas",
  },
  {
    id: 6,
    title: "Donor Darah PMI",
    date: "5 Desember 2025",
    images: ["/images/placeholder.svg", "/images/placeholder.svg"],
    category: "Sosial",
    description:
      "Kegiatan donor darah kerjasama dengan PMI. Berhasil mengumpulkan 75 kantong darah dari pendonor sukarela.",
    location: "Aula Puskesmas",
  },
]

const categoryColors: Record<string, string> = {
  Posyandu: "bg-pink-500",
  Imunisasi: "bg-blue-500",
  Edukasi: "bg-purple-500",
  Olahraga: "bg-green-500",
  Pemeriksaan: "bg-amber-500",
  Sosial: "bg-red-500",
}

export default function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<(typeof allActivities)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredActivities = allActivities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? activity.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(allActivities.map((a) => a.category))]

  const openLightbox = (activity: (typeof allActivities)[0]) => {
    setSelectedActivity(activity)
    setCurrentImageIndex(0)
  }

  const closeLightbox = () => {
    setSelectedActivity(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedActivity.images.length)
    }
  }

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedActivity.images.length) % selectedActivity.images.length)
    }
  }

  return (
    <PublicLayout>
      <Head title="Kegiatan - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Kegiatan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Dokumentasi kegiatan dan program kesehatan masyarakat
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari kegiatan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  Semua
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => openLightbox(activity)}>
                    <img
                      src={activity.images[0] || "/images/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <Badge className={`absolute top-4 left-4 ${categoryColors[activity.category]} text-white border-0`}>
                      {activity.category}
                    </Badge>
                    {activity.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        +{activity.images.length - 1} foto
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg line-clamp-2">{activity.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {activity.date}
                      <span className="mx-2">•</span>
                      {activity.location}
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">{activity.description}</p>
                    <Button variant="link" className="px-0 mt-2 text-primary" onClick={() => openLightbox(activity)}>
                      Lihat Galeri Foto
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {filteredActivities.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground">Tidak ada kegiatan yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {selectedActivity && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedActivity.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div className="relative max-w-5xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedActivity.images[currentImageIndex] || "/images/placeholder.svg"}
                alt={selectedActivity.title}
                className="object-contain w-full h-full max-h-[85vh] rounded-lg mx-auto"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <Badge className={`${categoryColors[selectedActivity.category]} text-white border-0 mb-2`}>
                  {selectedActivity.category}
                </Badge>
                <h3 className="text-white text-xl font-semibold">{selectedActivity.title}</h3>
                <p className="text-white/80 text-sm mt-1">
                  {selectedActivity.date} • {selectedActivity.location}
                </p>
                {selectedActivity.images.length > 1 && (
                  <div className="flex gap-2 mt-4">
                    {selectedActivity.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? "w-6 bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>
    </PublicLayout>
  )
}