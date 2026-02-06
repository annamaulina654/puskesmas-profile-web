import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, Building, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const milestones = [
  { year: "1975", event: "Puskesmas Kwanyar resmi didirikan" },
  { year: "2007", event: "Membuka Pelayanan Obstetri Neonatus Emergensi Dasar (PONED)" },
  { year: "2019", event: "Renovasi gedung sesuai standar Kemenkes RI" },
  { year: "Kini", event: "Teregistrasi sebagai Puskesmas Rawat Inap & Terakreditasi" },
]

const facilities = [
  "UGD 24 Jam",
  "Rawat Inap 24 Jam",
  "PONED Persalinan 24 Jam",
  "Rawat Jalan",
  "Ambulance 24 Jam",
  "CKG",
  "Laboratorium",
]

export default function AboutPage() {
  return (
    <PublicLayout>
      <Head title="Tentang Kami" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Tentang Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Mengenal lebih dekat profil dan sejarah UPT Puskesmas Kwanyar</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  Puskesmas sebagai Unit Kesatuan Terdepan secara fungsional, administratif, dan fisik melakukan berbagai usaha kesehatan pokok (Basic Health Services). Kedudukan Puskesmas sebagai sarana pelayanan kesehatan strata pertama memegang peranan penting dalam mengatasi permasalahan kesehatan, dengan tujuan utama memelihara dan meningkatkan mutu pelayanan kesehatan dasar.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  UPT Puskesmas Kwanyar merupakan fasilitas pelayanan kesehatan primer yang terletak di <strong>Jl. Raya Dlemer No. 10, Kecamatan Kwanyar</strong>. Berdiri sejak tahun <strong>1975</strong>, kami telah melayani masyarakat selama setengah abad. Berdasarkan data Pusdatin Kemenkes RI, kami teregistrasi sebagai <strong>Puskesmas Rawat Inap</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Pada tahun 2007, kami membuka Pelayanan Obstetri Neonatus Emergensi Dasar (PONED) dan menjadi rujukan persalinan sekitar. Selanjutnya pada tahun 2019, dilakukan renovasi total sesuai standar Kementerian Kesehatan RI untuk menunjang pelayanan yang lebih intensif, berkesinambungan, dan merata.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-xs text-muted-foreground">Tahun Pengabdian</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Jl. Raya Dlemer</div>
                        <div className="text-xs text-muted-foreground">No. 10 Kwanyar</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl mt-8 lg:mt-0">
                <img 
                  src="/images/pus.jpeg"
                  alt="Gedung UPT Puskesmas Kwanyar" 
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
                Jejak Langkah
              </h2>
              <p className="text-muted-foreground text-lg">Tonggak sejarah perjalanan UPT Puskesmas Kwanyar</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-bold text-lg shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && <div className="w-1 h-full bg-primary/20 mt-2 rounded-full" />}
                  </div>
                  <Card className="flex-1 border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-center h-full">
                      <p className="text-foreground font-medium text-lg">{milestone.event}</p>
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
                Fasilitas & Layanan
              </h2>
              <p className="text-muted-foreground text-lg">Fasilitas memadai untuk pelayanan kesehatan paripurna</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-border hover:border-primary/30 hover:shadow-md transition-all group cursor-default">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Building className="w-5 h-5 text-primary group-hover:text-white" />
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