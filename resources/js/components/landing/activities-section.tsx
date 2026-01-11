import { useState } from "react"
import { Link } from "@inertiajs/react"
import { Calendar, ArrowRight, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    title: "Posyandu Balita Desa Maju",
    date: "5 Januari 2026",
    image: "/images/community-health-workers-weighing-baby-at-posyandu.jpg",
    category: "Posyandu",
    description: "Kegiatan penimbangan dan pemeriksaan kesehatan balita rutin bulanan",
  },
  {
    id: 2,
    title: "Vaksinasi COVID-19 Booster",
    date: "28 Desember 2025",
    image: "/images/nurse-giving-vaccine-injection-to-patient.jpg",
    category: "Imunisasi",
    description: "Program vaksinasi booster untuk masyarakat umum",
  },
  {
    id: 3,
    title: "Penyuluhan Kesehatan Jiwa",
    date: "20 Desember 2025",
    image: "/images/health-education-seminar-with-community-members.jpg",
    category: "Edukasi",
    description: "Sosialisasi pentingnya kesehatan mental di era modern",
  },
  {
    id: 4,
    title: "Senam Sehat Lansia",
    date: "15 Desember 2025",
    image: "/images/elderly-people-doing-exercise-together-outdoor.jpg",
    category: "Olahraga",
    description: "Program kebugaran rutin untuk warga lansia",
  },
  {
    id: 5,
    title: "Pemeriksaan Gratis PTM",
    date: "10 Desember 2025",
    image: "/images/doctor-checking-blood-pressure-of-patient.jpg",
    category: "Pemeriksaan",
    description: "Screening penyakit tidak menular untuk warga",
  },
  {
    id: 6,
    title: "Donor Darah PMI",
    date: "5 Desember 2025",
    image: "/images/blood-donation-event-with-volunteers.jpg",
    category: "Sosial",
    description: "Kegiatan donor darah kerjasama dengan PMI",
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

export function ActivitiesSection() {
  const [selectedImage, setSelectedImage] = useState<(typeof activities)[0] | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Kegiatan Terbaru
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Dokumentasi Kegiatan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Berbagai kegiatan dan program kesehatan yang telah kami laksanakan untuk masyarakat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
            >
              <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(activity)}>
                <img
                  src={activity.image || "/images/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className={`absolute top-4 left-4 ${categoryColors[activity.category]} text-white border-0`}>
                  {activity.category}
                </Badge>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-white/90 text-foreground rounded-full text-sm font-medium">
                    Lihat Foto
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {activity.date}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/information/activities">
              Lihat Semua Kegiatan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <img
              src={selectedImage.image || "/images/placeholder.svg"}
              alt={selectedImage.title}
              className="object-contain w-full h-full max-h-[80vh] rounded-lg mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <Badge className={`${categoryColors[selectedImage.category]} text-white border-0 mb-2`}>
                {selectedImage.category}
              </Badge>
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm mt-1">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}