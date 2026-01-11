import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Card, CardContent } from "@/components/ui/card"

const leadership = [
  {
    name: "dr. Siti Aminah, M.Kes",
    position: "Kepala Puskesmas",
    image: "/images/professional-female-doctor-portrait-indonesian.jpg",
  },
  {
    name: "drg. Budi Santoso",
    position: "Kepala Tata Usaha",
    image: "/images/placeholder.svg",
  },
  {
    name: "dr. Maya Putri",
    position: "Koordinator UKM",
    image: "/images/placeholder.svg",
  },
  {
    name: "dr. Ahmad Fauzi",
    position: "Koordinator UKP",
    image: "/images/placeholder.svg",
  },
]

const departments = [
  { name: "Unit Kesehatan Masyarakat (UKM)", staff: 15 },
  { name: "Unit Kesehatan Perorangan (UKP)", staff: 20 },
  { name: "Tata Usaha & Administrasi", staff: 8 },
  { name: "Farmasi", staff: 5 },
  { name: "Laboratorium", staff: 4 },
  { name: "Gizi", staff: 3 },
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
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Tim profesional yang siap melayani kesehatan Anda</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Bagan Organisasi
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Struktur organisasi UPT Puskesmas Kwanyar
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <img
                src="/images/placeholder.svg"
                alt="Bagan Organisasi Puskesmas"
                width="1000"
                height="600"
                className="w-full rounded-2xl shadow-2xl"
              />
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
                Pimpinan Puskesmas
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tim manajemen yang memimpin pelayanan kesehatan
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((person, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{person.name}</h3>
                    <p className="text-primary text-sm font-medium">{person.position}</p>
                  </CardContent>
                </Card>
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
                Unit & Bagian
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Berbagai unit pelayanan dengan tenaga profesional
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {departments.map((dept, index) => (
                <Card key={index} className="border-border hover:border-primary/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{dept.name}</h3>
                    <p className="text-primary font-bold text-2xl">{dept.staff}</p>
                    <p className="text-muted-foreground text-sm">Tenaga Kesehatan</p>
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