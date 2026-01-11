import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jalan Raya Dlemer Nomor 10 Kwanyar Kodepos 69164",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0823-3458-2474",
    },
    {
      icon: Mail,
      title: "Email",
      content: "pkm.kwanyarbangkalan@gmail.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Sabtu: 07:30 - 14:30 | UGD: 24 Jam",
    },
  ]

  return (
    <PublicLayout>
      <Head title="Hubungi Kami - UPT Puskesmas Kwanyar" />
      
      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hubungi Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Kami siap membantu dan menjawab pertanyaan Anda</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut
                  tentang layanan kesehatan kami.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-64 bg-secondary">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7416230481867!2d112.85513347403925!3d-7.1558428702030685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd81da855557c25%3A0x768483f0bbc12d14!2sPuskesmas%20Kwanyar!5e0!3m2!1sen!2sid!4v1768139583873!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Puskesmas"
                    />
                  </div>
                </Card>
              </div>

              <div>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                      Kirim Pesan
                    </h2>

                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h3>
                        <p className="text-muted-foreground">
                          Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nama Lengkap</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Masukkan nama Anda"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="email@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">No. Telepon</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="08xx-xxxx-xxxx"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subjek</Label>
                            <Input
                              id="subject"
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              placeholder="Topik pesan Anda"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Pesan</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tuliskan pesan Anda di sini..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                          <Send className="w-4 h-4 mr-2" />
                          Kirim Pesan
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}