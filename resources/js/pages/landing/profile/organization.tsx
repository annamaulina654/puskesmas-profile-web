import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const leadership = [
  {
    name: "Rudi Hartono, S.Kep., Ns",
    position: "Kepala UPT Puskesmas",
    image: "/images/placeholder.svg",
  },
]

const clusters = [
  {
    id: "klaster1",
    name: "Klaster 1: Manajemen",
    pj: "Salyah, S.Keb., Bdn",
    teams: [
      { name: "Manajemen SDM", pj: "Iwan Sugianto, A.Md. Kep" },
      { name: "Manajemen Mutu & Keselamatan Pasien", pj: "drg. Zulaikha Dwi Lestari" },
      { name: "Manajemen Keuangan & Aset", pj: "Mala" },
      { name: "Manajemen Sistem Informasi Digital", pj: "Nurul Hidayati, A.Md.Keb" },
      { name: "Manajemen Jejaring & Pustu", pj: "Haris Sugianto, S.Kep., Ns" },
    ]
  },
  {
    id: "klaster2",
    name: "Klaster 2: Ibu & Anak",
    pj: "Yefri Lisma Utari, S.ST",
    teams: [
      { name: "Kesehatan Ibu Hamil, Bersalin, Nifas", pj: "Yefri Lisma Utari, S.ST" },
      { name: "Kesehatan Bayi & Balita", pj: "Yefri Lisma Utari, S.ST" },
      { name: "Imunisasi", pj: "Tiyani, S.Tr.Kes" },
      { name: "Gizi", pj: "Devi Nur Ariska, Gz" },
      { name: "Kesehatan Remaja & Anak Sekolah", pj: "Dian Muslimah, A.Md.Keb" },
    ]
  },
  {
    id: "klaster3",
    name: "Klaster 3: Dewasa & Lansia",
    pj: "dr. Qurratul Aini",
    teams: [
      { name: "Kesehatan Jiwa", pj: "Suprapto, S.Kep., Ns" },
      { name: "Penyakit Menular (P2M)", pj: "Shofiyyatuddaimah, S.Kep., Ns" },
      { name: "Penyakit Tidak Menular (PTM)", pj: "Aulia Agustiningsih, A.Md. Keb" },
      { name: "Kesehatan Gigi & Mulut", pj: "drg. Zulaikha Dwi Lestari" },
      { name: "Kesehatan Lansia", pj: "Fuad Helmi, S.Kep., Ns" },
    ]
  },
  {
    id: "klaster4",
    name: "Klaster 4: P2M & Kesling",
    pj: "Shofiyyatuddaimah, S.Kep., Ns",
    teams: [
      { name: "Surveilans & KLB", pj: "Fahrur Rozy, A.Md.Kep" },
      { name: "Kesehatan Lingkungan", pj: "Ibnatil Fitriya, S.Tr.Kes" },
      { name: "Surveilans Penyakit Menular", pj: "Aris Susanti, S.Kep., Ns" },
    ]
  },
  {
    id: "lintas",
    name: "Lintas Klaster",
    pj: "drg. Zulaikha Dwi Lestari",
    teams: [
      { name: "Gawat Darurat (UGD)", pj: "Ach. Muzammil, S.Kep., Ns" },
      { name: "Rawat Inap", pj: "Ummu Fadilah, S.Kep., Ns" },
      { name: "Kefarmasian", pj: "Apt. Maulidatul Islamiyah, S.Farm" },
      { name: "Laboratorium (Labkesmas)", pj: "Lismawati, S.Tr.Kes" },
    ]
  }
]

export default function OrganizationPage() {
  return (
    <PublicLayout>
      <Head title="Struktur Organisasi - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Struktur Organisasi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Tim profesional UPT Puskesmas Kwanyar tahun 2025
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Bagan Organisasi
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Struktur organisasi berdasarkan SK Kepala Puskesmas Tahun 2025
              </p>
            </div>
            <div className="relative max-w-5xl mx-auto p-4 border rounded-2xl bg-white shadow-xl">
              <img
                src="/images/struktur.png" 
                alt="Bagan Organisasi Puskesmas Kwanyar"
                width="1000"
                height="600"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Pimpinan Puskesmas
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {leadership.map((person, index) => (
                <Card key={index} className="w-full max-w-xs border-0 shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center bg-white relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-1">{person.name}</h3>
                    <p className="text-primary font-medium">{person.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Unit Pelayanan (Klaster)
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pembagian tugas pelayanan berdasarkan siklus hidup (Integrasi Layanan Primer)
              </p>
            </div>

            <Tabs defaultValue="klaster1" className="max-w-4xl mx-auto">
              <div className="overflow-x-auto pb-4 mb-4">
                 <TabsList className="w-full justify-start md:justify-center h-auto p-1 bg-secondary/50 rounded-xl">
                    {clusters.map((cluster) => (
                        <TabsTrigger 
                            key={cluster.id} 
                            value={cluster.id}
                            className="px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all text-sm md:text-base whitespace-nowrap"
                        >
                        {cluster.name.split(':')[0]} {/* Ambil nama pendek: "Klaster 1" */}
                        </TabsTrigger>
                    ))}
                </TabsList>
              </div>

              {clusters.map((cluster) => (
                <TabsContent key={cluster.id} value={cluster.id} className="mt-0">
                  <Card className="border-0 shadow-xl bg-white overflow-hidden">
                    <div className="bg-primary/5 p-6 border-b border-primary/10">
                        <h3 className="text-2xl font-bold text-primary mb-1">{cluster.name}</h3>
                        <p className="text-muted-foreground">Penanggung Jawab: <span className="font-semibold text-foreground">{cluster.pj}</span></p>
                    </div>
                    <CardContent className="p-0">
                      <div className="divide-y divide-gray-100">
                        {cluster.teams.map((team, idx) => (
                           <div key={idx} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:bg-gray-50 transition-colors">
                                <span className="font-medium text-gray-800 text-lg">{team.name}</span>
                                <span className="text-sm md:text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                                    PJ: {team.pj}
                                </span>
                           </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

          </div>
        </section>

      </main>
    </PublicLayout>
  )
}