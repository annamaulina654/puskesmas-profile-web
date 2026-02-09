import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Clock, CalendarClock, Stethoscope, ClipboardList } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServiceHours() {
  return (
    <PublicLayout>
      <Head title="Jadwal Pelayanan" />

      <main className="min-h-screen bg-green-50">
        
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm shadow-sm border border-white/20">
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

        <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              <Card className="border border-green-100 shadow-lg hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 overflow-hidden bg-white group">
                <div className="h-2 bg-blue-500 w-full group-hover:h-3 transition-all duration-300"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 border border-blue-100">
                        <ClipboardList className="w-6 h-6" />
                    </div>
                    <div>
                        <Badge variant="outline" className="mb-1 text-blue-600 border-blue-200 bg-blue-50">Loket</Badge>
                        <CardTitle className="text-2xl text-gray-800">Jam Pendaftaran</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Waktu operasional loket pendaftaran pasien.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Senin - Kamis</span>
                    </div>
                    <span className="font-bold text-blue-700 bg-white px-3 py-1 rounded-md shadow-sm border border-blue-100">07.15 - 12.00</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Jumat</span>
                    </div>
                    <span className="font-bold text-blue-700 bg-white px-3 py-1 rounded-md shadow-sm border border-blue-100">07.15 - 10.00</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Sabtu</span>
                    </div>
                    <span className="font-bold text-blue-700 bg-white px-3 py-1 rounded-md shadow-sm border border-blue-100">07.15 - 11.00</span>
                  </div>

                </CardContent>
              </Card>

              <Card className="border border-green-100 shadow-lg hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 overflow-hidden bg-white group">
                <div className="h-2 bg-green-500 w-full group-hover:h-3 transition-all duration-300"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-green-50 rounded-lg text-green-600 border border-green-100">
                        <Stethoscope className="w-6 h-6" />
                    </div>
                      <div>
                        <Badge variant="outline" className="mb-1 text-green-600 border-green-200 bg-green-50">Poliklinik</Badge>
                        <CardTitle className="text-2xl text-gray-800">Jam Pelayanan</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Waktu pelayanan tindakan dan konsultasi dokter.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-green-50/50 hover:border-green-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Senin - Kamis</span>
                    </div>
                    <span className="font-bold text-green-700 bg-white px-3 py-1 rounded-md shadow-sm border border-green-100">07.15 - 13.00</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-green-50/50 hover:border-green-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Jumat</span>
                    </div>
                    <span className="font-bold text-green-700 bg-white px-3 py-1 rounded-md shadow-sm border border-green-100">07.15 - 10.30</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-green-50/50 hover:border-green-100 transition-colors">
                    <div className="flex items-center gap-3">
                        <CalendarClock className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">Sabtu</span>
                    </div>
                    <span className="font-bold text-green-700 bg-white px-3 py-1 rounded-md shadow-sm border border-green-100">07.15 - 12.00</span>
                  </div>

                </CardContent>
              </Card>

            </div>

            <div className="max-w-5xl mx-auto mt-10 text-center">
              <div className="inline-block px-6 py-3 bg-red-50 text-red-700 rounded-full border border-red-100 shadow-sm text-sm font-medium">
                 * Jadwal UGD (Unit Gawat Darurat) dan Persalinan tetap buka <strong>24 Jam</strong> setiap hari.
              </div>
            </div>

          </div>
        </section>

      </main>
    </PublicLayout>
  )
}