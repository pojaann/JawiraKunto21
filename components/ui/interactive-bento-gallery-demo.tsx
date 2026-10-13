import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Web App",
    desc: "Antarmuka yang jelas dan cepat",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Workspace",
    desc: "Alur kerja harian",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "UI Design",
    desc: "Tata letak yang rapi",
    url: "https://images.unsplash.com/photo-1581291518857-4d71ec7cc4d4?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Frontend",
    desc: "Komponen yang bisa dipakai ulang",
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "Prototype",
    desc: "Dari sketsa ke layar",
    url: "https://images.unsplash.com/photo-1586717791821-3f44a5631374?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Product",
    desc: "Fokus ke pengguna",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
];

export function BentoGridGalleryDemo() {
  return (
    <div id="project" className="scroll-mt-8 pb-16">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Proyek & visual"
        description="Klik kartu untuk melihat lebih dekat. Geser untuk merapikan urutan."
      />
    </div>
  );
}

export default BentoGridGalleryDemo;
