import { useState } from "react"
import { Link } from "@inertiajs/react"
import { Calendar, ArrowRight, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Activity {
  id: number;
  title: string;
  date: string;
  images: string[] | null;
  category: string;
  description: string;
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

export function ActivitiesSection({ activities }: { activities: Activity[] }) {

  const getImageUrl = (path: string) => {
    if (!path) return "/images/placeholder.svg";
    if (path.startsWith('http') || path.startsWith('/images')) return path;
    return `/storage/${path}`;
  }

  const getMainImage = (activity: Activity) => {
    if (activity.images && activity.images.length > 0) {
        return getImageUrl(activity.images[0]);
    }
    return "/images/placeholder.svg";
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
  }

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
            Berbagai kegiatan dan program kesehatan yang telah kami laksanakan untuk masyarakat.
          </p>
        </div>

        {activities && activities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => {
              const badgeColor = categoryColors[activity.category] || categoryColors.Default;
              
              return (
                <Card
                  key={activity.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
                >
                  <Link href={`/information/activities/${activity.id}`}>
                      <div className="relative h-56 overflow-hidden cursor-pointer">
                        <img
                          src={getMainImage(activity)}
                          alt={activity.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <Badge className={`absolute top-4 left-4 ${badgeColor} text-white border-0`}>
                          {activity.category}
                        </Badge>
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-4 py-2 bg-white/90 text-foreground rounded-full text-sm font-medium flex items-center gap-2">
                              <ImageIcon className="w-4 h-4" /> Lihat Detail
                          </span>
                        </div>
                      </div>
                  </Link>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {formatDate(activity.date)}
                    </div>
                    <Link href={`/information/activities/${activity.id}`}>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {activity.title}
                        </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {activity.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
           <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
               <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
               <p className="text-muted-foreground">Belum ada kegiatan terbaru yang diunggah.</p>
           </div>
        )}

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all"
          >
            <Link href="/information/activities">
              Lihat Semua Kegiatan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}