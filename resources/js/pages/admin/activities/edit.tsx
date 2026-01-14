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
    { title: 'Edit', href: '#' },
];

interface ActivityProps {
    activity: {
        id: number;
        title: string;
        description: string;
        category: string;
        date: string;
        location: string;
        images: string[];
    };
}

export default function ActivityEdit({ activity }: ActivityProps) {
    
    const { data, setData, post, processing } = useForm({
        _method: 'PUT',
        title: activity.title,
        description: activity.description,
        category: activity.category,
        date: activity.date.split('T')[0],
        location: activity.location,
        new_images: [] as File[],
        deleted_images: [] as string[], 
    });

    const [existingImages, setExistingImages] = useState<string[]>(activity.images || []);
    
    const [newPreviews, setNewPreviews] = useState<string[]>([]);

    const removeExistingImage = (imagePath: string) => {
        setData('deleted_images', [...data.deleted_images, imagePath]);
        
        setExistingImages(existingImages.filter(img => img !== imagePath));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            
            setData('new_images', [...data.new_images, ...filesArray]);

            const previews = filesArray.map(file => URL.createObjectURL(file));
            setNewPreviews([...newPreviews, ...previews]);
        }
    };

    const removeNewImage = (index: number) => {
        const updatedFiles = data.new_images.filter((_, i) => i !== index);
        setData('new_images', updatedFiles);

        const updatedPreviews = newPreviews.filter((_, i) => i !== index);
        setNewPreviews(updatedPreviews);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/admin/activities/${activity.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Kegiatan" />

            <div className="p-4 md:p-6 w-full">
                <Link 
                    href="/admin/activities" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle>Edit Kegiatan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                            
                            <div className="space-y-2">
                                <Label htmlFor="title">Nama Kegiatan</Label>
                                <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Tanggal</Label>
                                    <Input id="date" type="date" value={data.date} onChange={(e) => setData('date', e.target.value)} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Kategori</Label>
                                    <Select value={data.category} onValueChange={(value) => setData('category', value)}>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Posyandu">Posyandu</SelectItem>
                                            <SelectItem value="Penyuluhan">Penyuluhan</SelectItem>
                                            <SelectItem value="Vaksinasi">Vaksinasi</SelectItem>
                                            <SelectItem value="Rapat">Rapat Koordinasi</SelectItem>
                                            <SelectItem value="Lainnya">Lainnya</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">Lokasi</Label>
                                <Input id="location" value={data.location} onChange={(e) => setData('location', e.target.value)} required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi</Label>
                                <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} className="min-h-[120px]" required />
                            </div>

                            <div className="space-y-4">
                                <Label>Kelola Foto</Label>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    
                                    {existingImages.map((img, index) => (
                                        <div key={`old-${index}`} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
                                            <img src={`/storage/${img}`} alt="Foto Lama" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] text-center py-1">
                                                Tersimpan
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeExistingImage(img)}
                                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-sm"
                                                title="Hapus foto ini"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}

                                    {newPreviews.map((src, index) => (
                                        <div key={`new-${index}`} className="relative aspect-square rounded-lg overflow-hidden border border-indigo-400 border-dashed group bg-indigo-50">
                                            <img src={src} alt="Foto Baru" className="w-full h-full object-cover opacity-80" />
                                            <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/80 text-white text-[10px] text-center py-1">
                                                Baru
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeNewImage(index)}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-sm"
                                                title="Batal upload"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}

                                    <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition flex flex-col items-center justify-center cursor-pointer relative aspect-square">
                                        <input 
                                            type="file"
                                            multiple 
                                            accept="image/*"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleFileChange}
                                            onClick={(e) => (e.currentTarget.value = '')}
                                        />
                                        <UploadCloud className="w-8 h-8 text-gray-400 mb-1" />
                                        <span className="text-xs text-gray-500 font-medium">Tambah Foto</span>
                                    </div>
                                </div>
                                
                                <p className="text-xs text-gray-500">
                                    * Klik ikon tempat sampah / silang pada gambar untuk menghapus.
                                </p>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto">
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}