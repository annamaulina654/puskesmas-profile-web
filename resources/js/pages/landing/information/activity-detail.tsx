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

      <main className="min-h-screen pb-20 pt-24 bg-green-50 relative">
        
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
            
            <Button variant="ghost" asChild className="mb-6 pl-0 hover:pl-2 transition-all text-green-700 hover:text-green-800 hover:bg-green-100/50">
                <Link href="/information/activities">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Daftar Kegiatan
                </Link>
            </Button>

            <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary hover:bg-primary/90 text-white shadow-sm">{activity.category}</Badge>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-white border border-green-200 px-3 py-1 rounded-full shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {formatDate(activity.date)}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 bg-white border border-green-200 px-3 py-1 rounded-full shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {activity.location}
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    {activity.title}
                </h1>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl shadow-green-900/10 mb-10 aspect-video bg-green-100 relative border-4 border-white">
                <img 
                    src={mainImage} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed whitespace-pre-line mb-12 bg-white p-8 rounded-2xl shadow-sm border border-green-100">
                {activity.description}
            </div>

            {otherImages.length > 0 && (
                <div className="border-t border-green-200 pt-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                        <ImageIcon className="w-6 h-6 text-primary" /> Dokumentasi Lainnya
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {otherImages.map((img, index) => (
                            <div key={index} className="rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer relative shadow-md hover:shadow-lg hover:shadow-green-900/10 transition-all border border-green-100 bg-white">
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