import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Search, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Activity {
  id: number;
  title: string;
  date: string;
  images: string[] | null;
  category: string;
  description: string;
  location: string;
}

const categoryColors: Record<string, string> = {
  Posyandu: "bg-pink-500",
  Imunisasi: "bg-blue-500",
  Edukasi: "bg-purple-500",
  Olahraga: "bg-green-500",
  Pemeriksaan: "bg-amber-500",
  Sosial: "bg-red-500",
  Default: "bg-slate-500",
}

export default function ActivitiesPage({ activities }: { activities: Activity[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getImageUrl = (path: string) => {
    if (!path) return "/images/placeholder.svg";
    if (path.startsWith('http') || path.startsWith('/images')) return path;
    return `/storage/${path}`;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
  }

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? activity.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(activities.map((a) => a.category))]

  const openLightbox = (activity: Activity) => {
    if (activity.images && activity.images.length > 0) {
        setSelectedActivity(activity)
        setCurrentImageIndex(0)
    }
  }

  const closeLightbox = () => {
    setSelectedActivity(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedActivity && selectedActivity.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedActivity.images!.length)
    }
  }

  const prevImage = () => {
    if (selectedActivity && selectedActivity.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedActivity.images!.length) % selectedActivity.images!.length)
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
              {filteredActivities.map((activity) => {
                const hasImages = activity.images && activity.images.length > 0;
                const thumbnail = hasImages ? getImageUrl(activity.images![0]) : "/images/placeholder.svg";
                const badgeColor = categoryColors[activity.category] || categoryColors.Default;

                return (
                  <Card
                    key={activity.id}
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div 
                        className={`relative h-56 overflow-hidden ${hasImages ? 'cursor-pointer' : ''}`} 
                        onClick={() => hasImages && openLightbox(activity)}
                    >
                      <img
                        src={thumbnail}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      <Badge className={`absolute top-4 left-4 ${badgeColor} text-white border-0`}>
                        {activity.category}
                      </Badge>
                      
                      {hasImages && activity.images!.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          +{activity.images!.length - 1}
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg line-clamp-2">{activity.title}</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(activity.date)}
                        <span className="mx-2">•</span>
                        {activity.location}
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{activity.description}</p>
                      
                      {hasImages && (
                        <Button variant="link" className="px-0 text-primary p-0 h-auto font-semibold" onClick={() => openLightbox(activity)}>
                          Lihat Galeri Foto
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )
              })}

              {filteredActivities.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground">Tidak ada kegiatan yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {selectedActivity && selectedActivity.images && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-200" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedActivity.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 rounded-full bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 rounded-full bg-black/50 hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div className="relative max-w-5xl max-h-[90vh] w-full mx-4 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={getImageUrl(selectedActivity.images[currentImageIndex])}
                alt={selectedActivity.title}
                className="object-contain w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
              />
              
              <div className="bg-black/80 backdrop-blur-sm text-white p-6 rounded-xl mt-4 max-w-3xl w-full">
                <div className="flex items-center justify-between mb-2">
                    <Badge className={`${categoryColors[selectedActivity.category] || 'bg-gray-500'} text-white border-0`}>
                        {selectedActivity.category}
                    </Badge>
                    <span className="text-sm text-gray-400">
                        {currentImageIndex + 1} / {selectedActivity.images.length}
                    </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{selectedActivity.title}</h3>
                <p className="text-white/70 text-sm">
                  {formatDate(selectedActivity.date)} • {selectedActivity.location}
                </p>
                
                {selectedActivity.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto py-2 justify-center">
                    {selectedActivity.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-12 h-12 rounded-md overflow-hidden transition-all border-2 ${
                          index === currentImageIndex ? "border-primary scale-110" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                         <img src={getImageUrl(img)} className="w-full h-full object-cover" />
                      </button>
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