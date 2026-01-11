import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Search, Bell, FileText, AlertCircle, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const allAnnouncements = [
  {
    id: 1,
    title: "Jadwal Pelayanan Libur Tahun Baru 2026",
    date: "8 Januari 2026",
    content:
      "Informasi jadwal pelayanan Puskesmas selama libur tahun baru 2026. Layanan UGD tetap beroperasi 24 jam untuk melayani kebutuhan darurat masyarakat. Pelayanan reguler akan kembali normal pada tanggal 6 Januari 2026.",
    type: "Penting",
    isNew: true,
  },
  {
    id: 2,
    title: "Pendaftaran Vaksinasi Influenza Gratis",
    date: "5 Januari 2026",
    content:
      "Puskesmas membuka pendaftaran vaksinasi influenza gratis untuk lansia dan anak-anak. Kuota terbatas hanya untuk 200 peserta. Pendaftaran dapat dilakukan secara online melalui aplikasi SIMPUS atau langsung ke loket pendaftaran.",
    type: "Program",
    isNew: true,
  },
  {
    id: 3,
    title: "Lowongan Tenaga Kesehatan PTT",
    date: "2 Januari 2026",
    content:
      "Dibuka lowongan untuk posisi bidan dan perawat PTT. Persyaratan: lulusan D3/S1 kebidanan atau keperawatan, memiliki STR aktif, dan bersedia ditempatkan di wilayah kerja Puskesmas.",
    type: "Rekrutmen",
    isNew: false,
  },
  {
    id: 4,
    title: "Hasil Akreditasi Puskesmas 2025",
    date: "28 Desember 2025",
    content:
      "Puskesmas Sehat Sejahtera berhasil meraih akreditasi Utama dari Kementerian Kesehatan RI. Pencapaian ini merupakan hasil kerja keras seluruh tim dalam meningkatkan kualitas pelayanan kesehatan.",
    type: "Prestasi",
    isNew: false,
  },
  {
    id: 5,
    title: "Jadwal Posyandu Bulan Januari 2026",
    date: "25 Desember 2025",
    content:
      "Jadwal kegiatan Posyandu untuk bulan Januari 2026 telah tersedia. Silakan cek jadwal di masing-masing Posyandu atau hubungi kader kesehatan setempat.",
    type: "Program",
    isNew: false,
  },
  {
    id: 6,
    title: "Peringatan Waspada DBD Musim Hujan",
    date: "20 Desember 2025",
    content:
      "Memasuki musim hujan, masyarakat diimbau untuk meningkatkan kewaspadaan terhadap demam berdarah dengue (DBD). Lakukan 3M Plus secara rutin dan segera periksakan diri jika mengalami gejala.",
    type: "Penting",
    isNew: false,
  },
]

const typeConfig: Record<
  string,
  { color: string; bgColor: string; icon: React.ComponentType<{ className?: string }> }
> = {
  Penting: { color: "text-red-600", bgColor: "bg-red-500", icon: AlertCircle },
  Program: { color: "text-primary", bgColor: "bg-primary", icon: Bell },
  Rekrutmen: { color: "text-blue-600", bgColor: "bg-blue-500", icon: FileText },
  Prestasi: { color: "text-amber-600", bgColor: "bg-amber-500", icon: Bell },
}

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredAnnouncements = allAnnouncements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType ? announcement.type === selectedType : true
    return matchesSearch && matchesType
  })

  const types = [...new Set(allAnnouncements.map((a) => a.type))]

  return (
    <PublicLayout>
      <Head title="Pengumuman - UPT Puskesmas Kwanyar" />

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
                const config = typeConfig[announcement.type]
                const Icon = config.icon
                const isExpanded = expandedId === announcement.id

                return (
                  <Card
                    key={announcement.id}
                    className="border-border hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                    onClick={() => setExpandedId(isExpanded ? null : announcement.id)}
                  >
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
                            {announcement.isNew && (
                              <Badge className="bg-primary text-primary-foreground text-xs">Baru</Badge>
                            )}
                            <div className="flex items-center gap-1 text-muted-foreground text-xs ml-auto">
                              <Calendar className="w-3.5 h-3.5" />
                              {announcement.date}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            {announcement.title}
                            <ChevronRight
                              className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-90" : ""}`}
                            />
                          </h3>
                          <p
                            className={`text-muted-foreground text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}
                          >
                            {announcement.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
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