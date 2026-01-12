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
    LayoutGrid, 
    Megaphone, 
    CalendarDays, 
    Mail 
} from 'lucide-react';
import AppLogo from './app-logo';

const navMain: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const navAdmin: NavItem[] = [
    {
        title: 'Pengumuman',
        href: '/admin/announcements',
        icon: Megaphone,
    },
    {
        title: 'Kegiatan',
        href: '/admin/activities',
        icon: CalendarDays,
    },
    {
        title: 'Pesan Masuk',
        href: '/admin/messages',
        icon: Mail,
    },
];

function MenuList({ items }: { items: NavItem[] }) {
    const { url } = usePage();
    
    return (
        <SidebarMenu>
            {items.map((item) => {
                const href = item.href as string; 
                
                const isActive = href === '/dashboard' 
                    ? url === '/dashboard' 
                    : url.startsWith(href);
                
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
                    <SidebarGroupLabel>Kelola Website</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <MenuList items={navAdmin} />
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}