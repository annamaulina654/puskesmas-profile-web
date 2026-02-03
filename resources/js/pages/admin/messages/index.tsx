import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
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
    Search, 
    MoreHorizontal, 
    Trash, 
    Mail, 
    MailOpen, 
    Eye,
    CalendarClock,
    User,
    Phone,
    CheckCircle2,
    Reply
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Message {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    is_read: boolean | number;
    is_public: boolean;
    reply?: string; 
    replied_at?: string;
    created_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Pesan Masuk', href: '/admin/messages' },
];

export default function MessageIndex({ messages }: { messages: Message[] }) {
    const [search, setSearch] = useState('');
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    const [isReplyMode, setIsReplyMode] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [deleteId, setDeleteId] = useState<number | null>(null);
    
    const filteredData = messages.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    const confirmDelete = () => {
        if (deleteId) {
            router.delete(`/admin/messages/${deleteId}`, {
                onFinish: () => {
                    setDeleteId(null);
                    if (isDialogOpen) setIsDialogOpen(false); 
                }
            });
        }
    };

    const handleViewMessage = (msg: Message) => {
        setSelectedMessage(msg);
        setReplyText(msg.reply || "");
        setIsReplyMode(false);
        setIsDialogOpen(true);

        if (!msg.is_read) {
            router.put(`/admin/messages/${msg.id}/read`, {}, {
                preserveScroll: true,
                preserveState: true,
            });
        }
    };

    const submitReply = () => {
        if (!selectedMessage) return;

        setIsSubmitting(true);
        router.put(`/admin/messages/${selectedMessage.id}`, {
            reply: replyText
        }, {
            onSuccess: () => {
                setIsReplyMode(false);
                setIsDialogOpen(false);
                setIsSubmitting(false);
            },
            onError: () => {
                setIsSubmitting(false);
            }
        });
    };

    const openWhatsApp = (phone: string | null) => {
        if (!phone) return;
        let formatted = phone.replace(/\D/g, '');
        if (formatted.startsWith('0')) formatted = '62' + formatted.slice(1);
        window.open(`https://wa.me/${formatted}`, '_blank');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pesan Masuk" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                            Kotak Masuk
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Daftar pertanyaan dan masukan dari pengunjung website.
                        </p>
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Cari pengirim atau subjek..."
                            className="pl-9 bg-white dark:bg-gray-800"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <Card className="overflow-hidden border-gray-200 dark:border-gray-800 shadow-sm">
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 border-b border-gray-200 dark:border-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider w-[50px]">Status</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Pengirim</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Subjek</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">Waktu</th>
                                        <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <tr 
                                                key={item.id} 
                                                className={`transition-colors cursor-pointer ${item.is_read ? 'hover:bg-gray-50' : 'bg-blue-50/60 hover:bg-blue-50'}`}
                                                onClick={() => handleViewMessage(item)}
                                            >
                                                <td className="px-6 py-4 align-middle">
                                                    {item.is_read ? (
                                                        <MailOpen className="w-5 h-5 text-gray-400" />
                                                    ) : (
                                                        <div className="relative">
                                                            <Mail className="w-5 h-5 text-blue-600" />
                                                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 align-middle">
                                                    <div className="flex flex-col">
                                                        <span className={`text-base ${!item.is_read ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                                                            {item.name}
                                                        </span>
                                                        <span className="text-xs text-gray-500">{item.email}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 align-middle">
                                                    <span className={`${!item.is_read ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                                                        {item.subject}
                                                    </span>
                                                    {item.reply && (
                                                        <Badge variant="outline" className="ml-2 text-[10px] text-green-600 border-green-200 bg-green-50">
                                                            <CheckCircle2 className="w-3 h-3 mr-1" /> Dibalas
                                                        </Badge>
                                                    )}
                                                    {item.is_public && (
                                                        <Badge variant="outline" className="ml-2 text-[10px] text-blue-600 border-blue-200 bg-blue-50">
                                                            Publik
                                                        </Badge>
                                                    )}
                                                    <p className="text-xs text-gray-400 truncate max-w-[250px] mt-0.5">
                                                        {item.message}
                                                    </p>
                                                </td>
                                                <td className="px-6 py-4 text-gray-500 align-middle whitespace-nowrap">
                                                    <div className="flex items-center gap-1.5 text-xs">
                                                        <CalendarClock className="w-3.5 h-3.5" />
                                                        {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                                                        })}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right align-middle" onClick={(e) => e.stopPropagation()}>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                            <DropdownMenuItem onClick={() => handleViewMessage(item)} className="cursor-pointer">
                                                                <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem
                                                                className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                                                                onClick={() => setDeleteId(item.id)}
                                                            >
                                                                <Trash className="mr-2 h-4 w-4" /> Hapus Pesan
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
                                                    <MailOpen className="h-8 w-8 text-gray-300" />
                                                    <p className="text-lg font-medium">Belum ada pesan masuk</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle>
                                {isReplyMode ? "Tindak Lanjut & Balas" : "Detail Pesan"}
                            </DialogTitle>
                            <DialogDescription>
                                {isReplyMode 
                                    ? "Catat balasan resmi untuk ditampilkan di website (jika publik)." 
                                    : "Pesan dari pengunjung website Puskesmas."}
                            </DialogDescription>
                        </DialogHeader>
                        
                        {selectedMessage && (
                            <div className="grid gap-4 py-4">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1 w-full">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-semibold text-sm">{selectedMessage.name}</h4>
                                            {selectedMessage.phone && (
                                                <Button 
                                                    size="sm" variant="outline" className="h-6 text-xs gap-1 text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
                                                    onClick={() => openWhatsApp(selectedMessage.phone)}
                                                >
                                                    <Phone className="w-3 h-3" /> Chat WA
                                                </Button>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 flex flex-col gap-0.5">
                                            <span>{selectedMessage.email}</span>
                                            <span>{selectedMessage.phone || "-"}</span>
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {new Date(selectedMessage.created_at).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="font-medium text-sm text-gray-500">Subjek:</div>
                                    <div className="font-semibold">{selectedMessage.subject}</div>
                                </div>

                                <div className="space-y-2">
                                    <div className="font-medium text-sm text-gray-500">Isi Pesan:</div>
                                    <div className="text-sm leading-relaxed p-3 bg-white border rounded-md min-h-[80px] whitespace-pre-wrap">
                                        {selectedMessage.message}
                                    </div>
                                </div>

                                {isReplyMode ? (
                                    <div className="space-y-3 pt-4 border-t mt-2 animate-in fade-in slide-in-from-bottom-2">
                                        <Label htmlFor="reply" className="text-blue-600 font-semibold">Isi Balasan (Publik)</Label>
                                        <Textarea 
                                            id="reply"
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                            placeholder="Tuliskan ringkasan jawaban/tindak lanjut..."
                                            rows={4}
                                            className="focus-visible:ring-blue-500"
                                        />
                                        <div className="flex justify-end gap-2">
                                            <Button variant="outline" onClick={() => setIsReplyMode(false)}>Batal</Button>
                                            <Button onClick={submitReply} disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                                                {isSubmitting ? "Menyimpan..." : "Simpan & Publikasikan"}
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    selectedMessage.reply && (
                                        <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                                            <div className="flex items-center gap-2 mb-2 text-green-700 font-semibold text-sm">
                                                <CheckCircle2 className="w-4 h-4" /> Telah Ditanggapi
                                            </div>
                                            <p className="text-sm text-gray-700">{selectedMessage.reply}</p>
                                            <div className="mt-2 text-right">
                                                <Button 
                                                    variant="link" 
                                                    className="text-xs text-blue-600 h-auto p-0"
                                                    onClick={() => setIsReplyMode(true)}
                                                >
                                                    Edit Balasan
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {!isReplyMode && (
                            <DialogFooter className="gap-2 sm:gap-0">
                                <Button 
                                    variant="outline" 
                                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                                    onClick={() => {
                                        if (selectedMessage) {
                                            setIsDialogOpen(false);
                                            setDeleteId(selectedMessage.id);
                                        }
                                    }}
                                >
                                    <Trash className="w-4 h-4 mr-2" /> Hapus
                                </Button>
                                
                                {!selectedMessage?.reply && (
                                    <Button onClick={() => setIsReplyMode(true)} className="bg-blue-600 hover:bg-blue-700">
                                        <Reply className="w-4 h-4 mr-2" /> Tindak Lanjut
                                    </Button>
                                )}
                                
                                <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
                                    Tutup
                                </Button>
                            </DialogFooter>
                        )}
                    </DialogContent>
                </Dialog>

                <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Pesan ini akan dihapus secara permanen dari kotak masuk Anda. Tindakan ini tidak dapat dibatalkan.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Batal</AlertDialogCancel>
                            <AlertDialogAction 
                                onClick={confirmDelete} 
                                className="bg-red-600 hover:bg-red-700 text-white"
                            >
                                Ya, Hapus Pesan
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </AppLayout>
    );
}