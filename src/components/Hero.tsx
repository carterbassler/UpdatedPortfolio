import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { Suspense, useState } from "react";
import { Button } from "./ui/button";
import { FaFile, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Github,
  Linkedin,
  File,
  Briefcase,
  AppWindow,
  Mail,
  ArrowRightIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Boxes } from "./ui/background-boxes";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

type Props = {};

export const Highlight = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link : string;
}) => {
  return (
    <a target="_blank" href={link}>
      <span
        className={cn(
          "font-bold  bg-blue-700/[0.2] text-blue-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    </a>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Carter Bassler",
    designation: "Tech Guy",
    content: (
      <p>
        I am a fourth-year Computer Science student at the{" "}
        <Highlight link={'https://www.cavalierdaily.com/'}>University of Virginia</Highlight>. I love creating and
        developing things that I am passionate about like my workout tracker 
        app <Highlight link={'https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone'}>Imperium</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Carter Bassler",
    designation: "Pickleball Savant",
    content: (
      <p>
        I've always been a lover of racket sports but have been getting really
        into <Highlight link={'https://www.theonion.com/things-to-never-say-to-someone-who-loves-pickleball-1850540860'}>Pickleball</Highlight> and Squash recently
      </p>
    ),
  },
  {
    id: 2,
    name: "Carter Bassler",
    designation: "Music Enthusiast",
    content: (
      <p>
        I'm really passionate about music and listen to almost everything there
        is. Check out my <Highlight link={'https://open.spotify.com/user/bassler.spotify?si=bf92c113ca744a9a'}>Spotify Profile</Highlight> for some of my
        favorite playlists!
      </p>
    ),
  },
];

function Hero({}: Props) {
  return (
    <div className="bg-main min-h-screen flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <Avatar className="flex h-20 w-16 md:h-24 md:w-20">
          <AvatarImage src="/memoji.png" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Carter Bassler
        </h1>
        <p className="text-center text-md md:text-lg text-text p-2">
          Software Developer. CS Student. All Around Great Guy
        </p>
        <div className="flex flex-row items-center">
          <a href="https://github.com/carterbassler">
            <Button variant="ghost" className="">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/carter-bassler-856a581a1/">
            <Button variant="ghost">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
          <a href="/BasslerResume.pdf">
            <Button variant="ghost">
              <File className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 p-10 items-center justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <Card className="custom-border-transition hover:border-white">
          <CardHeader>
            <CardTitle className="flex flex-row items-center text-lg md:text-3xl">
              <Briefcase className="mr-2 h-4 w-4 md:h-8 md:w-8" />
              Professional Experience
            </CardTitle>
            <CardDescription className="text-sm md:text-md">
              Check out some of my cool work experiences I've had.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-sm md:text-base text-white">Currently:</p>
              <p className="text-sm md:text-base text-white font-semibold">
                Looking for New Grad Ops 👋
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0">
              <a className="text-sm md:text-base text-white" href="/work">
                Deep Dive
              </a>
            </Button>
          </CardFooter>
        </Card>
        <div className="hidden md:flex justify-center items-center">
          <CardStack items={CARDS} />
        </div>
        <Card className="custom-border-transition hover:border-white">
          <CardHeader>
            <CardTitle className="flex flex-row items-center text-lg md:text-3xl">
              <AppWindow className="mr-2 h-4 w-4 md:h-8 md:w-8" />
              Personal Projects
            </CardTitle>
            <CardDescription className="text-sm md:text-md">
              Check out some of my cool work experiences I've had.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-sm md:text-base text-white">Currently:</p>
              <p className="text-sm md:text-base text-white font-semibold">
                Working on EdgeVantage 🏈
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0">
              <a className="text-sm md:text-base text-white" href="/projects">
                Drop In
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default Hero;
