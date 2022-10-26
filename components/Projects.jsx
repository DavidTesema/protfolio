import Image from "next/image";
import Link from "next/link";
import React from "react";
import djiStore from "../public/assets/projects/DJI-STORE.jpg";
import movies from "../public/assets/projects/movies.jpg";

import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full dark:bg-gray-900 dark:text-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#a82e2e]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Dji Store"
            backgroundImg={djiStore}
            projectUrl="/dji"
            tech="React JS"
          />
          <ProjectItem
            title="movies"
            backgroundImg={movies}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={djiStore}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={djiStore}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
}
