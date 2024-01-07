import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";
import { ArrowRightIcon, ChevronRightIcon, Github, Link } from "lucide-react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
  gitLink: string;
  constructor(
    _title: string,
    _description: string,
    _icons: Framework[],
    _link: string,
    _gitLink: string
  ) {
    this.title = _title;
    this.description = _description;
    this.icons = _icons;
    this.link = _link;
    this.gitLink = _gitLink;
  }
}

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const [text, count] = useTypewriter({
    words: ["UVA Student", "Music Enthusiast", "Avid Aston Villa Fan"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-3xl text-white">
            {project.title}
          </CardTitle>
          {/* <img
              src="/imperiumProj.png"
              className="md:w-98 md:h-64 rounded-lg object-center"
            /> */}
          <CardDescription className="text-xs md:text-sm text-text font-semibold">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row space-x-4">
            {project.icons.map((icon) => (
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <img
                        src={icon.icon}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full md:rounded-full object-contain object-center"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="flex items-center">
                      <p className="text-white justify-center items-center">
                        {icon.name}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center">
              {project.link || project.gitLink ? (
                <div className="flex flex-row items-center">
                  <a className="text-white">Check it out</a>
                  <ArrowRightIcon className="h-4 text-white"></ArrowRightIcon>
                </div>
              ) : (
                <div className="flex flex-row items-center">
                  <Cursor cursorColor="rgb(59 130 246)" />
                  <a className="text-white">
                    
                  </a>
                </div>
              )}
            </div>
            <div>
              {project.link && (
                <a href={project.link}>
                  <Button variant="ghost" size="icon" className="">
                    <Link className="h-4 w-4 text-white" />
                  </Button>
                </a>
              )}

              <a href={project.gitLink || "#"}>
                <Button
                  variant="ghost"
                  size="icon"
                  style={{ visibility: project.gitLink ? "visible" : "hidden" }}
                >
                  <Github className="h-4 w-4 text-white" />
                </Button>
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProjectCard;
