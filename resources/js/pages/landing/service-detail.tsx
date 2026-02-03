import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Clock, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceDetailProps {
  service: {
    name: string;
    description: string;
    category: string;
    schedule: { day: string; time: string }[];
    requirements: string[];
    images: string[];
  }
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <PublicLayout>
      <Head title={service.name} />

      <main className="min-h-screen bg-slate-50">
        <section className="pt-32 pb-10 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <Button asChild variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-6 pl-0">
                <Link href="/services">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Layanan
                </Link>
            </Button>
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none mb-4">
                {service.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              {service.name}
            </h1>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[2fr,1fr] gap-10">
                
                <div className="space-y-10">
                    
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Layanan</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {service.description}
                        </p>

                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-900 mb-3">Persyaratan Pasien:</h4>
                            <ul className="grid sm:grid-cols-2 gap-2">
                                {service.requirements.map((req, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Galeri Kegiatan</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.images.map((img, idx) => (
                                <div key={idx} className="aspect-video rounded-xl overflow-hidden shadow-md group">
                                    <img 
                                        src={img} 
                                        alt={`Kegiatan ${service.name} ${idx + 1}`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:sticky lg:top-24 h-fit">
                    <Card className="border-0 shadow-lg bg-white overflow-hidden">
                        <div className="bg-orange-50 p-4 border-b border-orange-100">
                            <div className="flex items-center gap-2 text-orange-700 font-bold text-lg">
                                <Clock className="w-5 h-5" /> Jadwal Pelayanan
                            </div>
                        </div>
                        <CardContent className="p-0">
                            <table className="w-full text-sm text-left">
                                <tbody className="divide-y divide-gray-100">
                                    {service.schedule.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 font-medium text-gray-700 flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                {item.day}
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-primary">
                                                {item.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center border-t border-gray-100">
                                *Jadwal dapat berubah sewaktu-waktu.
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
      </main>
    </PublicLayout>
  )
}