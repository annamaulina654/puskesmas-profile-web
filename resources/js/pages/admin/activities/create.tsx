import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, UploadCloud, X } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kelola Kegiatan', href: '/admin/activities' },
    { title: 'Tambah', href: '#' },
];

export default function ActivityCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        category: 'Posyandu',
        date: '',
        location: '',
        images: [] as File[],
    });

    const [previews, setPreviews] = useState<string[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            
            setData('images', [...data.images, ...newFiles]);

            const newPreviews = newFiles.map(file => URL.createObjectURL(file));
            setPreviews([...previews, ...newPreviews]);
        }
    };

    const removeImage = (index: number) => {
        const updatedImages = data.images.filter((_, i) => i !== index);
        setData('images', updatedImages);

        const updatedPreviews = previews.filter((_, i) => i !== index);
        setPreviews(updatedPreviews);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/activities', {
            forceFormData: true, 
        }); 
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Kegiatan" />

            <div className="p-4 md:p-6 w-full">
                <Link 
                    href="/admin/activities" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card className="bg-white border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-gray-900">Tambah Dokumentasi Kegiatan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                            
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-gray-700">Nama Kegiatan</Label>
                                <Input 
                                    id="title" 
                                    value={data.title} 
                                    onChange={(e) => setData('title', e.target.value)} 
                                    placeholder="Contoh: Posyandu Melati" 
                                    required 
                                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="date" className="text-gray-700">Tanggal</Label>
                                    <Input 
                                        id="date" 
                                        type="date" 
                                        value={data.date} 
                                        onChange={(e) => setData('date', e.target.value)} 
                                        required 
                                        className="bg-white border-gray-300 text-gray-900"
                                    />
                                    {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category" className="text-gray-700">Kategori</Label>
                                    <Select 
                                        value={data.category} 
                                        onValueChange={(value) => setData('category', value)}
                                    >
                                        <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-gray-200">
                                            <SelectItem value="Posyandu">Posyandu</SelectItem>
                                            <SelectItem value="Penyuluhan">Penyuluhan</SelectItem>
                                            <SelectItem value="Vaksinasi">Vaksinasi</SelectItem>
                                            <SelectItem value="Rapat">Rapat Koordinasi</SelectItem>
                                            <SelectItem value="Lainnya">Lainnya</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location" className="text-gray-700">Lokasi</Label>
                                <Input 
                                    id="location" 
                                    value={data.location} 
                                    onChange={(e) => setData('location', e.target.value)} 
                                    required 
                                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                                />
                                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-gray-700">Deskripsi</Label>
                                <Textarea 
                                    id="description" 
                                    value={data.description} 
                                    onChange={(e) => setData('description', e.target.value)} 
                                    className="min-h-[100px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-400" 
                                    required 
                                />
                                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                            </div>

                            <div className="space-y-4">
                                <Label className="text-gray-700">Dokumentasi Foto</Label>
                                
                                {previews.length > 0 && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
                                        {previews.map((src, index) => (
                                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group bg-gray-50">
                                                <img src={src} alt="Preview" className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-90 hover:opacity-100 transition shadow-sm"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="border-2 border-dashed border-indigo-200 rounded-lg p-6 bg-indigo-50 hover:bg-indigo-100 transition text-center cursor-pointer relative">
                                    <input 
                                        type="file"
                                        multiple 
                                        accept="image/*"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                        onClick={(e) => (e.currentTarget.value = '')}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-2 text-indigo-500">
                                        <UploadCloud className="w-10 h-10" />
                                        <p className="font-medium text-sm text-indigo-700">Klik untuk tambah foto</p>
                                        <p className="text-xs text-indigo-400">Bisa upload banyak sekaligus</p>
                                    </div>
                                </div>
                                {errors.images && <p className="text-sm text-red-500">{errors.images}</p>}
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto bg-primary text-white hover:bg-primary/90">
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Simpan Kegiatan'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}