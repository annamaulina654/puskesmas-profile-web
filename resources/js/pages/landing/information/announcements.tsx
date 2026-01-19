import { useState } from "react"
import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Search, Bell, FileText, AlertCircle, ChevronRight, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: string;
  created_at: string;
}

const typeConfig: Record<
  string,
  { color: string; bgColor: string; icon: React.ComponentType<{ className?: string }> }
> = {
  Penting: { color: "text-red-600", bgColor: "bg-red-500", icon: AlertCircle },
  Program: { color: "text-primary", bgColor: "bg-primary", icon: Bell },
  Rekrutmen: { color: "text-blue-600", bgColor: "bg-blue-500", icon: FileText },
  Prestasi: { color: "text-amber-600", bgColor: "bg-amber-500", icon: Bell },
  Default: { color: "text-gray-600", bgColor: "bg-gray-500", icon: Info },
}

export default function AnnouncementsPage({ announcements }: { announcements: Announcement[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = selectedType ? announcement.type === selectedType : true
    
    return matchesSearch && matchesType
  })

  const types = [...new Set(announcements.map((a) => a.type))]

  const isNewPost = (dateString: string) => {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays <= 7;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
  }

  return (
    <PublicLayout>
      <Head title="Pengumuman" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Pengumuman
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Informasi terkini dan pengumuman resmi dari Puskesmas
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
                  placeholder="Cari pengumuman..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedType === null ? "default" : "outline"}
                  onClick={() => setSelectedType(null)}
                  className="rounded-full"
                >
                  Semua
                </Button>
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className="rounded-full"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredAnnouncements.map((announcement) => {
                const config = typeConfig[announcement.type] || typeConfig.Default
                const Icon = config.icon
                const isNew = isNewPost(announcement.created_at)

                return (
                  <Card
                    key={announcement.id}
                    className="border-border hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
                  >
                    <Link href={`/information/announcements/${announcement.id}`}>
                        <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <div
                            className={`w-14 h-14 rounded-xl ${config.bgColor} flex items-center justify-center flex-shrink-0`}
                            >
                            <Icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                <Badge variant="secondary" className="text-xs">
                                {announcement.type}
                                </Badge>
                                
                                {isNew && (
                                <Badge className="bg-primary text-primary-foreground text-xs">Baru</Badge>
                                )}
                                
                                <div className="flex items-center gap-1 text-muted-foreground text-xs ml-auto">
                                <Calendar className="w-3.5 h-3.5" />
                                {formatDate(announcement.date)}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                                {announcement.title}
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </h3>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                {announcement.content}
                            </p>
                            </div>
                        </div>
                        </CardContent>
                    </Link>
                  </Card>
                )
              })}

              {filteredAnnouncements.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Tidak ada pengumuman yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}