import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, UploadCloud } from 'lucide-react';
import { FormEventHandler } from 'react';

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

                <Card>
                    <CardHeader>
                        <CardTitle>Tambah Dokumentasi Kegiatan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                            
                            <div className="space-y-2">
                                <Label htmlFor="title">Nama Kegiatan</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Contoh: Posyandu Melati Desa Kwanyar"
                                    required
                                />
                                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Tanggal Pelaksanaan</Label>
                                    <Input
                                        id="date"
                                        type="date"
                                        value={data.date}
                                        onChange={(e) => setData('date', e.target.value)}
                                        required
                                    />
                                    {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="category">Kategori</Label>
                                    <Select 
                                        value={data.category}
                                        onValueChange={(value) => setData('category', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
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
                                <Label htmlFor="location">Lokasi Kegiatan</Label>
                                <Input
                                    id="location"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    placeholder="Contoh: Balai Desa Kwanyar"
                                    required
                                />
                                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Deskripsi Kegiatan</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Jelaskan detail kegiatan..."
                                    className="min-h-[120px]"
                                    required
                                />
                                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label>Dokumentasi Foto</Label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:bg-gray-100 transition text-center cursor-pointer relative">
                                    <input 
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={(e) => setData('images', Array.from(e.target.files || []))}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-2 text-gray-500">
                                        <UploadCloud className="w-10 h-10 text-gray-400" />
                                        <p className="font-medium text-sm">Klik untuk upload atau drag & drop</p>
                                        <p className="text-xs">Bisa pilih banyak foto sekaligus (Maks. 2MB/foto)</p>
                                    </div>
                                </div>
                                {data.images.length > 0 && (
                                    <div className="text-sm text-green-600 mt-2">
                                        {data.images.length} file dipilih.
                                    </div>
                                )}
                                {errors.images && <p className="text-sm text-red-500">{errors.images}</p>}
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto">
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