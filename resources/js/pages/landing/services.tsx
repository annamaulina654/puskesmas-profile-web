import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import {
  Heart,
  Baby,
  Stethoscope,
  Pill,
  Syringe,
  Users,
  Microscope,
  Ambulance,
  Smile,
  Eye,
  Brain,
  Activity,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Pemeriksaan Umum",
    description:
      "Layanan pemeriksaan kesehatan umum dengan dokter berpengalaman. Meliputi konsultasi, diagnosis, dan pengobatan berbagai keluhan kesehatan.",
    features: ["Konsultasi Dokter", "Pemeriksaan Fisik", "Resep Obat", "Rujukan Spesialis"],
  },
  {
    icon: Baby,
    title: "Kesehatan Ibu & Anak",
    description:
      "Pelayanan kesehatan komprehensif untuk ibu hamil, menyusui, dan tumbuh kembang anak dari bayi hingga remaja.",
    features: ["Pemeriksaan Kehamilan", "Persalinan Normal", "Imunisasi Bayi", "Pemantauan Tumbuh Kembang"],
  },
  {
    icon: Syringe,
    title: "Imunisasi",
    description: "Program imunisasi lengkap sesuai jadwal Kementerian Kesehatan untuk bayi, anak, dan dewasa.",
    features: ["Imunisasi Dasar", "Imunisasi Lanjutan", "Vaksin COVID-19", "Vaksin Influenza"],
  },
  {
    icon: Heart,
    title: "Program PTM",
    description:
      "Pencegahan dan pengendalian penyakit tidak menular seperti diabetes, hipertensi, dan penyakit jantung.",
    features: ["Screening Kesehatan", "Konseling Gizi", "Senam Sehat", "Pemantauan Rutin"],
  },
  {
    icon: Pill,
    title: "Farmasi",
    description: "Penyediaan obat-obatan berkualitas dengan harga terjangkau sesuai resep dokter.",
    features: ["Obat Generik", "Obat Esensial", "Konseling Obat", "Informasi Penggunaan"],
  },
  {
    icon: Microscope,
    title: "Laboratorium",
    description: "Pemeriksaan laboratorium dengan peralatan modern untuk mendukung diagnosis yang akurat.",
    features: ["Pemeriksaan Darah", "Urinalisis", "Tes Gula Darah", "Tes Kolesterol"],
  },
  {
    icon: Smile,
    title: "Kesehatan Gigi & Mulut",
    description: "Layanan kesehatan gigi dan mulut untuk pencegahan dan pengobatan masalah dental.",
    features: ["Pemeriksaan Gigi", "Penambalan", "Pencabutan", "Scaling"],
  },
  {
    icon: Eye,
    title: "Kesehatan Mata",
    description: "Pemeriksaan dan penanganan gangguan kesehatan mata untuk semua usia.",
    features: ["Tes Ketajaman Mata", "Deteksi Katarak", "Pengobatan Infeksi", "Rujukan Spesialis"],
  },
  {
    icon: Brain,
    title: "Kesehatan Jiwa",
    description: "Layanan konseling dan penanganan masalah kesehatan mental dengan pendekatan holistik.",
    features: ["Konseling Individu", "Terapi Kelompok", "Deteksi Dini", "Edukasi Kesehatan Mental"],
  },
  {
    icon: Users,
    title: "Promosi Kesehatan",
    description: "Program edukasi dan penyuluhan kesehatan untuk meningkatkan kesadaran masyarakat.",
    features: ["Penyuluhan Kesehatan", "Kampanye PHBS", "Posyandu", "UKS"],
  },
  {
    icon: Activity,
    title: "Surveilans & Epidemiologi",
    description: "Pemantauan dan pengendalian penyakit menular di wilayah kerja Puskesmas.",
    features: ["Penyelidikan Epidemiologi", "Surveilans Penyakit", "Penanggulangan KLB", "Pelaporan"],
  },
  {
    icon: Ambulance,
    title: "UGD 24 Jam",
    description: "Pelayanan gawat darurat siap melayani sepanjang waktu untuk penanganan darurat medis.",
    features: ["Penanganan Darurat", "Stabilisasi Pasien", "Rujukan Emergency", "Ambulans"],
  },
]

export default function ServicesPage() {
  return (
    <PublicLayout>
      <Head title="Layanan - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Layanan Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Berbagai layanan kesehatan berkualitas untuk memenuhi kebutuhan kesehatan Anda dan keluarga
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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