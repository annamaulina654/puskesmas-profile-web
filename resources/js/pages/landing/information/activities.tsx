import { useState } from "react"
import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Search, ImageIcon } from "lucide-react"
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

  return (
    <PublicLayout>
      <Head title="Kegiatan" />

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
                    <Link href={`/information/activities/${activity.id}`}>
                        <div className="relative h-56 overflow-hidden cursor-pointer">
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
                    </Link>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {formatDate(activity.date)}
                        <span className="mx-2">•</span>
                        {activity.location}
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{activity.description}</p>
                      
                      <Button variant="link" className="px-0 text-primary p-0 h-auto font-semibold" asChild>
                          <Link href={`/information/activities/${activity.id}`}>
                            Lihat Selengkapnya
                          </Link>
                      </Button>
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

      </main>
    </PublicLayout>
  )
}