import { useState } from "react"
import { Link } from "@inertiajs/react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const profileSubmenus = [
  { title: "Visi & Misi", href: "/profile/vision-mission", description: "Visi dan misi kami dalam melayani masyarakat" },
  { title: "Struktur Organisasi", href: "/profile/organization", description: "Tim profesional yang siap melayani Anda" },
  { title: "Kepegawaian", href: "/profile/staff", description: "Jumlah data dokter, perawat, dan staf puskesmas" },
  { title: "Inovasi", href: "/profile/innovations", description: "Program inovatif untuk kesehatan masyarakat" },
  { title: "Tentang Kami", href: "/profile/about", description: "Sejarah dan profil Puskesmas" },
]

const informationSubmenus = [
  { title: "Pengumuman", href: "/information/announcements", description: "Informasi terkini dan pengumuman resmi" },
  { title: "Kegiatan", href: "/information/activities", description: "Dokumentasi kegiatan dan program kami" },
  { title: "Helpdesk", href: "/information/helpdesk", description: "Pusat bantuan dan FAQ" },
  { title: "Tarif Pelayanan", href: "/information/rates", description: "Daftar biaya retribusi pelayanan kesehatan" },
  { title: "Kontak", href: "/information/contact", description: "Hubungi kami untuk pertanyaan lanjut" },
  { title: "Jam Pelayanan", href: "/information/service-hours", description: "Jam pelayanan Puskesmas Kwanyar" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-50/90 backdrop-blur-md border-b border-green-200 shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/images/image.png" 
              alt="Logo Puskesmas" 
              className="h-12 w-auto object-contain drop-shadow-sm" 
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-primary text-lg leading-tight">UPT</h1>
              <p className="text-xs text-muted-foreground font-medium">Puskesmas Kwanyar</p>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-200/50 hover:text-primary focus:bg-green-200/50 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-200/50 data-[state=open]:bg-green-200/50"
                    >
                      Beranda
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-green-200/50 hover:text-primary data-[state=open]:bg-green-200/50 text-sm font-medium">Profil</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-white border border-green-100 rounded-md shadow-lg">
                      {profileSubmenus.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-primary"
                            >
                              <div className="text-sm font-medium text-foreground">{item.title}</div>
                              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/services" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-200/50 hover:text-primary focus:bg-green-200/50 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-200/50 data-[state=open]:bg-green-200/50"
                    >
                      Layanan
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-green-200/50 hover:text-primary data-[state=open]:bg-green-200/50 text-sm font-medium">Informasi</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 bg-white border border-green-100 rounded-md shadow-lg">
                      {informationSubmenus.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-primary"
                            >
                              <div className="text-sm font-medium text-foreground">{item.title}</div>
                              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/complaints" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-green-200/50 hover:text-primary focus:bg-green-200/50 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-green-200/50 data-[state=open]:bg-green-200/50"
                    >
                      Pengaduan
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                <Link href="/complaints">Pengaduan Online</Link>
                </Button>
            </div>

            <button
                className="lg:hidden p-2 rounded-md hover:bg-green-200/50 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-green-200 bg-green-50 shadow-inner">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium hover:bg-green-100 hover:text-primary rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beranda
              </Link>

              <div>
                <button
                  className="w-full px-4 py-3 text-sm font-medium hover:bg-green-100 hover:text-primary rounded-md flex items-center justify-between transition-colors"
                  onClick={() => setOpenSubmenu(openSubmenu === "profile" ? null : "profile")}
                >
                  Profil
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openSubmenu === "profile" ? "rotate-180" : ""}`}
                  />
                </button>
                {openSubmenu === "profile" && (
                  <div className="pl-4 py-2 space-y-1">
                    {profileSubmenus.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-100/50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className="px-4 py-3 text-sm font-medium hover:bg-green-100 hover:text-primary rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Layanan
              </Link>

              <div>
                <button
                  className="w-full px-4 py-3 text-sm font-medium hover:bg-green-100 hover:text-primary rounded-md flex items-center justify-between transition-colors"
                  onClick={() => setOpenSubmenu(openSubmenu === "info" ? null : "info")}
                >
                  Informasi
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openSubmenu === "info" ? "rotate-180" : ""}`}
                  />
                </button>
                {openSubmenu === "info" && (
                  <div className="pl-4 py-2 space-y-1">
                    {informationSubmenus.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-100/50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/complaints"
                className="px-4 py-3 text-sm font-medium hover:bg-green-100 hover:text-primary rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pengaduan
              </Link>

              <div className="px-4 pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm">
                  <Link href="/complaints">Buat Pengaduan</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}