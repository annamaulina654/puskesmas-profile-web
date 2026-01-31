import { Link } from "@inertiajs/react"
import { 
  Baby, 
  Stethoscope, 
  Pill, 
  Microscope, 
  Ambulance, 
  ArrowRight,
  Smile,      
  Bed,        
  ShieldAlert 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Ambulance,
    title: "UGD 24 Jam",
    description: "Penanganan kasus gawat darurat medis dan kesiapsiagaan ambulance 24 jam.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Bed,
    title: "Persalinan 24 Jam",
    description: "Pertolongan persalinan normal, perawatan nifas, dan bayi baru lahir (Neonatal).",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Stethoscope,
    title: "Poli Umum",
    description: "Pemeriksaan dan pengobatan penyakit umum untuk dewasa dan lansia.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Baby,
    title: "Kesehatan Ibu & Anak",
    description: "Layanan ANC (Ibu Hamil), Imunisasi, MTBS, dan Tumbuh Kembang (SDIDTK).",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Smile,
    title: "Kesehatan Gigi",
    description: "Penambalan, pencabutan, dan pembersihan karang gigi (Scaling).",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Microscope,
    title: "Laboratorium",
    description: "Pemeriksaan Hematologi, Urinalisa, Kimia Klinik, dan Mikrobiologi.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: ShieldAlert,
    title: "Pencegahan Penyakit",
    description: "Penanggulangan TBC, HIV, Kusta, dan penyakit menular lainnya.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Pill,
    title: "Farmasi", 
    description: "Pelayanan resep obat, peracikan, dan pemberian informasi obat (PIO).",
    color: "bg-amber-100 text-amber-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Layanan Unggulan
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Layanan Kesehatan Terpadu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            UPT Puskesmas Kwanyar menyediakan fasilitas kesehatan berbasis klaster untuk melayani kebutuhan seluruh siklus hidup masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden bg-card"
            >
              <CardContent className="p-6">
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
            <Link href="/services">
              Lihat Seluruh Layanan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}