import { useState } from "react"
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Banknote, AlertCircle } from "lucide-react"

interface RateItem {
  service: string;
  price: number;
  unit: string;
}

interface RateCategory {
  name: string;
  items: RateItem[];
}

interface RatesPageProps {
  rateCategories: RateCategory[];
}

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function RatesPage({ rateCategories }: RatesPageProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = rateCategories.map(category => {
    const filteredItems = category.items.filter(item => 
      item.service.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return { ...category, items: filteredItems }
  }).filter(category => category.items.length > 0)

  return (
    <PublicLayout>
      <Head title="Tarif Pelayanan" />

      <main className="min-h-screen bg-slate-50">
        
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
           <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none backdrop-blur-sm">
              TRANSPARANSI PUBLIK
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Tarif Retribusi Pelayanan
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Daftar biaya resmi berdasarkan Peraturan Daerah untuk pasien kategori Umum (Non-BPJS).
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4 lg:px-8">
            
            <div className="max-w-4xl mx-auto mb-10 bg-orange-50 border border-orange-200 rounded-xl p-4 flex gap-3 items-start text-orange-800">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-sm">Informasi Penting bagi Peserta BPJS Kesehatan</h4>
                    <p className="text-sm mt-1 leading-relaxed">
                        Bagi peserta <strong>BPJS Kesehatan (KIS)</strong> yang status kepesertaannya aktif dan mengikuti prosedur rujukan yang benar, <strong>seluruh biaya pelayanan diatas adalah GRATIS</strong> (ditanggung BPJS). Tarif ini hanya berlaku untuk Pasien Umum.
                    </p>
                </div>
            </div>

            <div className="max-w-xl mx-auto mb-12 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                    placeholder="Cari layanan (misal: cabut gigi, jahit luka, kolesterol)..." 
                    className="pl-10 h-12 shadow-sm border-gray-200 focus:border-primary focus:ring-primary text-base rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, idx) => (
                        <Card key={idx} className="border-0 shadow-md overflow-hidden">
                            <CardHeader className="bg-slate-100/50 border-b border-gray-100 pb-4">
                                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                                        <Banknote className="w-5 h-5" />
                                    </div>
                                    {category.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                                            <TableHead className="w-[60%] pl-6">Jenis Layanan</TableHead>
                                            <TableHead className="w-[20%]">Satuan</TableHead>
                                            <TableHead className="w-[20%] text-right pr-6">Tarif</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {category.items.map((item, itemIdx) => (
                                            <TableRow key={itemIdx} className="hover:bg-slate-50 transition-colors">
                                                <TableCell className="font-medium text-gray-700 pl-6 py-4">
                                                    {item.service}
                                                </TableCell>
                                                <TableCell className="text-gray-500 text-sm">
                                                    {item.unit}
                                                </TableCell>
                                                <TableCell className="text-right font-bold text-primary pr-6">
                                                    {formatRupiah(item.price)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-900">Layanan tidak ditemukan</h3>
                        <p className="text-gray-500">Coba cari dengan kata kunci lain.</p>
                    </div>
                )}
            </div>

        </section>

      </main>
    </PublicLayout>
  )
}