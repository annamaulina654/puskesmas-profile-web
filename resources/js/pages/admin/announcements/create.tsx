import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kelola Pengumuman', href: '/admin/announcements' },
    { title: 'Tambah', href: '#' },
];

export default function AnnouncementCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        date: '',
        type: 'Penting',
        is_active: true
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/announcements'); 
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Pengumuman" />

            <div className="p-4 md:p-6 w-full">
                <Link 
                    href="/admin/announcements" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card className="bg-white border-gray-200 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-gray-900">Tambah Pengumuman Baru</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-gray-700">Judul Pengumuman</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Contoh: Jadwal Posyandu Lansia"
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
                                    <Label htmlFor="type" className="text-gray-700">Kategori</Label>
                                    <Select 
                                        value={data.type}
                                        onValueChange={(value) => setData('type', value)}
                                    >
                                        <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-gray-200">
                                            <SelectItem value="Penting">Penting</SelectItem>
                                            <SelectItem value="Program">Program</SelectItem>
                                            <SelectItem value="Prestasi">Prestasi</SelectItem>
                                            <SelectItem value="Rekrutmen">Rekrutmen</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content" className="text-gray-700">Isi Pengumuman</Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Tuliskan detail pengumuman di sini..."
                                    className="min-h-[150px] bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                                    required
                                />
                                {errors.content && <p className="text-sm text-red-500">{errors.content}</p>}
                            </div>

                            <div className="flex items-center space-x-2 border border-gray-200 p-4 rounded-md bg-gray-50">
                                <input
                                    type="checkbox"
                                    id="is_active"
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-white"
                                    checked={data.is_active}
                                    onChange={(e) => setData('is_active', e.target.checked)}
                                />
                                <Label htmlFor="is_active" className="cursor-pointer text-gray-700">
                                    Tampilkan Pengumuman (Status Aktif)
                                </Label>
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto bg-primary text-white hover:bg-primary/90">
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Simpan Pengumuman'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}