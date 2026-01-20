import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Lightbulb, Award, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const innovations = [
  {
    title: "Pendaftaran Pasien Mandiri",
    category: "Pelayanan",
    year: "Layanan",
    description:
      "Solusi untuk menghindari antrian panjang. Melalui Mobile JKN dan mesin antrian, pasien lama tidak perlu menunggu lama.",
    images: ["/images/jkn.jpg"],
    impact: "Waktu tunggu lebih singkat (±10 menit)",
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
  { title: "Juara II Lomba Pelayanan Publik (ISO)", year: "2008" },
  { title: "Juara II Lomba Lingkungan Bersih Antar Puskesmas (HKN ke-49)", year: "2013" },
  { title: "Penghargaan Keberhasilan Target PAD 94% (Retribusi Terbaik)", year: "2019" },
  { title: "Bidan Terbaik Sesuai Prosedur Rujukan Kasus Kebidanan", year: "2021" },
  { title: "Penghargaan Menkes: Instansi Berkomitmen Mewujudkan 'Herd Immunity'", year: "2022" },
  { title: "Puskesmas Berprestasi Tingkat Kabupaten Bangkalan (HKN ke-58)", year: "2022" },
  { title: "Puskesmas Pertama Terakreditasi 'PARIPURNA'", year: "2023" },
  { title: "Puskesmas Terbaik Se-Kabupaten Bangkalan (Madura Awards)", year: "2024" },
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
                    
                   <div className={`relative w-full h-64 lg:h-96 bg-slate-100 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
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
                      
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Dampak / Tujuan</span>
                            <p className="text-foreground font-medium">{innovation.impact}</p>
                        </div>
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
                Penghargaan
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Bukti komitmen kami dalam menjaga mutu pelayanan kesehatan
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {awards.map((award, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 flex flex-col items-center h-full">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                        <h3 className="font-semibold text-foreground mb-3 text-lg leading-snug">{award.title}</h3>
                    </div>
                    <div className="mt-4 pt-4 border-t w-full">
                        <p className="text-primary font-bold text-xl">{award.year}</p>
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

function InnovationImageSlider({ images, title }: { images: string[], title: string }) {
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
        return (
            <img
                src={images[0]}
                alt={title}
                className="object-cover w-full h-full"
            />
        )
    }

    return (
        <div className="relative w-full h-full group">
            <img
                src={images[currentIndex]}
                alt={`${title} - slide ${currentIndex + 1}`}
                className="object-cover w-full h-full transition-all duration-500"
            />
            
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />

            <Button 
                variant="secondary"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={prevSlide}
            >
                <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button 
                variant="secondary"
                size="icon"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={nextSlide}
            >
                <ChevronRight className="w-6 h-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                            currentIndex === slideIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>

            <div className="absolute top-4 right-4 bg-black/60 text-white px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 backdrop-blur-md">
                <ImageIcon className="w-3 h-3" />
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    )
}