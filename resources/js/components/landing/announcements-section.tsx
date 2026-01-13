import type React from "react"
import { Link } from "@inertiajs/react"
import { Calendar, ArrowRight, Bell, FileText, AlertCircle, Info } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Announcement {
  id: number;
  title: string;
  date: string;
  content: string;
  type: string;
  created_at: string;
}

const typeConfig: Record<string, { color: string; icon: React.ComponentType<{ className?: string }> }> = {
  Penting: { color: "bg-red-500", icon: AlertCircle },
  Program: { color: "bg-primary", icon: Bell },
  Rekrutmen: { color: "bg-blue-500", icon: FileText },
  Prestasi: { color: "bg-amber-500", icon: Bell },
  Default: { color: "bg-slate-500", icon: Info },
}

export function AnnouncementsSection({ announcements }: { announcements: Announcement[] }) {

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
  }

  const isNewPost = (dateString: string) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays <= 7;
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Pengumuman
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Informasi Terkini
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Dapatkan informasi terbaru seputar program, jadwal layanan, dan pengumuman penting lainnya dari Puskesmas.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              <Link href="/information/announcements">
                Lihat Semua Pengumuman
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {announcements && announcements.length > 0 ? (
                announcements.map((announcement) => {
                const config = typeConfig[announcement.type] || typeConfig.Default
                const Icon = config.icon
                const isNew = isNewPost(announcement.created_at)

                return (
                    <Card
                    key={announcement.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 overflow-hidden"
                    >
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                        <div
                            className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center flex-shrink-0`}
                        >
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                                {announcement.type}
                            </Badge>
                            {isNew && (
                                <Badge className="bg-primary text-primary-foreground text-xs">Baru</Badge>
                            )}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {announcement.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                                {announcement.content}
                            </p>
                            <div className="flex items-center gap-2 text-muted-foreground text-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(announcement.date)}
                            </div>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                )
                })
            ) : (
                <div className="text-center py-10 border border-dashed rounded-xl bg-gray-50">
                    <p className="text-muted-foreground">Belum ada pengumuman terbaru.</p>
                </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}