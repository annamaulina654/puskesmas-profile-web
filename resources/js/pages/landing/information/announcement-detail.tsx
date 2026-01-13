import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, ArrowLeft, Bell, AlertCircle, FileText, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: string;
}

const typeConfig: Record<string, { color: string; icon: any }> = {
    Penting: { color: "bg-red-500", icon: AlertCircle },
    Program: { color: "bg-primary", icon: Bell },
    Rekrutmen: { color: "bg-blue-500", icon: FileText },
    Prestasi: { color: "bg-amber-500", icon: Bell },
    Default: { color: "bg-slate-500", icon: Info },
}

export default function AnnouncementDetail({ announcement }: { announcement: Announcement }) {
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric', weekday: 'long'
    });
  }

  const config = typeConfig[announcement.type] || typeConfig.Default
  const Icon = config.icon

  return (
    <PublicLayout>
      <Head title={`${announcement.title} - Pengumuman`} />

      <main className="min-h-screen pb-20 pt-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            
            <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-2 transition-all">
                <Link href="/information/announcements">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Pengumuman
                </Link>
            </Button>

            <Card className="border-0 shadow-lg overflow-hidden">
                <div className={`h-2 w-full ${config.color}`} />
                
                <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center shadow-md`}>
                            <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="outline" className="text-base px-3 py-1 font-medium">
                            {announcement.type}
                        </Badge>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-snug">
                        {announcement.title}
                    </h1>

                    <div className="flex items-center gap-2 text-muted-foreground mb-8 pb-8 border-b">
                        <Calendar className="w-4 h-4" />
                        {formatDate(announcement.date)}
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap">
                        {announcement.content}
                    </div>
                </CardContent>
            </Card>

        </div>
      </main>
    </PublicLayout>
  )
}