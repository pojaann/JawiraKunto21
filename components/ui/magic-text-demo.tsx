import { MagicText } from "@/components/ui/magic-text";

const Demo = () => {
  return (
    <section id="about" className="scroll-mt-8 mx-auto w-full max-w-5xl px-6 py-20 md:px-12 md:py-28">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-foreground/50">
        About
      </p>
      <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
        Siapa saya
      </h2>
      <MagicText
        text={
          "Mahasiswa Teknik Informatika dengan latar SMK RPL. Tertarik web, desain digital, dan teknologi baru. Pernah jadi IT Support dan Data Entry di instansi pemerintah. Senang merancang situs yang rapi, mudah dipakai, dan terus berkembang."
        }
      />
    </section>
  );
};

export { Demo };
