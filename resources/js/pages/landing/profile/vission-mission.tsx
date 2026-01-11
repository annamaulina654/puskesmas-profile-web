import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Target, Eye, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const missions = [
  "Memberikan pelayanan kesehatan yang berkualitas, merata, dan terjangkau bagi seluruh lapisan masyarakat",
  "Meningkatkan kesadaran dan partisipasi masyarakat dalam upaya kesehatan preventif dan promotif",
  "Mengembangkan sumber daya manusia kesehatan yang profesional dan berintegritas",
  "Membangun kemitraan dengan berbagai pihak untuk meningkatkan derajat kesehatan masyarakat",
  "Menerapkan sistem manajemen mutu dalam penyelenggaraan pelayanan kesehatan",
  "Mengoptimalkan pemanfaatan teknologi informasi dalam pelayanan kesehatan",
]

const values = [
  { title: "Profesional", description: "Melayani dengan kompetensi dan standar tertinggi" },
  { title: "Integritas", description: "Jujur, transparan, dan bertanggung jawab" },
  { title: "Empati", description: "Memahami dan peduli terhadap kebutuhan pasien" },
  { title: "Inovatif", description: "Terus berinovasi untuk pelayanan yang lebih baik" },
]

export default function VisionMissionPage() {
  return (
    <PublicLayout>
      <Head title="Visi & Misi - UPT Puskesmas Kwanyar" />

      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Visi & Misi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Komitmen kami dalam melayani kesehatan masyarakat</p>
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
                  Menjadi Puskesmas Unggulan yang Terpercaya
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mewujudkan masyarakat sehat, mandiri, dan berkeadilan melalui pelayanan kesehatan primer yang
                  berkualitas, inovatif, dan berorientasi pada kepuasan masyarakat di wilayah kerja UPT Puskesmas Kwanyar.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/healthcare-team-meeting-discussing-vision-in-moder.jpg"
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

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {missions.map((mission, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed">{mission}</p>
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
                Nilai-Nilai Kami
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Prinsip yang menjadi landasan dalam setiap pelayanan
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
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