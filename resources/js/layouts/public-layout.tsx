import { PropsWithChildren } from 'react';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer />
            
        </div>
    );
}