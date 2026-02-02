import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Clock, CalendarClock, Stethoscope, ClipboardList } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServiceHours() {
  return (
    <PublicLayout>
      <Head title="Jadwal Pelayanan" />

      <main className="min-h-screen bg-background">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Jadwal Pelayanan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Informasi waktu pendaftaran loket dan pelayanan kesehatan di UPT Puskesmas Kwanyar.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-blue-500 w-full"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                        <ClipboardList className="w-6 h-6" />
                    </div>
                    <div>
                        <Badge variant="outline" className="mb-1 text-blue-600 border-blue-200 bg-blue-50">Loket</Badge>
                        <CardTitle className="text-2xl">Jam Pendaftaran</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Waktu operasional loket pendaftaran pasien.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Senin - Kamis</span>
                    </div>
                    <span className="font-bold text-blue-700">07.15 - 12.00</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Jumat</span>
                    </div>
                    <span className="font-bold text-blue-700">07.15 - 10.00</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Sabtu</span>
                    </div>
                    <span className="font-bold text-blue-700">07.15 - 11.00</span>
                  </div>

                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-2 bg-green-500 w-full"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600">
                        <Stethoscope className="w-6 h-6" />
                    </div>
                     <div>
                        <Badge variant="outline" className="mb-1 text-green-600 border-green-200 bg-green-50">Poliklinik</Badge>
                        <CardTitle className="text-2xl">Jam Pelayanan</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Waktu pelayanan tindakan dan konsultasi dokter.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                   <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Senin - Kamis</span>
                    </div>
                    <span className="font-bold text-green-700">07.15 - 13.00</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Jumat</span>
                    </div>
                    <span className="font-bold text-green-700">07.15 - 10.30</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">Sabtu</span>
                    </div>
                    <span className="font-bold text-green-700">07.15 - 12.00</span>
                  </div>

                </CardContent>
              </Card>

            </div>

            <div className="max-w-5xl mx-auto mt-8 text-center">
                <p className="text-muted-foreground text-sm">
                    * Jadwal UGD (Unit Gawat Darurat) dan Persalinan tetap buka <strong>24 Jam</strong> setiap hari.
                </p>
            </div>

          </div>
        </section>

      </main>
    </PublicLayout>
  )
}