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
  Activity,
  ShieldAlert,
  Briefcase,
  Building2,
  FileText,
  Syringe,
  Thermometer,
  BedDouble,
  Accessibility,
  Droplets,
  Phone,
  Megaphone,
  Leaf,
  ClipboardCheck,
  Search,
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
      { name: "Manajemen Ketatausahaan", icon: FileText },
      { name: "Manajemen SDM", icon: Users },
      { name: "Manajemen Sarana & Prasarana", icon: Building2 },
      { name: "Manajemen Mutu Pelayanan", icon: ClipboardCheck },
      { name: "Manajemen Keuangan & Aset (BMD)", icon: Briefcase },
      { name: "Manajemen Sistem Informasi Digital", icon: Activity },
      { name: "Manajemen Jejaring Puskesmas", icon: Phone },
    ]
  },
  {
    id: "klaster-2",
    title: "Klaster 2: Ibu, Anak & Remaja",
    description: "Melayani ibu hamil, bersalin, nifas, bayi, balita, anak pra-sekolah, usia sekolah, dan remaja.",
    icon: Baby,
    services: [
      { name: "ANC (Antenatal Care)", desc: "Pemeriksaan kehamilan rutin.", icon: Heart },
      { name: "Persalinan & Nifas", desc: "Pertolongan persalinan normal & perawatan pasca lahir.", icon: Baby },
      { name: "Neonatal Esensial", desc: "Perawatan khusus bayi baru lahir.", icon: Smile },
      { name: "Pelayanan Gizi Ibu & Anak", desc: "Konsultasi gizi, konsultasi laktasi, & pantau pertumbuhan.", icon: Droplets },
      { name: "Imunisasi", desc: "Pelayanan imunisasi dasar dan lanjutan.", icon: Syringe },
      { name: "SDIDTK", desc: "Stimulasi, Deteksi, Intervensi Dini Tumbuh Kembang.", icon: Accessibility },
      { name: "MTBS", desc: "Manajemen Terpadu Balita Sakit.", icon: Stethoscope },
      { name: "Pembuatan Surat Sehat", desc: "Untuk anak usia 0-17 tahun", icon: Search },
      { name: "USG & SHK", desc: "Ultrasonografi & Skrining Hipotiroid.", icon: Activity },
      { name: "Pelayanan CKG", desc: "Pelayanan Cek Kesehatan Gratis Anak satu kali dalam satu tahun", icon: Activity },
    ]
  },
  {
    id: "klaster-3",
    title: "Klaster 3: Dewasa & Lansia",
    description: "Melayani kelompok usia produktif dan lanjut usia.",
    icon: Users,
    services: [
      { name: "Pelayanan CKG", desc: "Pelayanan Cek Kesehatan Gratis satu kali dalam satu tahun", icon: Stethoscope },
      { name: "Pengobatan Umum", desc: "Pemeriksaan & pengobatan penyakit umum.", icon: Stethoscope },
      { name: "Pelayanan KB", desc: "Keluarga Berencana.", icon: Users },
      { name: "Kesehatan Gigi Dewasa", desc: "Perawatan gigi & mulut usia dewasa.", icon: Smile },
      { name: "Surat Keterangan Sehat", desc: "-", icon: Leaf },
      { name: "Pemeriksaan catin", desc: "-", icon: Leaf },
      { name: "Rujukan berjenjang", desc: "Inspeksi sanitasi & konsultasi kesling.", icon: Leaf },
      { name: "Pemeriksaan Kekerasan terhadap perempuan dan anak", desc: "-", icon: Leaf },
    ]
  },
  {
    id: "klaster-4",
    title: "Klaster 4: Penanggulangan Penyakit",
    description: "Fokus pada pencegahan, pengendalian penyakit, dan kesehatan lingkungan.",
    icon: ShieldAlert,
    services: [
      { name: "Penyakit Menular Langsung", desc: "TBC, HIV/AIDS, Kusta, Frambusia, Diare, Hepatitis, ISPA/Covid-19.", icon: Thermometer },
      { name: "Surveilans & Respon", desc: "Pemantauan penyebaran penyakit.", icon: Activity },
    ]
  },
]

const lintasKlaster = [
  {
    title: "Pelayanan Gigi & Mulut",
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
    icon: Microscope,
    items: [
      "Hematologi: Darah Rutin (Hb, Lekosit, dll)",
      "Urinalisa: Urine Lengkap & Tes Hamil",
      "Kimia Klinik: Kolesterol, Asam Urat, GDA",
      "Mikrobiologi: BTA & TCM",
      "Imunoserologi: HIV, Sipilis, Hepatitis B"
    ]
  },
  {
    title: "Pelayanan Kefarmasian",
    icon: Pill,
    description: "Pelayanan resep obat dan penyampaian informasi obat (PIO)."
  },
  {
    title: "UGD 24 Jam",
    icon: Ambulance,
    items: [
      "Penanganan kasus gawat darurat siap 24 jam.",
      "Pelayanan Sirkumsisi / Khitan",
      "Perawatan Luka",
    ]
  },
  {
    title: "Rawat Inap",
    icon: BedDouble,
    description: "Perawatan pasien rawat inap tingkat pertama."
  },
  {
    title: "Fisioterapi",
    icon: Accessibility,
    description: "Terapi fisik dan rehabilitasi medik dasar."
  },
  {
    title: "Promkes & Krisis",
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
            {clusters.map((cluster, index) => (
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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cluster.services.map((service: any, idx) => (
                            <Card key={idx} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary/50 bg-white h-full relative overflow-hidden">
                                {/* Dekorasi Hover */}
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
                        ))}
                    </div>
                </div>
            ))}
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
                        <Card key={idx} className="border-gray-200 hover:border-orange-500/50 hover:shadow-md transition-all duration-300 bg-orange-50/30">
                            <CardHeader className="flex flex-row items-center gap-4 pb-3">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                                  {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
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
                    ))}
                </div>
            </div>
        </section>

      </main>
    </PublicLayout>
  )
}