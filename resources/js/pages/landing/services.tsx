/* eslint-disable @typescript-eslint/no-explicit-any */
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import {
  Heart,
  Baby,
  Stethoscope,
  Pill,
  Users,
  Microscope,
  Ambulance,
  Smile,
  Eye,
  Brain,
  Activity,
  Megaphone,
  Leaf,
  Utensils,
  ShieldAlert,
  Flower,
  School,
  Bed,
  Briefcase,
  Home,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ukmServices = [
  {
    icon: Megaphone,
    title: "Promosi Kesehatan (Promkes)",
    category: "UKM Esensial",
    description: "Penyuluhan dan pemberdayaan masyarakat untuk hidup bersih dan sehat.",
  },
  {
    icon: Leaf,
    title: "Kesehatan Lingkungan",
    category: "UKM Esensial",
    description: "Pengawasan sanitasi lingkungan, air bersih, dan jamban sehat.",
  },
  {
    icon: Baby,
    title: "KIA & KB (Masyarakat)",
    category: "UKM Esensial",
    description: "Pemantauan kesehatan ibu dan anak serta keluarga berencana di lapangan.",
  },
  {
    icon: Utensils,
    title: "Pelayanan Gizi",
    category: "UKM Esensial",
    description: "Penanggulangan masalah gizi dan pemantauan pertumbuhan balita.",
  },
  {
    icon: ShieldAlert,
    title: "Pencegahan Penyakit (P3)",
    category: "UKM Esensial",
    description: "Pencegahan dan pengendalian penyakit menular (DBD, TB, dll) dan tidak menular.",
  },
  
  {
    icon: Brain,
    title: "Kesehatan Jiwa",
    category: "UKM Pengembangan",
    description: "Deteksi dini dan pendampingan ODGJ (Orang Dengan Gangguan Jiwa).",
  },
  {
    icon: Smile,
    title: "Kesehatan Gigi Masyarakat",
    category: "UKM Pengembangan",
    description: "Upaya kesehatan gigi sekolah dan masyarakat desa.",
  },
  {
    icon: Flower,
    title: "Tradisional Komplementer",
    category: "UKM Pengembangan",
    description: "Pembinaan pengobatan tradisional dan Tanaman Obat Keluarga (TOGA).",
  },
  {
    icon: Activity,
    title: "Kesehatan Olahraga",
    category: "UKM Pengembangan",
    description: "Pembinaan kelompok olahraga di masyarakat dan sekolah.",
  },
  {
    icon: Eye,
    title: "Kesehatan Indera",
    category: "UKM Pengembangan",
    description: "Penemuan kasus gangguan penglihatan dan pendengaran.",
  },
  {
    icon: Users,
    title: "Kesehatan Lansia",
    category: "UKM Pengembangan",
    description: "Pelayanan kesehatan untuk meningkatkan kualitas hidup usia lanjut.",
  },
  {
    icon: Briefcase,
    title: "Usaha Kesehatan Kerja (UKK)",
    category: "UKM Pengembangan",
    description: "Pembinaan kesehatan dan keselamatan kerja bagi pekerja sektor informal.",
  },
  {
    icon: School,
    title: "UKS (Kesehatan Sekolah)",
    category: "UKM Pengembangan",
    description: "Pembinaan kesehatan siswa di sekolah-sekolah wilayah kerja.",
  },
  {
    icon: Home,
    title: "Perkesmas",
    category: "UKM Pengembangan",
    description: "Perawatan Kesehatan Masyarakat melalui kunjungan rumah (Home Care).",
  },
]

const ukpServices = [
  {
    icon: Ambulance,
    title: "UGD 24 Jam",
    description: "Pelayanan gawat darurat dan Ambulance siap 24 jam.",
  },
  {
    icon: Bed,
    title: "Rawat Inap & PONED",
    description: "Perawatan intensif dan pelayanan persalinan 24 jam.",
  },
  {
    icon: Stethoscope,
    title: "Poli Umum",
    description: "Pengobatan umum untuk pasien usia diatas 5 tahun.",
  },
  {
    icon: Smile,
    title: "Poli Gigi",
    description: "Pelayanan kesehatan gigi dan mulut.",
  },
  {
    icon: Baby,
    title: "Poli KIA",
    description: "Kesehatan Ibu Hamil, Nifas, Anak, dan Imunisasi (Rabu).",
  },
  {
    icon: Users,
    title: "Poli KB",
    description: "Pelayanan Keluarga Berencana.",
  },
  {
    icon: Eye,
    title: "Poli Mata",
    description: "Melayani kesehatan mata dan operasi katarak (Rujukan/Program).",
  },
  {
    icon: Activity,
    title: "Poli P3 (TB, HIV, Kusta)",
    description: "Pengobatan TB (Selasa), Konsultasi HIV, dan Kusta.",
  },
  {
    icon: Leaf,
    title: "Klinik Sanitasi",
    description: "Konsultasi penyakit berbasis lingkungan.",
  },
  {
    icon: Heart,
    title: "Klinik Laktasi",
    description: "Konsultasi tentang menyusui.",
  },
  {
    icon: Utensils,
    title: "Konsultasi Gizi",
    description: "Terapi dan perbaikan gizi perorangan.",
  },
]

const supportServices = [
  {
    icon: Pill,
    title: "Pelayanan Obat",
    description: "Farmasi dan peracikan obat sesuai resep.",
  },
  {
    icon: Microscope,
    title: "Laboratorium",
    description: "Pemeriksaan darah dan spesimen medis.",
  },
  {
    icon: Activity,
    title: "USG",
    description: "Ultrasonography untuk kehamilan dan medis.",
  },
  {
    icon: Activity,
    title: "ECG",
    description: "Electrocardiogram (Rekam Jantung).",
  },
]

export default function ServicesPage() {
  return (
    <PublicLayout>
      <Head title="Layanan - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen bg-slate-50">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Jenis Pelayanan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              UPT Puskesmas Kwanyar menyediakan pelayanan komprehensif mulai dari UKM, UKP, hingga Penunjang.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-10 bg-green-500 rounded-full" />
                <h2 className="text-3xl font-bold text-foreground">Upaya Kesehatan Masyarakat (UKM)</h2>
              </div>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">Esensial</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">Pengembangan</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukmServices.map((service, index) => (
                <ServiceCard key={index} service={service} isUkm={true} />
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4"><hr className="border-gray-200" /></div>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-10 bg-primary rounded-full" />
              <h2 className="text-3xl font-bold text-foreground">Upaya Kesehatan Perorangan (UKP)</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukpServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4"><hr className="border-gray-200" /></div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-10 bg-orange-500 rounded-full" />
              <h2 className="text-3xl font-bold text-foreground">Pelayanan Penunjang</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}

function ServiceCard({ service, isUkm = false }: { service: any, isUkm?: boolean }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-primary/30 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        {isUkm && service.category && (
            <span className={`text-[10px] font-bold uppercase tracking-wider mb-2 w-fit px-2 py-0.5 rounded ${
                service.category.includes("Esensial") 
                ? "bg-green-100 text-green-700" 
                : "bg-blue-100 text-blue-700"
            }`}>
                {service.category}
            </span>
        )}

        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
            <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors pt-1">
            {service.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        
      </CardContent>
    </Card>
  )
}