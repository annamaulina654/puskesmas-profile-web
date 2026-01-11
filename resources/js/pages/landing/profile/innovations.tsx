import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Lightbulb, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const innovations = [
  {
    title: "SIMPUS Digital",
    category: "Teknologi",
    year: "2024",
    description:
      "Sistem Informasi Manajemen Puskesmas terintegrasi untuk pendaftaran online, rekam medis elektronik, dan monitoring kesehatan pasien.",
    image: "/images/placeholder.svg",
    impact: "Mengurangi waktu tunggu pasien hingga 60%",
  },
  {
    title: "Posyandu Smart",
    category: "Program",
    year: "2024",
    description:
      "Aplikasi mobile untuk memantau tumbuh kembang anak, jadwal imunisasi, dan notifikasi kesehatan untuk orang tua.",
    image: "/images/placeholder.svg",
    impact: "Meningkatkan cakupan imunisasi hingga 95%",
  },
  {
    title: "Kelas Ibu Hamil Virtual",
    category: "Edukasi",
    year: "2023",
    description:
      "Program edukasi kesehatan ibu hamil secara daring dengan materi interaktif dan konsultasi langsung dengan bidan.",
    image: "/images/placeholder.svg",
    impact: "Menjangkau 500+ ibu hamil per tahun",
  },
  {
    title: "Gerakan Masyarakat Sehat (GERMAS)",
    category: "Komunitas",
    year: "2023",
    description:
      "Program pemberdayaan masyarakat untuk hidup sehat melalui aktivitas fisik, konsumsi buah sayur, dan cek kesehatan rutin.",
    image: "/images/placeholder.svg",
    impact: "Menurunkan prevalensi PTM di wilayah kerja",
  },
]

const awards = [
  { title: "Puskesmas Berprestasi Tingkat Provinsi", year: "2025" },
  { title: "Inovasi Pelayanan Publik Terbaik", year: "2024" },
  { title: "Akreditasi Utama Kemenkes RI", year: "2024" },
]

export default function InnovationsPage() {
  return (
    <PublicLayout>
      <Head title="Inovasi - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Inovasi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Program inovatif untuk meningkatkan kualitas pelayanan kesehatan
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Program Inovasi Unggulan
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Terus berinovasi untuk memberikan pelayanan kesehatan terbaik
              </p>
            </div>

            <div className="space-y-12">
              {innovations.map((innovation, index) => (
                <Card key={index} className="border-0 shadow-xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <img
                        src={innovation.image}
                        alt={innovation.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent
                      className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-primary/10 text-primary">{innovation.category}</Badge>
                        <Badge variant="outline">{innovation.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{innovation.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{innovation.description}</p>
                      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                        <Award className="w-6 h-6 text-primary" />
                        <span className="text-foreground font-medium">{innovation.impact}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Penghargaan & Prestasi
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{award.title}</h3>
                    <p className="text-primary font-bold">{award.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}