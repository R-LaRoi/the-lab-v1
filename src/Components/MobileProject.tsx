import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

interface MobileProjectsProps {
  projectItems: ProjectItem[];
}

export default function MobileProjects({ projectItems }: MobileProjectsProps) {
  return (
    <div className="container-mobile ">
      <ul className="space-y-2">
        {projectItems.slice(-3).map((project, index) => (
          <li key={index} className="visible">
            <Link href={project.link} className="block hover:opacity-80 transition-opacity">
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-12 sm:col-span-3">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-sm"
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <div className="h-px bg-gray-300 w-12 my-2"></div>
                </div>
                <div className="col-span-6 sm:col-span-3 text-sm">
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}