/* eslint-disable @typescript-eslint/no-explicit-any */
import { Head } from "@inertiajs/react"
import PublicLayout from "@/layouts/public-layout"
import { HeroSlider } from "@/components/landing/hero-slider"
import { ServicesSection } from "@/components/landing/services-section"
import { StatsSection } from "@/components/landing/stats-section"
import { ActivitiesSection } from "@/components/landing/activities-section"
import { AnnouncementsSection } from "@/components/landing/announcements-section"
import { CTASection } from "@/components/landing/cta-section"

export default function Home({ activities, announcements }: { activities: any[], announcements: any[] }) {
  return (
    <PublicLayout>
      <Head title="Beranda - UPT Puskesmas Kwanyar" />

      <HeroSlider />
      <ServicesSection />
      <StatsSection />
      <ActivitiesSection activities={activities} />
      <AnnouncementsSection announcements={announcements} />
      <CTASection />
      
    </PublicLayout>
  )
}