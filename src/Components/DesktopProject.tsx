import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../app/Stylesheets/projects.css'

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

interface DesktopProjectsProps {
  projectItems: ProjectItem[];
  cursorRef: React.RefObject<HTMLDivElement>;
  scaleAnimation: {
    initial: object;
    enter: object;
    closed: object;
  };
}


export default function DesktopProjects({ projectItems, cursorRef, scaleAnimation }: DesktopProjectsProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section className="section project-grid">
      <div className="container">
        <div className="text-sm uppercase">
          <h5>Projects</h5>
        </div>
        <div className='divider'></div>
        <ul className="project-items">
          {projectItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                className="project-item"
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link href={item.link} className="project-item-content">
                  <div className="project-item-title">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="project-item-description">
                    <p>{item.description}</p>
                  </div>
                </Link>
              </li>
              {index < projectItems.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </ul>
        <div className='divider'></div>
      </div>

      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={activeItem ? "enter" : "closed"}
        className="modal-container"
      >
        <div className="modal-slider" style={{ top: projectItems.findIndex(item => item.id === activeItem) * -100 + "%" }}>
          {projectItems.map((item, index) => (
            <div className="modal" key={`modal_${index}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursorRef}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={activeItem ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        className="cursor-label"
        variants={scaleAnimation}
        initial="initial"
        animate={activeItem ? "enter" : "closed"}
      >
        View
      </motion.div>
    </section>
  );
}