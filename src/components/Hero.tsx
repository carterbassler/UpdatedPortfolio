import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { Suspense, useState } from "react";
import { Button } from "./ui/button";
import {
  Github,
  Linkedin,
  File,
  Briefcase,
  AppWindow,
  Mail,
  MapPin,
  Droplet,
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
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {};

export const Highlight = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
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
        <Highlight link={"https://www.cavalierdaily.com/"}>
          University of Virginia
        </Highlight>
        . I love creating and developing things that I am passionate about like
        my workout tracker app{" "}
        <Highlight
          link={
            "https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone"
          }
        >
          Imperium
        </Highlight>
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
        into{" "}
        <Highlight
          link={
            "https://www.theonion.com/things-to-never-say-to-someone-who-loves-pickleball-1850540860"
          }
        >
          Pickleball
        </Highlight>{" "}
        and Squash recently
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
        is. Check out my{" "}
        <Highlight
          link={
            "https://open.spotify.com/user/bassler.spotify?si=bf92c113ca744a9a"
          }
        >
          Spotify Profile
        </Highlight>{" "}
        for some of my favorite playlists!
      </p>
    ),
  },
  //   {
  //     id: 1,
  //     name: "Carter Bassler",
  //     designation: "Ice Coast Skier",
  //     content: (
  //       <p>
  //         I'm an avid skier who's been skiing the{" "}
  //         <Highlight link={"https://www.instagram.com/skitheeast/?hl=en"}>
  //           East Coast
  //         </Highlight>{" "}
  //         (Best Coast) almost all my life. Sugarbush in Waitsfield's gotta be the
  //         top mountain and{" "}
  //         <Highlight
  //           link={"https://americanflatbread.com/locations/waitsfield-vt/"}
  //         >
  //           American Flatbread
  //         </Highlight>{" "}
  //         is the best thing I've ever tasted
  //       </p>
  //     ),
  //   },
];

function Hero({}: Props) {
  const transitionDuration = 1.7;
  return (
    <div className="bg-main min-h-screen flex flex-col items-center justify-center">
      <motion.div className="flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
        >
          {/* <Avatar className="flex h-20 w-16 md:h-24 md:w-20">
            <AvatarImage src="/memoji.png" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar> */}
          <div className="relative h-32 w-32 mx-auto">
            <Image
              className="object-contain rounded-full overflow-hidden"
              layout="fill"
              objectFit="contain"
              src="/headshot-modified.png"
              alt={""}
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Carter Bassler
          </h1>
          <p className="text-center text-md md:text-lg text-text p-2">
            Software Developer. CS Student. All Around Great Guy
          </p>
        </motion.div>

        <motion.div
          className="flex flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
        >
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
        </motion.div>
      </motion.div>
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 p-10 items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
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
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm md:text-base text-white">Currently:</p>
                  <p className="text-sm md:text-base text-white font-semibold">
                    Looking for New Grad Ops 👋
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p className="text-sm md:text-base text-white">Prev:</p>
                  <p className="text-sm md:text-base text-white font-semibold">
                    SWE Intern @ BNY Mellon
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col">
                <Button variant="link" className="p-0">
                  <a className="text-sm md:text-base text-white" href="/work">
                    Deep Dive
                  </a>
                  <Droplet className="h-4 text-white" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
        >
          <CardStack items={CARDS} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: transitionDuration,
            ease: "easeInOut",
          }}
        >
          <Card className="custom-border-transition hover:border-white">
            <CardHeader>
              <CardTitle className="flex flex-row items-center text-lg md:text-3xl">
                <AppWindow className="mr-2 h-4 w-4 md:h-8 md:w-8" />
                Personal Projects
              </CardTitle>
              <CardDescription className="text-sm md:text-md">
                Check out some of my passion projects I've worked on.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm md:text-base text-white">Currently:</p>
                  <p className="text-sm md:text-base text-white font-semibold">
                    Working on EdgeVantage 🏈
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p className="text-sm md:text-base text-white">Prev:</p>
                  <p className="text-sm md:text-base text-white font-semibold">
                    Released Imperium
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col">
                <Button variant="link" className="p-0">
                  <a
                    className="text-sm md:text-base text-white"
                    href="/projects"
                  >
                    Drop In
                  </a>
                  <MapPin className="h-4 text-white" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
