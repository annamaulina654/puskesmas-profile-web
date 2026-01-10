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
    { title: 'Kelola Informasi', href: '/informasi' },
    { title: 'Tambah', href: '/informasi/create' },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        judul: '',
        kategori_info: '',
        isi: '',
        gambar: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/informasi'); 
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Informasi" />

            <div className="p-4 md:p-6 w-full">
                <Link 
                    href="/informasi" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle>Tambah Informasi Baru</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="judul">Judul Informasi</Label>
                                <Input
                                    id="judul"
                                    value={data.judul}
                                    onChange={(e) => setData('judul', e.target.value)}
                                    placeholder="Masukkan judul berita..."
                                    required
                                />
                                {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="kategori">Kategori</Label>
                                <Select 
                                    onValueChange={(value) => setData('kategori_info', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Kategori" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Berita">Berita</SelectItem>
                                        <SelectItem value="Pengumuman">Pengumuman</SelectItem>
                                        <SelectItem value="Artikel Kesehatan">Artikel Kesehatan</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.kategori_info && <p className="text-sm text-red-500">{errors.kategori_info}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="isi">Isi Konten</Label>
                                <Textarea
                                    id="isi"
                                    value={data.isi}
                                    onChange={(e) => setData('isi', e.target.value)}
                                    placeholder="Tuliskan isi informasi di sini..."
                                    className="min-h-[150px]"
                                    required
                                />
                                {errors.isi && <p className="text-sm text-red-500">{errors.isi}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="gambar">Gambar (Opsional)</Label>
                                <Input
                                    id="gambar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('gambar', e.target.files ? e.target.files[0] : null)}
                                    className="cursor-pointer"
                                />
                                <p className="text-xs text-gray-500">Format: JPG, PNG. Maks: 2MB.</p>
                                {errors.gambar && <p className="text-sm text-red-500">{errors.gambar}</p>}
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto">
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Simpan Informasi'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}