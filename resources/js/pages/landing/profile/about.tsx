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

      <main className="min-h-screen bg-green-50">
        
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Tentang Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Mengenal lebih dekat profil dan sejarah UPT Puskesmas Kwanyar</p>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-4 py-2 bg-white border border-green-100 text-primary text-sm font-medium rounded-full mb-4 shadow-sm">
                  Profil Singkat
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  UPT Puskesmas Kwanyar
                </h2>
                
                <div className="prose text-muted-foreground leading-relaxed mb-8 text-justify">
                    <p className="mb-4">
                    Puskesmas sebagai Unit Kesatuan Terdepan secara fungsional, administratif, dan fisik melakukan berbagai usaha kesehatan pokok (Basic Health Services). Kedudukan Puskesmas sebagai sarana pelayanan kesehatan strata pertama memegang peranan penting dalam mengatasi permasalahan kesehatan, dengan tujuan utama memelihara dan meningkatkan mutu pelayanan kesehatan dasar.
                    </p>

                    <p className="mb-4">
                    UPT Puskesmas Kwanyar merupakan fasilitas pelayanan kesehatan primer yang terletak di <strong>Jl. Raya Dlemer No. 10, Kecamatan Kwanyar</strong>. Berdiri sejak tahun <strong>1975</strong>, kami telah melayani masyarakat selama setengah abad. Berdasarkan data Pusdatin Kemenkes RI, kami teregistrasi sebagai <strong>Puskesmas Rawat Inap</strong>.
                    </p>

                    <p>
                    Pada tahun 2007, kami membuka Pelayanan Obstetri Neonatus Emergensi Dasar (PONED) dan menjadi rujukan persalinan sekitar. Selanjutnya pada tahun 2019, dilakukan renovasi total sesuai standar Kementerian Kesehatan RI untuk menunjang pelayanan yang lebih intensif, berkesinambungan, dan merata.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-xs text-muted-foreground">Tahun Pengabdian</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-100">
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

              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border-4 border-white mt-8 lg:mt-0 bg-white">
                <img 
                  src="/images/pus.jpeg"
                  alt="Gedung UPT Puskesmas Kwanyar" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50/30 relative">
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
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-green-100 flex items-center justify-center text-primary font-bold text-lg shadow-md group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && <div className="w-1 h-full bg-green-200 mt-2 rounded-full" />}
                  </div>
                  
                  <Card className="flex-1 border border-green-100 shadow-sm hover:shadow-lg hover:shadow-green-900/5 transition-all bg-white hover:-translate-y-1 duration-300">
                    <CardContent className="p-6 flex items-center h-full">
                      <p className="text-foreground font-medium text-lg">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

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
                <Card key={index} className="border border-green-100 hover:border-primary/50 hover:shadow-md hover:shadow-green-900/5 transition-all group cursor-default bg-white">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors border border-green-100">
                      <Building className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{facility}</span>
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