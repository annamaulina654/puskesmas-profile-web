import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCircle2 } from "lucide-react"

interface StaffMember {
  name: string;
  nip: string;
  position: string;
  image: string;
}

interface StaffPageProps {
  staffGroups: Record<string, StaffMember[]>;
}

export default function StaffPage({ staffGroups }: StaffPageProps) {
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
              Mengenal lebih dekat tenaga kesehatan dan staf profesional yang siap melayani Anda sepenuh hati.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4 lg:px-8 space-y-16">
            
            {Object.entries(staffGroups).map(([category, members], index) => (
                <div key={index}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Users className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {members.map((staff, idx) => (
                            <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                                <CardContent className="p-6 text-center flex flex-col items-center">
                                    
                                    <div className="w-24 h-24 rounded-full bg-slate-100 mb-4 overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                                        {staff.image && staff.image !== '/images/placeholder.svg' ? (
                                            <img 
                                                src={staff.image} 
                                                alt={staff.name} 
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + staff.name + "&background=random";
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                                                <UserCircle2 className="w-12 h-12" />
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-1 leading-snug">
                                        {staff.name}
                                    </h3>
                                    <p className="text-primary font-medium text-sm mb-3">
                                        {staff.position}
                                    </p>
                                    
                                    <div className="w-full pt-3 border-t border-gray-100">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">NIP</p>
                                        <p className="text-sm text-gray-600">{staff.nip}</p>
                                    </div>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}

        </section>

      </main>
    </PublicLayout>
  )
}