import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

class Framework {
  name: string;
  icon: string;
  constructor(_name: string, _icon: string) {
    this.name = _name;
    this.icon = _icon;
  }
}

class Project {
  title: string;
  description: string;
  icons: Framework[];
  link: string;
  constructor(
    _title: string,
    _description: string,
    _icons: Framework[],
    _link: string
  ) {
    this.title = _title;
    this.description = _description;
    this.icons = _icons;
    this.link = _link;
  }
}

const firebase = new Framework("Firebase", "/firebase.png");
const flutter = new Framework("Flutter", "/flutter.png");
const nextjs = new Framework("NextJs", "/nextjs.png");
const typescript = new Framework("Typescript", "/typescript.png");
const vercel = new Framework("Vercel", "vercel.png");
const spotifyAPI = new Framework("SpotifyAPI", "spotify.png");
const tailwindCSS = new Framework("TailwindCSS", "tailwindcss.png");
const django = new Framework("Django", "/django.png");
const postgresql = new Framework("PostgreSQL", "postgresql.png");
const heroku = new Framework("Heroku", "/heroku.png");
const python = new Framework("Python", "/python.png");
const fastapi = new Framework("FastAPI", "/fastapi.png");

const project1 = new Project(
  "Imperium",
  "A full-stack Flutter/Dart mobile application with workout tracking exercise addition, and set management features. Incorporated Firebase Firestore for real-time data handling and Firebase Authentication for secure user access control.",
  [flutter, firebase],
  "https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone"
);

const project2 = new Project(
  "Vibify",
  "A Next JS web application that uses NextAuth and the Spotify API to allow users to log in and automate the process of saving their 'Discover Weekly' playlist. Also allows users to view their Spotify Wrapped.",
  [nextjs, typescript, vercel, spotifyAPI, tailwindCSS],
  "https://music-helper-app.vercel.app/"
);

const project3 = new Project(
  "Loo's List Clone",
  "A full-stack Django web application to display real-time University of Virginia class listings, integrated with Google user accounts for secure authentication, and utilized PostgreSQL for efficient data storage and access.",
  [django, postgresql, heroku],
  ""
);

const project4 = new Project(
  "Sports Betting Helper",
  "A full-stack NextJs web app processes and aggregates odds from 5 sportsbooks using advanced data analysis to identify arbitrage opportunities and bets with positive Expected Value (EV), enhancing decision-making.",
  [nextjs, typescript, vercel, python, fastapi],
  ""
);

type Props = {};

function projects({}: Props) {
  const transitionDuration = 1.7; // seconds, increased duration
  const delayOffset = 0.4;
  return (
    <div className="bg-main min-h-screen flex flex-col p-6 overflow-auto">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <div>
        <motion.h1
          className="text-5xl font-bold text-white py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Personal Projects
        </motion.h1>
        <motion.p
          className="text-xl text-text py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          I love hacking together cool projects in my free time.{" "}
        </motion.p>
        <Separator className="pb-5" />
        <div className="grid grid-cols-2 items-center justify-center gap-8">
          {[project1, project2, project3, project4].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * delayOffset,
                duration: transitionDuration,
                ease: "easeInOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
