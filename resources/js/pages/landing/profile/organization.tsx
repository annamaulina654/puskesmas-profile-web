import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCircle2 } from "lucide-react"

const leadership = [
  {
    name: "Rudi Hartono, S.Kep., Ns",
    position: "Kepala UPT Puskesmas",
    image: "/images/bapak.jpeg",
  },
]

const clusters = [
  {
    id: "klaster1",
    name: "Klaster 1: Manajemen",
    pj: "Saiyah, S.Keb., Bdn",
    teams: [
      { name: "Manajemen inti Puskesmas", pj: "QURRATUL AINI, S.Kep., Ns" },
      { name: "Manajemen Ketatausahaan", pj: "Anis Ekawati, A.Md.Keb" },
      { name: "Manajemen SDM", pj: "Iwan Sugianto, A.Md. Kep" },
      { name: "Manajemen Sarana, Prasarana dan Perbekalan Kesehatan", pj: "Imam Wahyudi, AMAK" },
      { name: "Manajemen Manajemen Mutu pelayanan", pj: "drg. Zulaikha Dwi Lestari" },
      { name: "Manajemen Keuangan dan Aset/BMD", pj: "Akhmad Junaidi, S.Kep.,Ns" },
      { name: "Manajemen Sistem Informasi Digital", pj: "Nurul Hidayati, A.Md.Keb" },
      { name: "Manajemen Jejaring", pj: "Haris Sugianto, S.Kep., Ns" },
    ]
  },
  {
    id: "klaster2",
    name: "Klaster 2: Ibu & Anak",
    pj: "Yefri Lisma Utari, S.ST",
    teams: [
      { name: "Ibu Hamil, Bersalin, Nifas", pj: "Yefri Lisma Utari, S.ST" },
      { name: "Balita dan Anak Pra-sekolah", pj: "Yefri Lisma Utari, S.ST" },
      { name: "Anak Usia Sekolah dan Remaja", pj: "Yefri Lisma Utari, S.ST" },
    ]
  },
  {
    id: "klaster3",
    name: "Klaster 3: Usia Dewasa & Lansia",
    pj: "dr. Qurrotu Aini",
    teams: [
      { name: "Usia Dewasa", pj: "Kusmiyati, S.Kep.,Ns" },
      { name: "Lanjut Usia", pj: "Fuad Helmi, S.Kep.,NS" },
    ]
  },
  {
    id: "klaster4",
    name: "Klaster 4: Penanggulangan Penyakit Menular",
    pj: "Shofiyyatuddaimah, S.Kep., Ns",
    teams: [
      { name: "Kesehatan Lingkungan", pj: "Ibnatil Fitriya, S.Tr.Kes" },
      { name: "Surveilans dan respon", pj: "Fahrur Rozy, A.Md.Kep" },
    ]
  },
  {
    id: "lintas",
    name: "Lintas Klaster",
    pj: "drg. Zulaikha Dwi Lestari",
    teams: [
      { name: "Promosi kesehatan", pj: "Ummu Fadilah, S.Kep., Ns" },
      { name: "Pelayanan kesehatan gigi dan mulut", pj: "drg. Zulaikha Dwi Lestari" },
      { name: "Pelayanan Gawat darurat", pj: "Ach. Muzammil, S.Kep., Ns" },
      { name: "Pelayanan Kefarmasian", pj: "Apt. Maulidatul Islamiyah, S.Farm" },
      { name: "Pelayanan Labkesmas", pj: "Lismawati, S.Tr.Kes" },
      { name: "Pelayanan Rawat Inap", pj: "Ummu Fadilah, S.Kep.,Ns" },
      { name: "Penanggulangan respon krisis kesehatan", pj: "Ummu Fadilah, S.Kep., Ns" },
      { name: "Pelayanan fisioterapi", pj: "dr. Qurrotu Aini" },
    ]
  }
]

export default function OrganizationPage() {
  return (
    <PublicLayout>
      <Head title="Struktur Organisasi" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Struktur Organisasi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Tim profesional UPT Puskesmas Kwanyar tahun 2026
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
                Struktur organisasi berdasarkan SK Kepala Puskesmas Tahun 2026
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
                <Card key={index} className="w-full max-w-sm border-0 shadow-lg group hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    
                    <div className="w-40 h-40 mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden relative group-hover:border-primary/20 transition-colors duration-300">
                        {person.image ? (
                            <img 
                                src={person.image} 
                                alt={person.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.classList.add('bg-primary/10', 'flex', 'items-center', 'justify-center');
                                    e.currentTarget.parentElement!.innerHTML = '<svg class="w-20 h-20 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>';
                                }}
                            />
                        ) : (
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                <UserCircle2 className="w-20 h-20 text-primary" />
                            </div>
                        )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{person.name}</h3>
                    <div className="h-1 w-12 bg-primary rounded-full mb-3" />
                    <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{person.position}</p>
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
                        {cluster.name.split(':')[0]} 
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