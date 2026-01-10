import AppLayout from '@/layouts/app-layout';
import { Head, Link, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { 
    Plus, 
    MoreHorizontal, 
    Pencil, 
    Trash, 
    Search, 
    Image as ImageIcon 
} from 'lucide-react';

interface Informasi {
    id_informasi: number;
    judul: string;
    kategori_info: string;
    tgl_posting: string;
    gambar: string | null;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kelola Informasi', href: '/informasi' },
];

export default function Index({ informasi }: { informasi: Informasi[] }) {
    const [search, setSearch] = useState('');

    const filteredInfo = informasi.filter((item) =>
        item.judul.toLowerCase().includes(search.toLowerCase()) ||
        item.kategori_info.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id_informasi: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            router.delete(`/informasi/${id_informasi}`);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Informasi" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Daftar Informasi
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Kelola berita, pengumuman, dan artikel kesehatan puskesmas.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Cari judul..."
                                className="pl-9 bg-white dark:bg-gray-800"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        
                        <Button asChild>
                            <Link href="/informasi/create">
                                <Plus className="mr-2 h-4 w-4" /> Tambah
                            </Link>
                        </Button>
                    </div>
                </div>

                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 border-b border-gray-200 dark:border-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Gambar</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Judul</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Kategori</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Tanggal</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
                                    {filteredInfo.length > 0 ? (
                                        filteredInfo.map((item) => (
                                            <tr key={item.id_informasi} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                <td className="px-6 py-4 align-m_informasidle">
                                                    <div className="h-12 w-20 overflow-hidden rounded-md border bg-gray-100 flex items-center justify-center">
                                                        {item.gambar ? (
                                                            <img
                                                                src={`/storage/${item.gambar}`}
                                                                alt={item.judul}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        ) : (
                                                            <ImageIcon className="h-5 w-5 text-gray-400" />
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 align-middle">
                                                    {item.judul}
                                                </td>
                                                <td className="px-6 py-4 align-middle">
                                                    <Badge variant="secondary" className="capitalize">
                                                        {item.kategori_info.replace('_', ' ')}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 align-middle">
                                                    {new Date(item.tgl_posting).toLocaleDateString('id-ID', {
                                                        day: 'numeric', month: 'short', year: 'numeric'
                                                    })}
                                                </td>
                                                <td className="px-6 py-4 text-right align-middle">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">Open menu</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem asChild>
                                                                <Link href={`/informasi/${item.id_informasi}/edit`} className="cursor-pointer flex w-full items-center">
                                                                    <Pencil className="mr-2 h-4 w-4 text-yellow-600" /> Edit
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                                                                onClick={() => handleDelete(item.id_informasi)}
                                                            >
                                                                <Trash className="mr-2 h-4 w-4" /> Hapus
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <Search className="h-8 w-8 text-gray-300" />
                                                    <p className="text-lg font-medium">Data tidak ditemukan</p>
                                                    <p className="text-sm">Coba kata kunci lain atau tambahkan data baru.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}