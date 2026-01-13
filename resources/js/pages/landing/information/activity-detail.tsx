import { Head, Link } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Calendar, MapPin, ArrowLeft, ImageIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Activity {
  id: number;
  title: string;
  date: string;
  images: string[] | null;
  category: string;
  description: string;
  location: string;
}

export default function ActivityDetail({ activity }: { activity: Activity }) {
  
  const getImageUrl = (path: string) => {
    if (!path) return "/images/placeholder.svg";
    if (path.startsWith('http') || path.startsWith('/images')) return path;
    return `/storage/${path}`;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric', weekday: 'long'
    });
  }

  const mainImage = activity.images && activity.images.length > 0 ? getImageUrl(activity.images[0]) : "/images/placeholder.svg";
  const otherImages = activity.images && activity.images.length > 1 ? activity.images.slice(1) : [];

  return (
    <PublicLayout> 
      <Head title={`${activity.title} - Kegiatan`} />

      <main className="min-h-screen pb-20 pt-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            
            <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-2 transition-all">
                <Link href="/information/activities">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Kegiatan
                </Link>
            </Button>

            <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary">{activity.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(activity.date)}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5" />
                        {activity.location}
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    {activity.title}
                </h1>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-10 aspect-video bg-gray-100 relative">
                <img 
                    src={mainImage} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line mb-12">
                {activity.description}
            </div>

            {otherImages.length > 0 && (
                <div className="border-t pt-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <ImageIcon className="w-6 h-6" /> Dokumentasi Lainnya
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {otherImages.map((img, index) => (
                            <div key={index} className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer relative shadow-sm hover:shadow-md transition-all">
                                <img 
                                    src={getImageUrl(img)} 
                                    alt={`Dokumentasi ${index + 1}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
      </main>
    </PublicLayout>
  )
}