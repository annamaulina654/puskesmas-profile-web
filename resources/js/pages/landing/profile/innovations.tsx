import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Lightbulb, Award, ChevronLeft, ChevronRight, ImageIcon, Smartphone, Clock, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const innovations = [
  {
    title: "Pendaftaran Pasien Mandiri",
    category: "Pelayanan",
    year: "Layanan",
    description:
      "Solusi cerdas menghindari antrian panjang. Integrasi Mobile JKN dan mesin anjungan mandiri membuat kunjungan berobat menjadi lebih cepat dan terencana.",
    images: ["/images/jkn.jpg"],
    impact: "Waktu tunggu pendaftaran dipangkas (±5 menit)",
    guide: {
      estimate: "± 5 Menit",
      steps: [
        "Unduh aplikasi Mobile JKN di Play Store / App Store.",
        "Buka aplikasi dan pilih menu 'Antrean Online'.",
        "Pilih 'Faskes Tingkat Pertama (Kwanyar)'.",
        "Pilih poli tujuan dan tanggal kunjungan di 'Puskesmas Kwanyar'.",
        "Isi keluhan singkat, lalu klik 'Simpan'.",
        "Nomor antrean terbit. Tunjukkan saat datang ke Puskesmas.",
      ]
    }
  },
  {
    title: "DARA PELITA HATI",
    category: "PTM",
    year: "Program",
    description:
      "Pemberdayaan Keluarga Peduli Penderita Darah Tinggi. Inovasi untuk penderita hipertensi dengan pendekatan keluarga.",
    images: ["/images/dara-pelita-hati.jpeg"], 
    impact: "Pengendalian hipertensi berbasis keluarga",
  },
  {
    title: "SI CANTIK BESTIKU",
    category: "TB Paru",
    year: "Program",
    description:
      "Skrining Cakupan Kontak Serumah untuk berantas Tuberkulosis guna meningkatkan angka kesembuhan.",
    images: ["/images/sicantik-bestiku.jpeg"],
    impact: "Meningkatkan angka kesembuhan TB",
  },
  {
    title: "PEMANDU CINTA",
    category: "KIA",
    year: "Program",
    description:
      "Pemeriksaan ANC Terpadu Cegah Kematian Ibu dan Bayi. Pelayanan antenatal komprehensif dan konseling gizi.",
    images: ["/images/pemandu-cinta.jpeg"],
    impact: "Deteksi dini risiko tinggi ibu hamil",
  },
  {
    title: "PERI CILIK",
    category: "UKS",
    year: "Program",
    description:
      "Pemeriksaan Kesehatan oleh Dokter Kecil di Sekolah. Siswa memeriksa gigi temannya sendiri.",
    images: ["/images/peri-cilik.jpeg", "/images/peri-cilik1.jpeg"],
    impact: "Anak tidak takut periksa gigi",
  },
  {
    title: "KURMA PETANI",
    category: "Perkesmas",
    year: "Program",
    description:
      "Kunjungan Rumah Penderita Pneumoni. Asuhan keperawatan lanjutan di rumah pasien setelah rawat inap.",
    images: ["/images/kurma-petani.jpeg", "/images/kurma-petani1.jpeg"],
    impact: "Pencegahan kekambuhan pasca rawat inap",
  },
]

const awards = [
  {
    title: "Puskesmas Pertama Terakreditasi 'PARIPURNA'",
    year: "2023",
    images: ["/images/paripurna.jpeg"],
  },
  {
    title: "Puskesmas Terbaik Se-Kabupaten Bangkalan (Madura Awards)",
    year: "2024",
    images: ["/images/ma1.jpeg", "/images/ma2.jpeg", "/images/ma3.jpeg", "/images/ma-sert.jpeg"],
  },
  {
    title: "Penghargaan Keberhasilan Target PAD 94% (Retribusi Terbaik)",
    year: "2019",
    images: ["/images/PAD.jpg"],
  },
  {
    title: "Puskesmas dengan Pengeluaran Harian Logistik Vaksin Ter-Aktif di Aplikasi SMILE",
    year: "2024",
    images: ["/images/smile.jpeg"],
  },
  {
    title: "Penghargaan Menkes: Instansi Berkomitmen Mewujudkan 'Herd Immunity'",
    year: "2022",
    images: ["/images/herd.jpeg"],
  },
  {
    title: "Bidan Terbaik Sesuai Prosedur Rujukan Kasus Kebidanan",
    year: "2021",
    images: ["/images/placeholder.svg"],
  },
  {
    title: "Puskesmas Berprestasi Tingkat Kabupaten Bangkalan (HKN ke-58)",
    year: "2022",
    images: ["/images/placeholder.svg"],
  },
    {
    title: "Juara II Lomba Pelayanan Publik (ISO)",
    year: "2008",
    images: ["/images/placeholder.svg"],
  },
  {
    title: "Juara II Lomba Lingkungan Bersih Antar Puskesmas (HKN ke-49)",
    year: "2013",
    images: ["/images/placeholder.svg"],
  },
]

export default function InnovationsPage() {
  return (
    <PublicLayout>
      <Head title="Inovasi & Penghargaan" />

      <main className="min-h-screen">
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Inovasi & Penghargaan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Dedikasi kami dalam memberikan pelayanan terbaik melalui inovasi berkelanjutan dan prestasi nyata.
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
                Terobosan layanan UPT Puskesmas Kwanyar untuk masyarakat
              </p>
            </div>

            <div className="space-y-12">
              {innovations.map((innovation, index) => (
                <Card key={index} className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    
                    <div className={`relative w-full h-64 lg:h-auto bg-slate-100 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <InnovationImageSlider images={innovation.images} title={innovation.title} />
                    </div>

                      <CardContent
                        className={`p-8 lg:p-12 flex flex-col justify-center h-full ${index % 2 === 1 ? "lg:order-1" : ""}`}
                      >
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{innovation.category}</Badge>
                        <Badge variant="outline">{innovation.year}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{innovation.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                        {innovation.description}
                      </p>
                      
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 mb-6">
                        <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Dampak / Tujuan</span>
                            <p className="text-foreground font-medium">{innovation.impact}</p>
                        </div>
                      </div>

                      {innovation.guide && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-fit gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                              <Smartphone className="w-4 h-4" />
                              Lihat Cara Daftar Online
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2 text-xl">
                                <Smartphone className="w-6 h-6 text-primary" />
                                Panduan Mobile JKN
                              </DialogTitle>
                              <DialogDescription>
                                Ikuti langkah mudah berikut untuk mendaftar antrean secara online.
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-center gap-3 mb-2">
                                <div className="bg-white p-2 rounded-full shadow-sm">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground font-semibold uppercase">Estimasi Waktu</p>
                                    <p className="font-bold text-gray-800">{innovation.guide.estimate}</p>
                                </div>
                            </div>

                            <div className="space-y-4 py-2">
                                {innovation.guide.steps.map((step, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mt-0.5">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-gray-600 leading-snug">{step}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-2 p-3 bg-green-50 text-green-700 text-sm rounded-lg flex gap-2 items-start border border-green-100">
                                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p>Pastikan Anda sudah memiliki akun BPJS Kesehatan yang aktif.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}

                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="border-0 shadow-lg hover:-translate-y-1 transition-transform duration-300 overflow-hidden h-full flex flex-col group">
                  
                  <div className="relative h-48 bg-slate-100">
                    
                    <InnovationImageSlider images={award.images} title={award.title} />
                    
                    <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full shadow-sm text-sm border border-primary/10">
                        {award.year}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 -mt-10 border-4 border-white shadow-md relative z-10">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-semibold text-foreground text-lg leading-snug">{award.title}</h3>
                    </div>
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

function InnovationImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  if (images.length <= 1) {
    return <img src={images[0]} alt={title} className="h-full w-full object-cover" />
  }

  return (
    <div className="group relative h-full w-full">
      <img
        src={images[currentIndex]}
        alt={`${title} - slide ${currentIndex + 1}`}
        className="h-full w-full object-cover transition-all duration-500"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-gray-800 opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 text-gray-800 opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-sm">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
              currentIndex === slideIndex ? "w-4 bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md z-10">
        <ImageIcon className="h-3 w-3" />
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}