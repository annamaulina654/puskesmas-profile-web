import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

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
      
      <main className="min-h-screen bg-background">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hubungi Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Temukan informasi lokasi dan kontak Puskesmas Kwanyar di bawah ini.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Kami siap melayani Anda. Silakan kunjungi lokasi kami atau hubungi nomor yang tertera sesuai kebutuhan Anda (Umum atau Pengaduan).
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-5 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300">
                      <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ${info.color ? "bg-green-100" : ""}`}>
                        {/* Jika ada warna khusus (pengaduan), pakai warna itu. Jika tidak, pakai primary */}
                        <info.icon className={`w-7 h-7 ${info.color ? info.color : "text-primary"}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground font-medium">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-full min-h-[600px] w-full sticky top-24">
                <Card className="overflow-hidden border-0 shadow-xl h-full rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7416230481867!2d112.85513347403925!3d-7.1558428702030685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd81da855557c25%3A0x768483f0bbc12d14!2sPuskesmas%20Kwanyar!5e0!3m2!1sen!2sid!4v1768139583873!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '600px' }}
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