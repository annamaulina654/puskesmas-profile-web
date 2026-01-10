import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { 
    BookOpen, 
    Folder, 
    LayoutGrid, 
    Newspaper, 
    Building2, 
    Stethoscope, 
    MessageSquare 
} from 'lucide-react';
import AppLogo from './app-logo';

const navMain: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const navMaster: NavItem[] = [
    {
        title: 'Profil Puskesmas',
        href: '/profil',
        icon: Building2,
    },
    {
        title: 'Data Layanan',
        href: '/layanan',
        icon: Stethoscope,
    },
];

const navKonten: NavItem[] = [
    {
        title: 'Informasi / Berita',
        href: '/informasi',
        icon: Newspaper,
    },
    {
        title: 'Pesan Masuk',
        href: '/pesan',
        icon: MessageSquare,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

function MenuList({ items }: { items: NavItem[] }) {
    const { url } = usePage();
    
    return (
        <SidebarMenu>
            {items.map((item) => {
                const href = item.href as string; 
                
                const isActive = href ? url.startsWith(href) : false;
                
                return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                            <Link href={href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                );
            })}
        </SidebarMenu>
    );
}

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                
                <SidebarGroup>
                    <SidebarGroupContent>
                        <MenuList items={navMain} />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Master Data</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <MenuList items={navMaster} />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Publikasi & Interaksi</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <MenuList items={navKonten} />
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}