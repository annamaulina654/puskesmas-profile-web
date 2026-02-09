import { useState, FormEventHandler } from "react"
import { Head, useForm } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { Send, CheckCircle, Loader2, MessageSquare, User, ShieldCheck, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

interface PublicComplaint {
  id: number;
  name: string;
  date: string;
  category: string;
  message: string;
  reply?: string;
  reply_date?: string;
  admin_name?: string;
}

interface ComplaintsPageProps {
  flash?: {
    success?: string;
    error?: string;
  };
  publishedComplaints?: PublicComplaint[]; 
}

export default function ComplaintsPage({ flash, publishedComplaints = [] }: ComplaintsPageProps) {
  const complaintList = publishedComplaints;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    is_public: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/complaints', {
        onSuccess: () => {
            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        },
    });
  }

  return (
    <PublicLayout>
      <Head title="Layanan Pengaduan" />
      
      <main className="min-h-screen bg-green-50">
        
        <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <Badge variant="outline" className="mb-4 text-white border-white/30 px-4 py-1 text-sm bg-white/10 backdrop-blur-sm">
                Layanan Masyarakat
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Pengaduan & Aspirasi
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto font-light">
              Suara Anda sangat berharga bagi kami. Sampaikan kritik, saran, atau keluhan untuk peningkatan pelayanan Puskesmas Kwanyar.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              
              <div className="relative">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full -z-10"></div>
                 
                 <Card className="border border-green-100 shadow-xl shadow-green-900/10 overflow-hidden bg-white">
                    <div className="h-2 bg-gradient-to-r from-primary to-green-400"></div>
                    <CardHeader className="text-center pt-8 pb-2">
                        <CardTitle className="text-2xl font-bold text-gray-800">Formulir Pengaduan</CardTitle>
                        <CardDescription>Identitas Anda aman bersama kami.</CardDescription>
                    </CardHeader>

                    <CardContent className="p-8">
                      {isSubmitted || flash?.success ? (
                        <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                          <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 ring-8 ring-green-50 border border-green-200">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Pengaduan Diterima!</h3>
                          <p className="text-muted-foreground max-w-md mx-auto mb-8">
                            {flash?.success || "Terima kasih atas masukan Anda. Pengaduan akan segera kami tindak lanjuti."}
                          </p>
                          <Button 
                              size="lg"
                              variant="outline" 
                              onClick={() => setIsSubmitted(false)}
                              className="rounded-full px-8 border-green-200 text-primary hover:bg-green-50"
                          >
                              Buat Pengaduan Baru
                          </Button>
                        </div>

                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          
                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="font-medium text-gray-700">Nama Lengkap</Label>
                              <Input
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Nama sesuai KTP (Boleh nama samaran)"
                                required
                                className={`h-11 bg-white border-green-200 focus-visible:ring-primary ${errors.name ? "border-red-500" : ""}`}
                              />
                              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="font-medium text-gray-700">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="nama@email.com"
                                required
                                className={`h-11 bg-white border-green-200 focus-visible:ring-primary ${errors.email ? "border-red-500" : ""}`}
                              />
                              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="font-medium text-gray-700">No. WhatsApp / HP</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                placeholder="08xx-xxxx-xxxx"
                                className={`h-11 bg-white border-green-200 focus-visible:ring-primary ${errors.phone ? "border-red-500" : ""}`}
                              />
                              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="subject" className="font-medium text-gray-700">Judul / Kategori</Label>
                              <Input
                                id="subject"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                placeholder="Contoh: Pelayanan Poli Umum"
                                required
                                className={`h-11 bg-white border-green-200 focus-visible:ring-primary ${errors.subject ? "border-red-500" : ""}`}
                              />
                              {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="font-medium text-gray-700">Isi Pengaduan / Aspirasi</Label>
                            <Textarea
                              id="message"
                              value={data.message}
                              onChange={(e) => setData('message', e.target.value)}
                              placeholder="Ceritakan detail keluhan atau saran Anda..."
                              rows={6}
                              required
                              className={`resize-none bg-white border-green-200 focus-visible:ring-primary ${errors.message ? "border-red-500" : ""}`}
                            />
                            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                          </div>

                          <div className="flex items-center gap-2 pb-2">
                             <input 
                                type="checkbox" 
                                id="is_public" 
                                checked={data.is_public}
                                onChange={(e) => setData('is_public', e.target.checked)}
                                className="rounded border-green-300 text-primary focus:ring-primary h-4 w-4"
                             />
                             <Label htmlFor="is_public" className="text-sm text-muted-foreground font-normal cursor-pointer select-none">
                                Izinkan pengaduan dan balasan ditampilkan secara publik (Nama bisa disamarkan).
                             </Label>
                          </div>

                          <Button 
                              type="submit" 
                              size="lg" 
                              className="w-full bg-primary hover:bg-primary/90 h-12 text-base rounded-lg shadow-lg shadow-green-900/20 transition-all hover:-translate-y-0.5"
                              disabled={processing}
                          >
                            {processing ? (
                               <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Mengirim...</>
                            ) : (
                               <><Send className="w-5 h-5 mr-2" /> Kirim</>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                 </Card>
              </div>

              <div id="public-complaints">
                  <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 bg-white shadow-sm rounded-lg text-primary border border-green-100">
                         <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                         <h2 className="text-2xl font-bold text-gray-800">Aspirasi Terpublikasi</h2>
                         <p className="text-muted-foreground">Daftar pertanyaan dan pengaduan yang telah ditanggapi.</p>
                      </div>
                  </div>

                  <div className="space-y-6">
                    {complaintList.map((complaint) => (
                        <Card key={complaint.id} className="border border-green-100 shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
                          <CardContent className="p-0">
                             
                             <div className="p-6">
                                <div className="flex items-start gap-4">
                                   <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-primary border border-green-100">
                                      <User className="w-5 h-5" />
                                   </div>
                                   <div className="flex-1">
                                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                         <div>
                                            <span className="font-bold text-gray-900 mr-2">{complaint.name}</span>
                                            <Badge variant="secondary" className="text-xs font-normal border-green-200 bg-green-50 text-green-800">{complaint.category}</Badge>
                                         </div>
                                         <div className="flex items-center text-xs text-muted-foreground">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {complaint.date}
                                         </div>
                                      </div>
                                      <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-r-xl rounded-bl-xl border border-gray-100">
                                         "{complaint.message}"
                                      </p>
                                   </div>
                                </div>
                             </div>

                             {complaint.reply && (
                                <div className="bg-green-50/50 p-6 border-t border-green-100">
                                   <div className="flex items-start gap-4">
                                      <div className="flex-1 text-right">
                                         <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-2 mb-2">
                                            <div className="flex items-center justify-end gap-2">
                                                <span className="font-bold text-primary">{complaint.admin_name || "Admin Puskesmas"}</span>
                                                <ShieldCheck className="w-4 h-4 text-primary" />
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                               Dijawab: {complaint.reply_date}
                                            </div>
                                         </div>
                                         <p className="text-gray-700 leading-relaxed bg-white p-4 rounded-l-xl rounded-br-xl shadow-sm border border-green-100 text-left">
                                            {complaint.reply}
                                         </p>
                                      </div>
                                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-green-900/20 border border-green-600">
                                         <img src="/images/images/image.png" alt="Admin" className="w-6 h-6 object-contain brightness-0 invert" />
                                      </div>
                                   </div>
                                </div>
                             )}

                          </CardContent>
                        </Card>
                    ))}

                    {complaintList.length === 0 && (
                        <div className="text-center py-10 bg-white rounded-xl border border-dashed border-green-200 shadow-sm">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <MessageSquare className="w-6 h-6 text-green-300" />
                            </div>
                            <p className="text-muted-foreground font-medium">Belum ada aspirasi yang dipublikasikan.</p>
                        </div>
                    )}
                  </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PublicLayout>
  )
}