import { Link } from "@inertiajs/react" 
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/modern-health-clinic-reception-area-with-friendly-.jpg" 
                alt="Puskesmas Sehat Sejahtera" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-card p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Jam Operasional</div>
                  <div className="text-sm text-muted-foreground">Senin - Sabtu</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">07:30 - 14:30</div>
              <div className="text-sm text-muted-foreground mt-1">UGD 24 Jam</div>
            </div>
          </div>

          <div className="lg:pl-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Hubungi Kami
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Butuh Bantuan Kesehatan?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tim medis profesional kami siap membantu Anda. Kunjungi Puskesmas kami atau hubungi hotline untuk
              konsultasi dan informasi layanan kesehatan.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Alamat</div>
                  <div className="text-muted-foreground">Jalan Raya Dlemer Nomor 10 Kwanyar Kodepos 69164</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Telepon</div>
                  <div className="text-muted-foreground">0823-3458-2474</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                <Link href="/contact">
                  Hubungi Sekarang
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/information/helpdesk">Pusat Bantuan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}