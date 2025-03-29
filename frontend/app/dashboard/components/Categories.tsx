import Image from "next/image";
import Link from "next/link";
import React from "react";
import RepairTool from "../../../images/gifs/repair-tools.gif";
import Hammer from "../../../images/gifs/hammer.gif";
import Plumber from "../../../images/gifs/plumbing.gif";
import Makeup from "../../../images/gifs/woman.gif";
import Jeweler from "../../../images/gifs/ring.gif";
import Cleaning from "../../../images/gifs/cleaning-tools.gif";
import GymInstructor from "../../../images/gifs/deadlift.gif";
import Laborers from "../../../images/gifs/laborers.gif";
import { ChevronRight } from "lucide-react";
const Categories = () => {
  const categories = [
    {
      id: 0,
      category: "Carpenter",
      icon: Hammer,
      catLink: "#",
    },
    {
      id: 1,
      category: "Repairer",
      icon: RepairTool,
      catLink: "#",
    },
    {
      id: 2,
      category: "Plumber",
      icon: Plumber,
      catLink: "#",
    },

    {
      id: 3,
      category: "MakeUp",
      icon: Makeup,
      catLink: "#",
    },
    {
      id: 4,
      category: "Jeweler",
      icon: Jeweler,
      catLink: "#",
    },

    {
      id: 5,
      category: "Cleaning",
      icon: Cleaning,
      catLink: "#",
    },

    {
      id: 6,
      category: "Gym",
      icon: GymInstructor,
      catLink: "#",
    },
    {
      id: 7,
      category: "Laborers",
      icon: Laborers,
      catLink: "#",
    },
  ];
  return (
    <main>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-base font-medium text-foreground">Categories</h1>
        <Link
          href="#"
          className="text-xs text-muted-foreground flex items-center"
        >
          See more
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {categories.map((cat) => (
          <Link
            href={cat.catLink}
            key={cat.id}
            className="flex flex-col items-center cursor-pointer"
          >
            <Image
              src={cat.icon}
              alt={cat.category}
              priority
              width={60}
              height={60}
              className="p-2 flex items-center w-12 h-12 justify-center bg-background rounded-full "
            />

            <span className="text-xs my-1 text-foreground ">
              {cat.category}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Categories;
