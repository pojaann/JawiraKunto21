import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const shot =
  "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function TimelineDemo() {
  const data = [
    {
      title: "2024 — sekarang",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Kuliah Teknik Informatika. Mengerjakan proyek web, desain, dan
            eksperimen teknologi — termasuk situs ini.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Laptop dengan kode di layar"
              width={500}
              height={500}
              className={shot}
            />
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Tampilan editor kode"
              width={500}
              height={500}
              className={shot}
            />
          </div>
        </div>
      ),
    },
    {
      title: "IT Support",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
            Bekerja sebagai IT Support dan Data Entry di instansi pemerintah:
            bantuan teknis, pengelolaan data, dan tugas administrasi harian.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
              alt="Tim bekerja di meja"
              width={500}
              height={500}
              className={shot}
            />
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Sesi kerja dan diskusi"
              width={500}
              height={500}
              className={shot}
            />
          </div>
        </div>
      ),
    },
    {
      title: "SMK RPL",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Lulus dari jurusan Rekayasa Perangkat Lunak. Dasar yang saya bawa
            sampai sekarang:
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              Dasar pemrograman dan web
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              Desain antarmuka yang rapi
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm">
              Kerja tim dan dokumentasi
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
              alt="Laptop di meja belajar"
              width={500}
              height={500}
              className={shot}
            />
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              alt="Bekerja di laptop"
              width={500}
              height={500}
              className={shot}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="journey" className="scroll-mt-8 w-full">
      <Timeline
        title="Perjalanan"
        description="Dari SMK RPL, kerja IT Support, sampai sekarang kuliah Informatika dan membangun proyek."
        data={data}
      />
    </div>
  );
}

export default TimelineDemo;
