import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Button } from "./button";

type Props = {
  work: Work;
};

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

function Workcard({ work }: Props) {
  return (
    <div className="flex flex-row text-white">
      <Card className="md:min-w-[400px]">
        <CardHeader>
          <CardTitle className={` text-white text-3xl`}>
            <Button variant="link" className="p-0">
              <a className="text-white text-xl md:text-3xl justify-start" href="/projects">
                {work.company}
              </a>
            </Button>
          </CardTitle>
          <CardDescription className="text-text text-lg md:text-2xl">
            {work.title}
          </CardDescription>
          <CardDescription className="text-text text-md md:text-lg">
            {work.duration}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-xs md:text-sm font-medium text-white space-y-4 md:space-y-6">
            {work.bullets.map((bulletPoint) => (
              <li key={bulletPoint}>{bulletPoint}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default Workcard;
