import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { Button } from "./ui/button";
import { FaFile, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Github, Linkedin, File } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-main h-screen flex flex-col items-center justify-center">
      <Avatar className="h-20 w-20">
        <AvatarImage src="/emo.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-5xl font-bold text-white">Carter Bassler</h1>
      <p className="text-lg text-text p-2">
        Software Developer. Pickleball Savant. All Around Great Guy
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
      <div className="flex flex-row space-x-10 p-10 items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Professional Experience</CardTitle>
            <CardDescription>
              Check out some of my cool work experiences I've had.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-white">Current Work:</p>
              <p className="text-white font-semibold">Senior CS Student</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0">
              <a className="text-white" href="/work">
                Deep Dive
              </a>
            </Button>
          </CardFooter>
        </Card>
        <iframe
          src="https://open.spotify.com/embed/playlist/3vYRlhFbkQaJzsV4kXBFV0?utm_source=generator"
          width="40%"
          height="400"
          allow="autoplay; clipboard-write;"
        />
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Personal Projects</CardTitle>
            <CardDescription>
              Check out some of my cool work experiences I've had.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-white">Current Project:</p>
              <p className="text-white font-semibold">Imperium</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0">
              <a className="text-white" href="/projects">
                Drop In
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Hero;
