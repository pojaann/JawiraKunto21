"use client";

import React from "react";
import { Camera, Globe, Mail } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "JOURNEY", href: "#journey" },
    { label: "PROJECT", href: "#project" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Camera, href: "https://www.instagram.com/pojaann/" },
    { icon: Globe, href: "https://muhammad-fauzan.vercel.app/" },
    { icon: Mail, href: "https://www.linkedin.com/in/muhammad-fauzan-474207365" },
  ];

  return (
    <MinimalistHero
      logoText="jawirakunto."
      navLinks={navLinks}
      mainText="Mahasiswa Teknik Informatika. Fokus ke web, desain digital, dan membangun aplikasi yang jelas dipakai orang."
      readMoreLink="#about"
      imageSrc="/GambarHero.png"
      imageAlt="Potret Muhammad Fauzan"
      overlayText={{
        part1: "Fast is",
        part2: "more.",
      }}
      socialLinks={socialLinks}
      locationText="Muhammad Fauzan"
    />
  );
};

export default MinimalistHeroDemo;
