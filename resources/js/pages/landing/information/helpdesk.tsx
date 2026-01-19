import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Search, ChevronDown, MessageCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    category: "Pendaftaran",
    questions: [
      {
        q: "Bagaimana cara mendaftar sebagai pasien baru?",
        a: "Untuk mendaftar sebagai pasien baru, Anda perlu membawa KTP, Kartu Keluarga, dan Kartu BPJS (jika ada) ke loket pendaftaran. Pendaftaran juga dapat dilakukan secara online melalui aplikasi SIMPUS.",
      },
      {
        q: "Apakah bisa mendaftar secara online?",
        a: "Ya, Anda dapat mendaftar secara online melalui aplikasi SIMPUS yang tersedia di Google Play Store dan App Store. Pendaftaran online dibuka setiap hari mulai pukul 06.00 WIB.",
      },
      {
        q: "Dokumen apa saja yang diperlukan untuk berobat?",
        a: "Dokumen yang diperlukan adalah KTP/KK untuk identitas, Kartu BPJS untuk pasien peserta JKN, dan kartu berobat Puskesmas (untuk pasien lama).",
      },
    ],
  },
  {
    category: "Layanan & Jadwal",
    questions: [
      {
        q: "Apa saja layanan yang tersedia di Puskesmas?",
        a: "Puskesmas menyediakan layanan pemeriksaan umum, kesehatan ibu dan anak, imunisasi, KB, kesehatan gigi, laboratorium, farmasi, dan UGD 24 jam.",
      },
      {
        q: "Jam operasional Puskesmas?",
        a: "Pelayanan reguler buka Senin-Sabtu pukul 07.30-14.30 WIB. UGD beroperasi 24 jam setiap hari termasuk hari libur.",
      },
      {
        q: "Apakah ada layanan home visit?",
        a: "Ya, Puskesmas menyediakan layanan kunjungan rumah untuk pasien yang tidak dapat datang ke Puskesmas. Hubungi hotline untuk informasi lebih lanjut.",
      },
    ],
  },
  {
    category: "Pembayaran",
    questions: [
      {
        q: "Apakah pelayanan gratis untuk peserta BPJS?",
        a: "Ya, seluruh layanan kesehatan di Puskesmas gratis untuk peserta BPJS Kesehatan aktif. Pastikan kartu BPJS Anda dalam status aktif.",
      },
      {
        q: "Berapa biaya untuk pasien umum?",
        a: "Biaya layanan untuk pasien umum bervariasi sesuai jenis layanan. Konsultasi dokter umum Rp 25.000, pemeriksaan laboratorium mulai dari Rp 15.000.",
      },
    ],
  },
  {
    category: "Rujukan",
    questions: [
      {
        q: "Bagaimana prosedur mendapatkan rujukan?",
        a: "Rujukan diberikan oleh dokter setelah pemeriksaan jika diperlukan penanganan lebih lanjut di rumah sakit. Surat rujukan berlaku untuk 1x kunjungan dalam 90 hari.",
      },
      {
        q: "Ke rumah sakit mana saja bisa dirujuk?",
        a: "Rujukan dapat diberikan ke rumah sakit yang bekerja sama dengan BPJS Kesehatan sesuai wilayah. Daftar RS rujukan dapat ditanyakan ke petugas.",
      },
    ],
  },
]

export default function HelpdeskPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <PublicLayout>
      <Head title="Pusat Bantuan" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Pusat Bantuan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan Anda atau hubungi kami
            </p>
          </div>
        </section>

        <section className="py-10 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg rounded-full bg-background"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Telepon</h3>
                  <p className="text-primary font-medium">0823-3458-2474</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-primary font-medium">0812-3456-7890</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-primary font-medium text-sm">pkm.kwanyarbangkalan@gmail.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {filteredFaqs.map((category) => (
                <div key={category.category}>
                  <h3 className="text-lg font-semibold text-primary mb-4">{category.category}</h3>
                  <div className="space-y-3">
                    {category.questions.map((item, index) => {
                      const itemId = `${category.category}-${index}`
                      const isOpen = openItems.includes(itemId)

                      return (
                        <Card key={index} className="border-border">
                          <button onClick={() => toggleItem(itemId)} className="w-full text-left">
                            <CardContent className="p-5">
                              <div className="flex items-center justify-between gap-4">
                                <span className="font-medium text-foreground">{item.q}</span>
                                <ChevronDown
                                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                                />
                              </div>
                              {isOpen && (
                                <p className="mt-4 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                                  {item.a}
                                </p>
                              )}
                            </CardContent>
                          </button>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Tidak ada pertanyaan yang ditemukan.</p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}