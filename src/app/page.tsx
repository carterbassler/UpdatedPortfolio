'use client'
import HomePage from "@/components/HomePage";
import Hero from "../components/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFile, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-main">
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
}
