import { MagicText } from "@/components/ui/magic-text";

const Demo = () => {
  return (
    <section className="relative">
      <p className="pointer-events-none absolute left-1/2 top-8 z-10 -translate-x-1/2 text-sm text-foreground/60">
        Scroll Down 👇
      </p>
      <div className="relative flex items-center justify-center pb-[30rem] pt-32">
        <MagicText
          text={
            "Hi there! I'm preet, creator of HextaUI. Thank you so much of all the support and love you've shown me. I hope you enjoy using HextaUI as much as I enjoyed creating it."
          }
        />
      </div>
    </section>
  );
};

export { Demo };
