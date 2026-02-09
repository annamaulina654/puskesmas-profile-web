import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Raya Dlemer No. 10 Kwanyar Kodepos 69164",
    },
    {
      icon: Phone,
      title: "Telepon (Umum)",
      content: "0823-3458-2474",
    },
    {
      icon: MessageCircle,
      title: "Layanan Pengaduan",
      content: "0858-1274-2057",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "pkm.kwanyarbangkalan@gmail.com",
    },
  ]

  return (
    <PublicLayout>
      <Head title="Hubungi Kami" />
      
      <main className="min-h-screen bg-green-50">
        
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hubungi Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Temukan informasi lokasi dan kontak Puskesmas Kwanyar di bawah ini.
            </p>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Kami siap melayani Anda. Silakan kunjungi lokasi kami atau hubungi nomor yang tertera sesuai kebutuhan Anda (Umum atau Pengaduan).
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border border-green-100 shadow-sm hover:shadow-md hover:border-primary/40 transition-all bg-white group cursor-default">
                        <CardContent className="p-5 flex items-start gap-5">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-100 group-hover:bg-primary group-hover:text-white transition-colors ${info.color ? "bg-green-100 text-green-700" : "bg-green-50 text-primary"}`}>
                                <info.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{info.title}</h3>
                                <p className="text-muted-foreground font-medium">{info.content}</p>
                            </div>
                        </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="h-full min-h-[500px] w-full sticky top-24">
                <Card className="overflow-hidden border border-green-100 shadow-xl shadow-green-900/5 h-full rounded-2xl bg-white p-1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7416230481867!2d112.85513347403925!3d-7.1558428702030685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd81da855557c25%3A0x768483f0bbc12d14!2sPuskesmas%20Kwanyar!5e0!3m2!1sen!2sid!4v1768139583873!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px', borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Puskesmas Kwanyar"
                    className="w-full h-full"
                  />
                </Card>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}