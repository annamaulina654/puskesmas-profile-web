import type React from "react"

import { Link } from "@inertiajs/react"
import { Calendar, ArrowRight, Bell, FileText, AlertCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const announcements = [
  {
    id: 1,
    title: "Jadwal Pelayanan Libur Tahun Baru 2026",
    date: "8 Januari 2026",
    excerpt: "Informasi jadwal pelayanan Puskesmas selama libur tahun baru 2026. Layanan UGD tetap beroperasi 24 jam.",
    type: "Penting",
    isNew: true,
  },
  {
    id: 2,
    title: "Pendaftaran Vaksinasi Influenza Gratis",
    date: "5 Januari 2026",
    excerpt: "Puskesmas membuka pendaftaran vaksinasi influenza gratis untuk lansia dan anak-anak. Kuota terbatas.",
    type: "Program",
    isNew: true,
  },
  {
    id: 3,
    title: "Lowongan Tenaga Kesehatan PTT",
    date: "2 Januari 2026",
    excerpt:
      "Dibuka lowongan untuk posisi bidan dan perawat PTT. Persyaratan dan prosedur pendaftaran dapat dilihat di sini.",
    type: "Rekrutmen",
    isNew: false,
  },
  {
    id: 4,
    title: "Hasil Akreditasi Puskesmas 2025",
    date: "28 Desember 2025",
    excerpt: "Puskesmas Sehat Sejahtera berhasil meraih akreditasi Utama dari Kementerian Kesehatan RI.",
    type: "Prestasi",
    isNew: false,
  },
]

const typeConfig: Record<string, { color: string; icon: React.ComponentType<{ className?: string }> }> = {
  Penting: { color: "bg-red-500", icon: AlertCircle },
  Program: { color: "bg-primary", icon: Bell },
  Rekrutmen: { color: "bg-blue-500", icon: FileText },
  Prestasi: { color: "bg-amber-500", icon: Bell },
}

export function AnnouncementsSection() {
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
              Dapatkan informasi terbaru seputar program, jadwal layanan, dan pengumuman penting lainnya dari Puskesmas
              Sehat Sejahtera.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              <Link href="/information/announcements">
                Lihat Semua Pengumuman
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement) => {
              const config = typeConfig[announcement.type]
              const Icon = config.icon

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
                          {announcement.isNew && (
                            <Badge className="bg-primary text-primary-foreground text-xs">Baru</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{announcement.excerpt}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {announcement.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}