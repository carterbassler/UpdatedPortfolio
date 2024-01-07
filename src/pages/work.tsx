import { Boxes } from "@/components/ui/background-boxes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardStack } from "@/components/ui/card-stack";
import { LampContainer } from "@/components/ui/lamp";
import { Separator } from "@/components/ui/separator";
import Workcard from "@/components/ui/workcard";
import { cn } from "@/lib/utils";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import "tailwindcss/tailwind.css";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

type Props = {};

class Work {
  company: string;
  title: string;
  duration: string;
  bullets: string[];
  icon: string;
  constructor(
    _company: string,
    _title: string,
    _duration: string,
    _bullets: string[],
    _icon: string
  ) {
    this.company = _company;
    this.title = _title;
    this.duration = _duration;
    this.bullets = _bullets;
    this.icon = _icon;
  }
}
const work1 = new Work(
  "Bank of New York Mellon",
  "Software Engineer Intern",
  "June 2023 - August 2023",
  [
    "- Developed a Microfrontend for the Wealth Desktop Platform using Angular, streamlining internal processes and improving application performance 60% by optimizing data access",
    "- Assisted in the development of REST APIs with Spring Framework, integrating them with the frontend for seamless data transfer and optimized operations",
    "- Designed and implemented error handling mechanisms for key applications, leading to a 70% reduction in pipelining errors and enhancing system reliability for 300+ users",
  ],
  "/emo.png"
);
const work2 = new Work(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "June 2022 - August 2022",
  [
    "- Produced .NET Core app to automate Catastrophe (CAT) bond data filtration, reducing manual processing time by 5 hours per week, significantly enhancing workflow efficiency and productivity",
    "- Built an ML model with a 92% accuracy rate and implemented a system to detect and report erroneous predictions",
    "- Optimized string manipulation operations by leveraging LINQ and REGEX, resulting in enhanced data processing speeds and system responsiveness",
  ],
  "/"
);
const work3 = new Work(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "June 2021 - August 2021",
  [
    "- Developed a Angular web app that has been used to visualize over 40,000 data points of insurance loss",
    "- Enhanced data visualization by integrating the Google Maps API, facilitating clearer dataset comprehension and expediting decision-making processes",
    "- Improved application performance and ensured seamless user experience by optimizing asynchronous call handling with Threading and Promises, leading to faster data retrieval and processing",
  ],
  "/"
);
const work4 = new Work(
  "Top Hat Tutors",
  "STEM Tutor",
  "Fall 2019 - July 2020",
  [
    "- Tutored middle school to high school students one-on-one and group sessions",
    "- Subjects include: Calculus, Computer Science, Economics, etc",
  ],
  "/"
);

function work({}: Props) {
  const transitionDuration = 1.7; // seconds, increased duration
  const delayOffset = 0.4;
  return (
    <div className="bg-main min-h-screen flex flex-col p-6 w-full smooth-scroll scroll-snap-type scroll-snap-align pb-5">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <div>
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          Professional Experience
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-text py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          I've had the opportunity to gain experience with some cool places
          dealing with a ton of different technologies
        </motion.p>
        <Separator className="pb-5" />
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900 w-full smooth-scroll scroll-snap-type scroll-snap-align pb-10">
          {[work1, work2, work3, work4].map((work, index) => (
            <motion.div
              key={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * delayOffset,
                duration: transitionDuration,
                ease: "easeInOut",
              }}
            >
              <Workcard work={work} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default work;
