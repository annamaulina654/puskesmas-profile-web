import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { 
  Target, 
  Eye, 
  Quote,
  ClipboardCheck, 
  Stethoscope, 
  HandHeart
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  "Terlaksananya Pelayanan Kesehatan Dasar yang makin bermutu, dengan menetapkan Standar Pelayanan yang tersedia di Puskesmas.",
  "Terlaksananya peningkatan kompetensi pegawai melalui pendidikan, pelatihan, seminar, dan workshop.",
  "Meningkatkan intensitas sosialisasi tentang Pelayanan di Puskesmas Kwanyar."
]

const tataNilai = [
  {
    title: "DISIPLIN",
    description: "Taat dan patuh pada peraturan yang diterapkan.",
    icon: ClipboardCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "PROFESIONAL",
    description: "Memberikan pelayanan sesuai dengan disiplin ilmu dan kompetensi.",
    icon: Stethoscope,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "TANGGUNG JAWAB",
    description: "Petugas melaksanakan pekerjaan sebagai perwujudan kesadaran akan kewajibannya.",
    icon: HandHeart,
    color: "bg-orange-100 text-orange-600",
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

        <section className="py-20 bg-green-50 relative">
          
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-green-100 flex items-center justify-center shadow-sm">
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
              
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-4 border-white group">
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

        <section className="py-20 bg-green-50 relative">
           <div className="absolute top-0 left-0 right-0 h-px bg-green-200/50 w-1/2 mx-auto"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-green-100 flex items-center justify-center shadow-sm">
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
                <Card key={index} className="border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 transition-all duration-300 bg-white">
                  <CardContent className="p-8 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-md shadow-green-900/20">
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

        <section className="py-24 bg-green-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tata Nilai Puskesmas
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Puskesmas Kwanyar menjunjung tinggi tata nilai berikut sebagai landasan utama dalam memberikan pelayanan prima kepada masyarakat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {tataNilai.map((value, index) => (
                <Card key={index} className="group relative overflow-hidden border border-green-100 shadow-sm hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    
                    <span className="absolute top-2 right-4 text-6xl font-black text-green-50/50 group-hover:text-green-50 transition-colors select-none -z-0">
                      0{index + 1}
                    </span>

                    <div className={`w-20 h-20 rounded-2xl ${value.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <value.icon className="w-10 h-10" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    <div className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${value.color.replace('bg-', 'bg-').replace('text-', '')}`} />
                    
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