import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Mail, 
    CalendarDays, 
    Megaphone, 
    Activity as ActivityIcon, 
    ArrowRight, 
    User,
    PlusCircle,
    Clock
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface DashboardProps {
    stats: {
        total_messages: number;
        unread_messages: number;
        total_activities: number;
        total_announcements: number;
    };
    recent_messages: Array<{
        id: number;
        name: string;
        subject: string;
        created_at: string;
        is_read: boolean;
    }>;
    recent_activities: Array<{
        id: number;
        title: string;
        date: string;
        category: string;
    }>;
}

export default function Dashboard({ stats, recent_messages, recent_activities }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Admin" />

            <div className="flex flex-col gap-6 p-4 md:p-6">
                
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            Selamat Datang, Admin!
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Berikut adalah ringkasan aktivitas Puskesmas hari ini.
                        </p>
                    </div>
                    <div className="hidden md:block text-right text-sm text-muted-foreground">
                        {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    
                    <Card className="border-l-4 border-l-blue-500 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pesan Masuk</CardTitle>
                            <Mail className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_messages}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {stats.unread_messages > 0 ? (
                                    <span className="text-red-600 font-semibold">{stats.unread_messages} belum dibaca</span>
                                ) : (
                                    "Semua pesan telah dibaca"
                                )}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Kegiatan</CardTitle>
                            <CalendarDays className="h-4 w-4 text-orange-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_activities}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Agenda tersimpan
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pengumuman</CardTitle>
                            <Megaphone className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_announcements}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Informasi publik aktif
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm bg-green-50/50 border-green-100">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-green-700">Status Website</CardTitle>
                            <ActivityIcon className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-700">Online</div>
                            <p className="text-xs text-green-600/80 mt-1">
                                Sistem berjalan normal
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-7">
                    
                    <Card className="md:col-span-4 shadow-sm border-gray-200">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Pesan Terbaru</CardTitle>
                                    <CardDescription>Masukan dan pertanyaan dari masyarakat.</CardDescription>
                                </div>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href="/admin/messages">Lihat Semua <ArrowRight className="ml-2 h-3 w-3" /></Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recent_messages.length > 0 ? (
                                    recent_messages.map((msg) => (
                                        <div key={msg.id} className="flex items-start gap-4 p-3 rounded-lg border bg-white hover:bg-gray-50 transition-colors">
                                            <div className={`mt-1 p-2 rounded-full ${msg.is_read ? 'bg-gray-100' : 'bg-blue-100'}`}>
                                                <User className={`h-4 w-4 ${msg.is_read ? 'text-gray-500' : 'text-blue-600'}`} />
                                            </div>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium leading-none">{msg.name}</p>
                                                    <span className="text-xs text-muted-foreground">
                                                        {new Date(msg.created_at).toLocaleDateString('id-ID')}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 font-medium line-clamp-1">
                                                    {msg.subject}
                                                </p>
                                                {!msg.is_read && (
                                                    <Badge variant="secondary" className="text-[10px] px-1.5 h-5 bg-blue-100 text-blue-700">
                                                        Baru
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-muted-foreground text-sm">
                                            Belum ada pesan masuk.
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="md:col-span-3 flex flex-col gap-6">
                        
                        <Card className="shadow-sm border-indigo-100 bg-indigo-50/30">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">Aksi Cepat</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-3">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <Link href="/admin/announcements/create">
                                        <Megaphone className="mr-2 h-4 w-4" /> Info Baru
                                    </Link>
                                </Button>
                                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                                    <Link href="/admin/activities/create">
                                        <PlusCircle className="mr-2 h-4 w-4" /> Kegiatan
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="flex-1 shadow-sm">
                            <CardHeader>
                                <CardTitle>Kegiatan Baru</CardTitle>
                                <CardDescription>Update agenda terakhir.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recent_activities.map((act) => (
                                        <div key={act.id} className="flex items-center border-b last:border-0 pb-3 last:pb-0">
                                            <div className="bg-orange-100 p-2 rounded-md mr-3 text-orange-600">
                                                <CalendarDays className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900">{act.title}</p>
                                                <div className="flex items-center text-xs text-muted-foreground mt-0.5">
                                                    <Clock className="mr-1 h-3 w-3" />
                                                    {new Date(act.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                                                    <span className="mx-1">•</span>
                                                    {act.category}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant="ghost" className="w-full text-xs" asChild>
                                        <Link href="/admin/activities">Lihat Semua Kegiatan</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}