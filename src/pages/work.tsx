import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";

type Props = {};

function work({}: Props) {
  return (
    <div className="bg-main min-h-screen flex flex-col p-6">
      <Link
        href="/"
        className="text-lg text-text hover:text-white transition ease-in-out"
      >
        &larr; Go Back
      </Link>
      <div>
        <h1 className="text-5xl font-bold text-white py-2">
          Professional Experience
        </h1>
        <p className="text-xl text-text py-2">
          I've had the opportunity to gain experience with some cool places dealing with a ton of different technologies
        </p>
        <Separator className="pb-5" />
        <div className="flex flex-row items-center justify-center space-x-5">
        </div>
      </div>
    </div>
  );
}

export default work;
