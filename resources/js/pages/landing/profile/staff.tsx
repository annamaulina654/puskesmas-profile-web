import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
    Stethoscope, 
    Smile, 
    HeartHandshake, 
    Baby, 
    Utensils, 
    Pill, 
    Microscope, 
    FileText, 
    Monitor, 
    ShieldCheck, 
    Ambulance, 
    Sparkles, 
    Users,
    Briefcase,
    Calculator,
    Leaf
} from "lucide-react"

interface StaffStat {
  name: string;
  count: number;
}

interface StaffPageProps {
  staffStats: StaffStat[];
  totalStaff: number;
}

const getIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('dokter gigi') || n.includes('perawat gigi')) return <Smile className="w-6 h-6" />;
    if (n.includes('dokter')) return <Stethoscope className="w-6 h-6" />;
    if (n.includes('perawat')) return <HeartHandshake className="w-6 h-6" />;
    if (n.includes('bidan')) return <Baby className="w-6 h-6" />;
    if (n.includes('gizi')) return <Utensils className="w-6 h-6" />;
    if (n.includes('apotek') || n.includes('obat')) return <Pill className="w-6 h-6" />;
    if (n.includes('laborat')) return <Microscope className="w-6 h-6" />;
    if (n.includes('it') || n.includes('sistem')) return <Monitor className="w-6 h-6" />;
    if (n.includes('keamanan') || n.includes('satpam')) return <ShieldCheck className="w-6 h-6" />;
    if (n.includes('ambulance') || n.includes('sopir')) return <Ambulance className="w-6 h-6" />;
    if (n.includes('kebersihan')) return <Sparkles className="w-6 h-6" />;
    if (n.includes('sanitarian') || n.includes('promkes') || n.includes('skm')) return <Leaf className="w-6 h-6" />;
    if (n.includes('kasir') || n.includes('akuntan')) return <Calculator className="w-6 h-6" />;
    if (n.includes('tata usaha') || n.includes('administrasi') || n.includes('pendaftaran')) return <FileText className="w-6 h-6" />;
    
    return <Briefcase className="w-6 h-6" />;
}

export default function StaffPage({ staffStats, totalStaff }: StaffPageProps) {
  return (
    <PublicLayout>
      <Head title="Data Kepegawaian" />

      <main className="min-h-screen bg-slate-50">
        
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
           <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none backdrop-blur-sm">
              SUMBER DAYA MANUSIA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Data Kepegawaian
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Kekuatan personil UPT Puskesmas Kwanyar yang siap melayani masyarakat dengan profesional dan sepenuh hati.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 lg:px-8">
            
            <div className="max-w-4xl mx-auto mb-12">
                <Card className="bg-primary text-white border-none shadow-xl overflow-hidden relative">
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 translate-x-10"></div>
                    <CardContent className="p-8 flex items-center justify-between relative z-10">
                        <div>
                            <p className="text-primary-foreground/80 font-medium mb-1">Total Keseluruhan</p>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                {totalStaff} <span className="text-2xl font-normal opacity-80">Pegawai</span>
                            </h2>
                        </div>
                        <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {staffStats.map((item, idx) => (
                    <Card key={idx} className="border-0 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                        <CardContent className="p-5 flex flex-col items-center text-center h-full justify-center">
                            
                            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mb-3 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {getIcon(item.name)}
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-1">
                                {item.count}
                            </h3>

                            <p className="text-sm font-medium text-muted-foreground leading-tight">
                                {item.name}
                            </p>

                        </CardContent>
                    </Card>
                ))}
            </div>

        </section>

      </main>
    </PublicLayout>
  )
}