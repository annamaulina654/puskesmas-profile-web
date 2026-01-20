import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { 
  Target, 
  Eye, 
  Quote
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  "Terlaksananya Pelayanan Kesehatan Dasar yang makin bermutu, dengan menetapkan Standar Pelayanan yang tersedia di Puskesmas.",
  "Terlaksananya peningkatan kompetensi pegawai melalui pendidikan, pelatihan, seminar, dan workshop.",
  "Meningkatkan intensitas sosialisasi tentang Pelayanan di Puskesmas Kwanyar."
]

const taqwimValues = [
  { 
    letter: "T", 
    word: "TAWADLU'", 
    meaning: "Sikap merendah, rendah hati & ramah dalam melayani." 
  },
  { 
    letter: "A", 
    word: "AMANAH", 
    meaning: "Melaksanakan tugas & tanggung jawab dengan tepat dan jujur." 
  },
  { 
    letter: "Q", 
    word: "QONA'AH", 
    meaning: "Menerima adanya / melaksanakan tugas dengan ikhlas." 
  },
  { 
    letter: "W", 
    word: "WIHDAH", 
    meaning: "Membangun persatuan, kekompakan & sehati dalam bertugas." 
  },
  { 
    letter: "I", 
    word: "ISTIQOMAH", 
    meaning: "Berkesinambungan sesuai dengan tujuan & konsisten." 
  },
  { 
    letter: "M", 
    word: "MUKHLIS", 
    meaning: "Menjadi manusia yang ikhlas dalam pengabdian." 
  },
]

export default function VisionMissionPage() {
  return (
    <PublicLayout>
      <Head title="Visi, Misi & Tata Nilai" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Visi, Misi & Tata Nilai
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Komitmen dan landasan pelayanan UPT Puskesmas Kwanyar
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-lg">VISI</span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Visi UPT Puskesmas Kwanyar
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                  "Terwujudnya Puskesmas Kwanyar, sebagai Fasilitas Kesehatan Tingkat Pertama yang menjadi pilihan masyarakat Kwanyar, dalam memberikan pelayanan Kesehatan yang bermutu, didukung dengan tenaga yang profesional menuju masyarakat Bangkalan yang religius dan sejahtera berbasis potensi lokal."
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src="/images/formal-achivement.jpeg" 
                  alt="Visi Puskesmas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Misi Kami
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Langkah strategis untuk mewujudkan visi kesehatan masyarakat
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {missions.map((mission, index) => (
                <Card key={index} className="border-0 shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed text-lg">{mission}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/80" />
            <h3 className="text-xl md:text-2xl font-medium text-white/80 mb-6 tracking-[0.2em] uppercase">Motto Pelayanan</h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold italic leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              "Anda Sembuh <br className="hidden md:block" /> Kami Bahagia"
            </h2>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Semboyan & Tata Nilai: TAQWIM
              </h2>
              <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold text-primary">TAQWIM</span> telah menjadi jiwa Puskesmas dalam memberikan pelayanan pada masyarakat dan menjadi stabilisator agar antar petugas dapat saling kontrol, dengan harapan penderita dan keluarganya merasa <span className="font-bold text-foreground">PUAS</span> akan pelayanan yang diberikan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {taqwimValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      {value.letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{value.word}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.meaning}
                      </p>
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