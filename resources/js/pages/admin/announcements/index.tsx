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
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
    Plus, 
    MoreHorizontal, 
    Pencil, 
    Trash, 
    Search,
    Megaphone
} from 'lucide-react';

interface Announcement {
    id: number;
    title: string;
    content: string;
    type: string;
    date: string;
    is_active: boolean | number;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Kelola Pengumuman', href: '/admin/announcements' },
];

export default function AnnouncementIndex({ announcements }: { announcements: Announcement[] }) {
    const [search, setSearch] = useState('');

    const [deleteId, setDeleteId] = useState<number | null>(null);

    const filteredData = announcements.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
    );

    const confirmDelete = () => {
        if (deleteId) {
            router.delete(`/admin/announcements/${deleteId}`, {
                onFinish: () => setDeleteId(null),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kelola Pengumuman" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Daftar Pengumuman
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Kelola pengumuman penting, program, dan prestasi puskesmas.
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
                            <Link href="/admin/announcements/create">
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
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Judul</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Tanggal</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Tipe</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Status</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 align-middle">
                                                    {item.title}
                                                </td>
                                                <td className="px-6 py-4 text-gray-500 dark:text-gray-400 align-middle">
                                                    {new Date(item.date).toLocaleDateString('id-ID', {
                                                        day: 'numeric', month: 'short', year: 'numeric'
                                                    })}
                                                </td>
                                                <td className="px-6 py-4 align-middle">
                                                    <Badge variant="outline" className="capitalize bg-blue-50 text-blue-700 border-blue-200">
                                                        {item.type}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4 align-middle">
                                                    <Badge className={item.is_active ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"}>
                                                        {item.is_active ? 'Aktif' : 'Nonaktif'}
                                                    </Badge>
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
                                                                <Link href={`/admin/announcements/${item.id}/edit`} className="cursor-pointer flex w-full items-center">
                                                                    <Pencil className="mr-2 h-4 w-4 text-yellow-600" /> Edit
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                                                                onClick={() => setDeleteId(item.id)}
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
                                                    <Megaphone className="h-8 w-8 text-gray-300" />
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
            <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Tindakan ini tidak dapat dibatalkan. Data pengumuman ini akan dihapus permanen dari database.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction 
                            onClick={confirmDelete} 
                            className="bg-red-600 hover:bg-red-700 text-white"
                        >
                            Ya, Hapus
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AppLayout>
    );
}