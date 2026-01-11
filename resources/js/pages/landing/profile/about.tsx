import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Users, Calendar, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  { year: "2000", event: "UPT Puskesmas Kwanyar didirikan" },
  { year: "2010", event: "Renovasi gedung dan perluasan fasilitas" },
  { year: "2015", event: "Raih akreditasi pertama dari Kemenkes" },
  { year: "2020", event: "Implementasi sistem digital SIMPUS" },
  { year: "2024", event: "Raih akreditasi Utama" },
]

const facilities = [
  "Ruang Pemeriksaan Umum",
  "Ruang KIA/KB",
  "Ruang Imunisasi",
  "Laboratorium",
  "Apotek/Farmasi",
  "Ruang Gigi",
  "UGD 24 Jam",
  "Ruang Rawat Inap",
]

export default function AboutPage() {
  return (
    <PublicLayout>
      <Head title="Tentang Kami - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Tentang Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Mengenal lebih dekat UPT Puskesmas Kwanyar</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Profil Singkat
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  UPT Puskesmas Kwanyar
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  UPT Puskesmas Kwanyar adalah unit pelaksana teknis kesehatan di bawah Dinas Kesehatan yang
                  bertanggung jawab menyelenggarakan pembangunan kesehatan di wilayah kerjanya. Didirikan pada tahun 2000,
                  kami telah melayani masyarakat selama lebih dari 25 tahun.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Dengan komitmen untuk memberikan pelayanan kesehatan yang berkualitas, merata, dan terjangkau, kami
                  terus berinovasi dan meningkatkan kualitas layanan untuk memenuhi kebutuhan kesehatan masyarakat di
                  wilayah kerja kami.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">25+</div>
                        <div className="text-xs text-muted-foreground">Tahun Berdiri</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-xs text-muted-foreground">Tenaga Medis</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/placeholder.jpg"
                  alt="Gedung Puskesmas" 
                  className="w-full h-full object-cover" 
                />
              </div>
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
                Perjalanan Kami
              </h2>
              <p className="text-muted-foreground text-lg">Tonggak sejarah UPT Puskesmas Kwanyar</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                  </div>
                  <Card className="flex-1 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <p className="text-foreground font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Fasilitas Kami
              </h2>
              <p className="text-muted-foreground text-lg">Fasilitas modern untuk pelayanan terbaik</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{facility}</span>
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