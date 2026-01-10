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
    { title: 'Edit', href: '#' },
];

interface EditProps {
    informasi: {
        id: number;
        judul: string;
        kategori_info: string;
        isi: string;
        gambar: string | null;
    };
}

export default function Edit({ informasi }: EditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        judul: informasi.judul,
        kategori_info: informasi.kategori_info,
        isi: informasi.isi,
        gambar: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/informasi/${informasi.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Informasi" />

            <div className="p-4 md:p-6 w-full">
                <Link 
                    href="/informasi" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card>
                    <CardHeader>
                        <CardTitle>Edit Informasi</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="judul">Judul Informasi</Label>
                                <Input
                                    id="judul"
                                    value={data.judul}
                                    onChange={(e) => setData('judul', e.target.value)}
                                    required
                                />
                                {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="kategori">Kategori</Label>
                                <Select 
                                    defaultValue={data.kategori_info}
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
                                    className="min-h-[150px]"
                                    required
                                />
                                {errors.isi && <p className="text-sm text-red-500">{errors.isi}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="gambar">Ganti Gambar (Opsional)</Label>
                                {informasi.gambar && (
                                    <div className="mb-2">
                                        <img src={`/storage/${informasi.gambar}`} alt="Current" className="h-20 w-auto rounded border" />
                                        <p className="text-xs text-gray-400 mt-1">Gambar saat ini</p>
                                    </div>
                                )}
                                <Input
                                    id="gambar"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('gambar', e.target.files ? e.target.files[0] : null)}
                                    className="cursor-pointer"
                                />
                                {errors.gambar && <p className="text-sm text-red-500">{errors.gambar}</p>}
                            </div>

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto">
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Perbarui Informasi'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}