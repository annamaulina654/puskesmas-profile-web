import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Plus, Pencil, Trash, ImageIcon } from 'lucide-react';

interface ProfilData {
    id_profil: number;
    judul: string;
    kategori_profil: string;
    isi_konten: string;
    gambar: string | null;
    updated_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Profil Puskesmas', href: '/profil' },
];

export default function Index({ profil }: { profil: ProfilData[] }) {
    
    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            router.delete(`/profil/${id}`);
        }
    };

    const getBadgeVariant = (kategori: string): "default" | "secondary" | "outline" | "destructive" => {
        if (!kategori) return 'secondary';

        const k = kategori.toLowerCase();

        if (k.includes('visi_misi')) return 'default';
        if (k.includes('struktur_organisasi')) return 'outline';
        if (k.includes('inovasi')) return 'secondary';
        if (k.includes('tentang')) return 'secondary';
        
        return 'outline';
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profil Puskesmas" />

            <div className="flex flex-col gap-6 p-4 md:p-6 w-full">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Profil Puskesmas</h1>
                        <p className="text-muted-foreground text-sm">
                            Kelola Visi Misi, Struktur Organisasi, Sejarah, dan informasi instansi lainnya.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/profil/create">
                            <Plus className="mr-2 h-4 w-4" /> Tambah Data
                        </Link>
                    </Button>
                </div>

                <Card className="w-full overflow-hidden">
                    <CardHeader className="bg-muted/40 py-4">
                         <CardTitle className="text-base">Daftar Data Profil</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px] text-center">No</TableHead>
                                    <TableHead>Kategori</TableHead>
                                    <TableHead>Judul</TableHead>
                                    <TableHead>Gambar</TableHead>
                                    <TableHead>Terakhir Update</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {profil.length > 0 ? (
                                profil.map((item, index) => (
                                    <TableRow key={item.id_profil}>
                                        <TableCell className="text-center font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <Badge variant={getBadgeVariant(item.kategori_profil)}>
                                                {/* Opsional: Rapikan tulisan (misal: visi_misi jadi VISI MISI) */}
                                                {item.kategori_profil.replace(/_/g, ' ').toUpperCase()}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {item.judul}
                                            <div className="text-xs text-muted-foreground mt-1 truncate max-w-[200px]">
                                                {item.isi_konten.substring(0, 50)}...
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="h-12 w-16 overflow-hidden rounded-md border bg-gray-50 flex items-center justify-center">
                                                {item.gambar ? (
                                                    <img src={`/storage/${item.gambar}`} alt="img" className="h-full w-full object-cover" />
                                                ) : (
                                                    <ImageIcon className="h-5 w-5 text-gray-300" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-muted-foreground text-sm">
                                            {new Date(item.updated_at).toLocaleDateString('id-ID', {
                                                day: 'numeric', month: 'short', year: 'numeric'
                                            })}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button asChild variant="outline" size="sm" className="h-8">
                                                    <Link href={`/profil/${item.id_profil}/edit`}>
                                                        <Pencil className="h-3.5 w-3.5 mr-1 text-orange-600" /> Edit
                                                    </Link>
                                                </Button>
                                                <Button 
                                                    variant="ghost" 
                                                    size="sm" 
                                                    className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleDelete(item.id_profil)}
                                                >
                                                    <Trash className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                        Belum ada data profil. Silakan tambah data baru.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}