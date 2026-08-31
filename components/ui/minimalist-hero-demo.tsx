"use client";

import React from "react";
import { Camera, Globe, Mail, X } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "PRODUCT", href: "#" },
    { label: "STORE", href: "#" },
    { label: "ABOUT US", href: "#" },
  ];

  const socialLinks = [
    { icon: Globe, href: "https://www.facebook.com" },
    { icon: Camera, href: "https://www.instagram.com" },
    { icon: X, href: "https://x.com" },
    { icon: Mail, href: "https://www.linkedin.com" },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="/Hero.png"
      imageAlt="A portrait of a person in profile against a warm background."
      overlayText={{
        part1: "less is",
        part2: "more.",
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;
