import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Stethoscope, Activity, Baby, Smile } from "lucide-react"

export default function RatesPage() {

  const tariffSections = [
    {
        title: "1. Pelayanan Rawat Jalan",
        icon: Stethoscope,
        description: "Meliputi pendaftaran, pemeriksaan kesehatan umum, dan konsultasi dokter.",
        image: "/images/tarif1.png" 
    },
    {
        title: "2. Tindakan Medik & Gawat Darurat",
        icon: Activity,
        description: "Meliputi tindakan jahit luka, perawatan luka, insisi, dan kegawatdaruratan.",
        image: "/images/tarif2.png" 
    },
    {
        title: "3. Kesehatan Ibu, Anak & Persalinan",
        icon: Baby,
        description: "Meliputi persalinan normal, pemeriksaan kehamilan (ANC), dan imunisasi.",
        image: "/images/tarif3.png" 
    },
    {
        title: "4. Pelayanan Gigi & Mulut",
        icon: Smile,
        description: "Meliputi pencabutan gigi, penambalan sementara/tetap, dan scalling.",
        image: "/images/tarif4.png" 
    }
  ];

  return (
    <PublicLayout>
      <Head title="Tarif Pelayanan" />

      <main className="min-h-screen bg-green-50">
        
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
           <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none backdrop-blur-sm">
              TRANSPARANSI PUBLIK
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Tarif Retribusi Pelayanan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Daftar biaya resmi berdasarkan Peraturan Daerah No. 9 Tahun 2025.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 lg:px-8 max-w-5xl relative">
            
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

            <div className="mb-16 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg flex gap-4 items-start text-orange-900 shadow-md">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-orange-600" />
                <div>
                    <h4 className="font-bold text-lg">Informasi Penting bagi Peserta BPJS Kesehatan</h4>
                    <p className="mt-2 leading-relaxed text-orange-800">
                        Bagi peserta <strong>BPJS Kesehatan (KIS)</strong> aktif yang mengikuti prosedur rujukan dengan benar, <strong>seluruh biaya pelayanan GRATIS</strong>. Tarif di bawah ini hanya berlaku untuk Pasien Umum / Non-BPJS.
                    </p>
                </div>
            </div>

            <div className="space-y-20">
                {tariffSections.map((section, index) => (
                    <div key={index} className="scroll-mt-24">
                        
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white border border-green-100 flex items-center justify-center text-primary flex-shrink-0 mt-1 shadow-sm">
                                <section.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {section.title}
                                </h2>
                                <p className="text-lg text-gray-500">
                                    {section.description}
                                </p>
                            </div>
                        </div>

                        <div className="w-full rounded-2xl overflow-hidden border border-green-100 shadow-lg shadow-green-900/5 bg-white p-2">
                            <img 
                                src={section.image} 
                                alt={section.title}
                                className="w-full h-auto object-cover rounded-xl"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<div class="p-10 text-center text-gray-400 bg-gray-50 rounded-xl">Gambar ${section.title} belum tersedia di folder images.</div>`;
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 pt-8 border-t border-green-200 text-center text-gray-400">
                <p>Sumber Data: Lampiran Perda Kab. Bangkalan No. 9 Tahun 2025</p>
            </div>

        </section>

      </main>
    </PublicLayout>
  )
}