import MinimalistHeroDemo from "@/components/ui/minimalist-hero-demo";
import { Demo as MagicTextDemo } from "@/components/ui/magic-text-demo";
import BentoGridGalleryDemo from "@/components/ui/interactive-bento-gallery-demo";
import TimelineDemo from "@/components/ui/timeline-demo";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <MinimalistHeroDemo />
      <MagicTextDemo />
      <TimelineDemo />
      <BentoGridGalleryDemo />
      <SiteFooter />
    </main>
  );
}
