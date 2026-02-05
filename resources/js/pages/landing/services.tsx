/* eslint-disable @typescript-eslint/no-explicit-any */
import { Head } from "@inertiajs/react"
import { Link } from "@inertiajs/react"
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
  ShieldAlert,
  Building2,
  FileText,
  Syringe,
  Thermometer,
  BedDouble,
  Accessibility,
  Megaphone,
  UserCog,
  ClipboardCheck,
  Banknote,
  Monitor,
  Network,
  Utensils,
  TrendingUp,
  FileCheck,
  Scan,
  HeartPulse,
  HeartHandshake,
  Shield
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const clusters = [
  {
    id: "klaster-1",
    title: "Klaster 1: Manajemen",
    description: "Fokus pada tata kelola administrasi dan dukungan operasional.",
    icon: Building2,
    services: [
      { name: "Manajemen Ketatausahaan", slug: "manajemen-puskesmas", icon: FileText },
      { name: "Manajemen SDM", slug: "manajemen-puskesmas", icon: UserCog },
      { name: "Manajemen Sarana, Prasarana, dan Perbekalan keshatan", slug: "manajemen-puskesmas", icon: Building2 },
      { name: "Manajemen Mutu Pelayanan", slug: "manajemen-puskesmas", icon: ClipboardCheck },
      { name: "Manajemen Keuangan & Aset", slug: "manajemen-puskesmas", icon: Banknote },
      { name: "Manajemen Sistem Informasi Digital", slug: "manajemen-puskesmas", icon: Monitor },
      { name: "Manajemen Jejaring", slug: "manajemen-puskesmas", icon: Network },
    ]
  },
  {
    id: "klaster-2",
    title: "Klaster 2: Ibu dan Anak",
    description: "Melayani ibu hamil, bersalin, nifas, bayi, balita, anak pra-sekolah, usia sekolah, dan remaja.",
    icon: Baby,
    services: [
      { name: "ANC (Antenatal Care)", slug: "anc", desc: "Pemeriksaan kehamilan rutin.", icon: Stethoscope },
      { name: "Persalinan & Nifas", slug: "persalinan-nifas", desc: "Pertolongan persalinan normal & perawatan pasca lahir.", icon: Baby },
      { name: "Neonatal Esensial", slug: "neonatal-esensial", desc: "Perawatan khusus bayi baru lahir.", icon: Heart },
      { name: "Pelayanan Gizi Ibu & Anak", slug: "pelayanan-gizi-ibu-anak", desc: "Konsultasi gizi, laktasi, & tumbuh kembang.", icon: Utensils },
      { name: "Imunisasi", slug: "imunisasi", desc: "Pelayanan imunisasi dasar dan lanjutan.", icon: Syringe },
      { name: "SDIDTK", slug: "sdidtk", desc: "Stimulasi, Deteksi, Intervensi Dini Tumbuh Kembang.", icon: TrendingUp },
      { name: "MTBS", slug: "mtbs", desc: "Manajemen Terpadu Balita Sakit.", icon: Thermometer },
      { name: "Pembuatan Surat Sehat", slug: "pembuatan-surat-sehat", desc: "Untuk anak usia 0-17 tahun.", icon: FileCheck },
      { name: "USG & SHK", slug: "usg-shk", desc: "Ultrasonografi & Skrining Hipotiroid.", icon: Scan },
      { name: "Pelayanan CKG", slug: "pelayanan-ckg", desc: "Cek Kesehatan Gratis satu kali setahun.", icon: HeartPulse },
    ]
  },
  {
    id: "klaster-3",
    title: "Klaster 3: Usia Dewasa & Lansia",
    description: "Melayani kelompok usia produktif dan lanjut usia.",
    icon: Users,
    services: [
      { name: "Pelayanan CKG", slug: "pelayanan-ckg", desc: "Cek Kesehatan Gratis satu kali setahun.", icon: HeartPulse },
      { name: "Pengobatan Umum", slug: "pengobatan-umum", desc: "Pemeriksaan & pengobatan penyakit umum.", icon: Stethoscope },
      { name: "Pelayanan KB", slug: "pelayanan-kb", desc: "Keluarga Berencana.", icon: Users },
      { name: "Kesehatan Gigi Dewasa", slug: "kesehatan-gigi-dewasa", desc: "Perawatan gigi & mulut usia dewasa.", icon: Smile },
      { name: "Surat Keterangan Sehat", slug: "surat-keterangan-sehat", icon: FileCheck }, 
      { name: "Pemeriksaan Catin", slug: "pemeriksaan-catin", icon: HeartHandshake },
      { name: "Rujukan Berjenjang", slug: "rujukan-berjenjang", desc: "Rujukan BPJS & Konsultasi Kesling.", icon: Ambulance },
      { name: "Pemeriksaan Kekerasan terhadap Perempuan dan Anak", slug: "pemeriksaan-kekerasan-perempuan-anak", desc: "Kekerasan Terhadap Perempuan & Anak", icon: Shield },
    ]
  },
  {
    id: "klaster-4",
    title: "Klaster 4: Penanggulangan Penyakit Menular",
    description: "Fokus pada pencegahan, pengendalian penyakit, dan kesehatan lingkungan.",
    icon: ShieldAlert,
    services: [
      { name: "Penyakit Menular Langsung", slug: "penyakit-menular-langsung", desc: "TBC, HIV/AIDS, Kusta, Diare, ISPA, dll.", icon: Thermometer },
      { name: "Surveilans & Respon", slug: "surveilans-respon", desc: "Pemantauan wabah & penyebaran penyakit.", icon: Microscope },
    ]
  },
]

const lintasKlaster = [
  {
    title: "Pelayanan Gigi & Mulut",
    slug: "pelayanan-gigi-mulut",
    icon: Smile,
    items: [
      "Perawatan gigi",
      "Penambalan gigi",
      "Pencabutan gigi",
      "Pembersihan karang gigi (Scalling)"
    ]
  },
  {
    title: "Laboratorium (Labkesmas)",
    slug: "laboratorium-labkesmas",
    icon: Microscope,
    items: [
      "Hematologi: Darah Lengkap",
      "Kimia Klinik",
      "Pemeriksaan TBC",
    ]
  },
  {
    title: "Pelayanan Kefarmasian",
    slug: "pelayanan-kefarmasian",
    icon: Pill,
    description: "Pelayanan resep obat dan penyampaian informasi obat (PIO)."
  },
  {
    title: "UGD 24 Jam",
    slug: "ugd-24-jam",
    icon: Ambulance,
    items: [
      "Penanganan kasus gawat darurat siap 24 jam.",
      "Pelayanan Sirkumsisi / Khitan",
      "Perawatan Luka",
    ]
  },
  {
    title: "Rawat Inap",
    slug: "rawat-inap",
    icon: BedDouble,
    description: "Perawatan pasien rawat inap tingkat pertama."
  },
  {
    title: "Fisioterapi",
    slug: "fisioterapi",
    icon: Accessibility,
    description: "Terapi fisik dan rehabilitasi medik dasar."
  },
  {
    title: "Promkes & Krisis",
    slug: "promkes-krisis",
    icon: Megaphone,
    description: "Edukasi kesehatan masyarakat dan respon bencana."
  }
]

export default function ServicesPage() {
  return (
    <PublicLayout>
      <Head title="Daftar Layanan" />

      <main className="min-h-screen bg-slate-50">
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
           
           <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none backdrop-blur-sm">
              UPT PUSKESMAS KWANYAR
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Daftar Layanan Terintegrasi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Pelayanan kesehatan paripurna berbasis klaster (Integrasi Layanan Primer). Melayani seluruh siklus hidup masyarakat.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 lg:px-8 space-y-20">
          {clusters.map((cluster, index) => {
              const isManajemen = cluster.id === "klaster-1";

              return (
                <div key={cluster.id} className={`grid md:grid-cols-[1fr,2.5fr] gap-8 md:gap-12 items-start ${index !== 0 ? 'border-t border-gray-200 pt-16' : ''}`}>
                    
                    <div className="flex flex-col justify-center h-full">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="p-3 bg-primary/10 rounded-xl text-primary shadow-sm">
                             <cluster.icon className="w-6 h-6" />
                           </span>
                           <span className="text-primary font-bold uppercase tracking-wider text-xs">
                             {cluster.id.split(":")[0].replace("-", " ")}
                           </span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            {cluster.title.split(":")[1]}
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-base">
                            {cluster.description}
                        </p>
                    </div>

                    <div className="w-full">
                        
                        {isManajemen ? (
                            <Link href="/services/manajemen-puskesmas" className="block group">
                                <Card className="border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-primary/10"></div>
                                    
                                    <CardContent className="p-8 flex items-start gap-6 relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                                            <cluster.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                Manajemen Puskesmas
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed mb-4">
                                                Klik disini untuk melihat detail.
                                            </p>
                                            <span className="text-primary text-sm font-bold flex items-center gap-2">
                                                Lihat Selengkapnya <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cluster.services.map((service: any, idx) => (
                                    <Link key={idx} href={`/services/${service.slug}`} className="block h-full">
                                        <Card className="group border-gray-200 bg-white h-full relative overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer">
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
                                            <CardContent className="p-5 flex flex-col h-full relative z-10">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary">
                                                        <service.icon className="w-5 h-5 transition-colors" />
                                                    </div>
                                                    <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors leading-tight">
                                                        {service.name}
                                                    </h3>
                                                </div>
                                                {service.desc && (
                                                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mt-auto">
                                                      {service.desc}
                                                  </p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                )
            })}
        </section>

        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                      Lintas Klaster
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Unit Penunjang & Gawat Darurat
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                      Unit pelayanan yang mendukung seluruh klaster, siap siaga 24 jam untuk gawat darurat dan persalinan.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lintasKlaster.map((item: any, idx) => (
                      <Link key={idx} href={`/services/${item.slug}`} className="block h-full">
                        <Card className="h-full flex flex-col border-gray-200 hover:border-orange-500/50 hover:shadow-md transition-all duration-300 bg-orange-50/30">                            <CardHeader className="flex flex-row items-center gap-4 pb-3">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                                  {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                {item.items ? (
                                    <ul className="space-y-2 mt-1">
                                        {item.items.map((subItem: string, subIdx: number) => (
                                            <li key={subIdx} className="text-sm text-gray-600 flex items-start gap-2.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                                                <span className="leading-snug">{subItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                        {item.description}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
            </div>
        </section>

      </main>
    </PublicLayout>
  )
}