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
                src="/images/pus.jpeg" 
                alt="Puskesmas Sehat Sejahtera" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-card p-6 rounded-2xl shadow-xl max-w-xs border border-border/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">Jam Pendaftaran</div>
                  <div className="text-xs text-muted-foreground">Senin - Kamis</div>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-primary tracking-tight">
                07.15 - 12.00
              </div>
              
              <div className="my-3 h-px bg-border"></div>

              <div className="flex flex-col gap-1">
                 <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Jumat - Sabtu</span>
                    <span className="font-medium text-foreground">s/d 10.00 / 11.00</span>
                 </div>
                 <div className="mt-1 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-xs font-bold text-center border border-red-200">
                    UGD & PERSALINAN 24 JAM
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 mt-12 lg:mt-0">
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
                  <div className="text-muted-foreground">Jl. Raya Dlemer No. 10 Kwanyar Kodepos 69164</div>
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
                <Link href="/information/contact">
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
                <Link href="/information/service-hours">Lihat Jadwal Lengkap</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}