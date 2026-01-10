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
    { title: 'Profil Puskesmas', href: '/profil' },
    { title: 'Edit', href: '#' },
];

interface ProfilProps {
    profil: {
        id: number;
        judul: string;
        kategori: string;
        isi_konten: string;
        gambar: string | null;
    };
}

export default function Edit({ profil }: ProfilProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        judul: profil.judul,
        kategori: profil.kategori,
        isi_konten: profil.isi_konten,
        gambar: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(`/profil/${profil.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Profil" />

            <div className="flex flex-col gap-6 p-4 md:p-6 w-full">
                <Link 
                    href="/profil" 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Kembali
                </Link>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Edit Data Profil</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="kategori">Kategori Profil</Label>
                                    <Select 
                                        defaultValue={data.kategori}
                                        onValueChange={(value) => setData('kategori', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Visi & Misi">Visi & Misi</SelectItem>
                                            <SelectItem value="Struktur Organisasi">Struktur Organisasi</SelectItem>
                                            <SelectItem value="Sejarah">Sejarah</SelectItem>
                                            <SelectItem value="Kata Sambutan">Kata Sambutan</SelectItem>
                                            <SelectItem value="Maklumat Pelayanan">Maklumat Pelayanan</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.kategori && <p className="text-sm text-red-500">{errors.kategori}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="judul">Judul</Label>
                                    <Input
                                        id="judul"
                                        value={data.judul}
                                        onChange={(e) => setData('judul', e.target.value)}
                                    />
                                    {errors.judul && <p className="text-sm text-red-500">{errors.judul}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="isi_konten">Isi Konten</Label>
                                <Textarea
                                    id="isi_konten"
                                    className="min-h-[200px]"
                                    value={data.isi_konten}
                                    onChange={(e) => setData('isi_konten', e.target.value)}
                                />
                                {errors.isi_konten && <p className="text-sm text-red-500">{errors.isi_konten}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="gambar">Ganti Gambar (Opsional)</Label>
                                {profil.gambar && (
                                    <div className="mb-2">
                                        <img src={`/storage/${profil.gambar}`} alt="Current" className="h-24 w-auto rounded border shadow-sm" />
                                        <p className="text-xs text-muted-foreground mt-1">Gambar saat ini</p>
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

                            <div className="flex justify-end pt-4 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="w-4 h-4 mr-2" />
                                    {processing ? 'Menyimpan...' : 'Perbarui Data'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}