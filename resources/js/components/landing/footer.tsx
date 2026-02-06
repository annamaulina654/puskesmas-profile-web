import { Link } from "@inertiajs/react"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { TiktokIcon } from "@/components/tiktok-icon"

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/profile/about" },
  { label: "Layanan", href: "/services" },
  { label: "Pengumuman", href: "/information/announcements" },
  { label: "Kegiatan", href: "/information/activities" },
  { label: "Pengaduan", href: "/complaints" },
]

const services = [
  "UGD 24 Jam",
  "Persalinan 24 Jam",
  "Poli Umum (Dewasa & Lansia)",
  "Kesehatan Ibu & Anak (KIA)",
  "Poli Gigi",
  "Laboratorium & Farmasi",
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/images/image.png"
                alt="Logo Puskesmas"
                width="50"
                height="50"
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-lg">UPT</h3>
                <p className="text-white/70 text-sm">Puskesmas Kwanyar</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Melayani kesehatan masyarakat dengan sepenuh hati. Memberikan pelayanan kesehatan berkualitas dan
              terjangkau untuk semua lapisan masyarakat.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100089389995864&ref=_ig_profile_ac"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/puskesmas.kwanyar_real/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@puskesmaskwanyar?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <TiktokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Jl. Raya Dlemer No. 10 Kwanyar, Bangkalan, Jawa Timur 69164
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm">0823-3458-2474</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
                <span className="text-white/80 text-sm break-all">pkm.kwanyarbangkalan@gmail.com</span>
              </li>
              
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                <Clock className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm space-y-1">
                  <div className="font-medium text-white">Jam Pendaftaran:</div>
                  <div className="flex justify-between gap-4">
                    <span>Senin - Kamis</span>
                    <span>07.15 - 12.00</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Jumat</span>
                    <span>07.15 - 10.00</span>
                  </div>
                   <div className="flex justify-between gap-4">
                    <span>Sabtu</span>
                    <span>07.15 - 11.00</span>
                  </div>
                  <div className="mt-2 pt-2 font-bold text-yellow-300 border-t border-white/10">
                    UGD & Persalinan: 24 Jam
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 UPT Puskesmas Kwanyar. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}