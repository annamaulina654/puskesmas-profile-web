import { useState, FormEventHandler } from "react"
import { Head, useForm } from "@inertiajs/react" // Import useForm dari Inertia
import PublicLayout from "@/layouts/public-layout"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ContactProps {
    flash?: {
        success?: string;
        error?: string;
    }
}

export default function Contact({ flash }: ContactProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    
    post('/contact', {
        onSuccess: () => {
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        },
    });
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Raya Dlemer No. 10 Kwanyar Kodepos 69164",
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
      content: "Senin - Sabtu: - | UGD: 24 Jam",
    },
  ]

  return (
    <PublicLayout>
      <Head title="Hubungi Kami" />
      
      <main className="min-h-screen">
        
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hubungi Kami
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Kami siap membantu Anda</p>
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

                    {isSubmitted || flash?.success ? (
                      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h3>
                        <p className="text-muted-foreground">
                          {flash?.success || "Terima kasih telah menghubungi kami. Kami akan menerima pesan Anda."}
                        </p>
                        <Button 
                            variant="outline" 
                            className="mt-6"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Kirim Pesan Lagi
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nama Lengkap</Label>
                            <Input
                              id="name"
                              value={data.name}
                              onChange={(e) => setData('name', e.target.value)}
                              placeholder="Masukkan nama Anda"
                              required
                              className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={data.email}
                              onChange={(e) => setData('email', e.target.value)}
                              placeholder="email@example.com"
                              required
                              className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">No. Telepon</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={data.phone}
                              onChange={(e) => setData('phone', e.target.value)}
                              placeholder="08xx-xxxx-xxxx"
                              className={errors.phone ? "border-red-500" : ""}
                            />
                             {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subjek</Label>
                            <Input
                              id="subject"
                              value={data.subject}
                              onChange={(e) => setData('subject', e.target.value)}
                              placeholder="Topik pesan Anda"
                              required
                              className={errors.subject ? "border-red-500" : ""}
                            />
                            {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Pesan</Label>
                          <Textarea
                            id="message"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            placeholder="Tuliskan pesan Anda di sini..."
                            rows={5}
                            required
                            className={errors.message ? "border-red-500" : ""}
                          />
                          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                        </div>

                        <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full bg-primary hover:bg-primary/90"
                            disabled={processing}
                        >
                          {processing ? (
                             <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Mengirim...
                             </>
                          ) : (
                             <>
                                <Send className="w-4 h-4 mr-2" /> Kirim Pesan
                             </>
                          )}
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