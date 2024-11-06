import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';



interface projectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const projectItems: projectItem[] = [
  {
    id: 'one',
    title: 'Guardians',
    description: 'one',
    link: '/one',
    image: 'https://github.com/user-attachments/assets/c75cdbf7-d9bb-40d8-96a8-33ba16ca66e6',
  },
  {
    id: 'two',
    title: 'DefPresse',
    description: 'two',
    link: '/two',
    image: 'https://github.com/user-attachments/assets/98835a41-5002-4c9a-b2ca-22851a58bda8',
  },
  {
    id: 'three',
    title: 'AHAUS',
    description: 'three',
    link: '/three',
    image: 'https://github.com/user-attachments/assets/1bc03e21-f581-4cfe-95a6-5241d5a223ef',
  },
  {
    id: 'four',
    title: 'Portfolio',
    description: 'four',
    link: '/four',
    image: 'https://github.com/user-attachments/assets/4dff6759-0d49-48e1-8d87-37bbf4b82e91',
  },
  {
    id: 'five',
    title: 'TSC',
    description: 'five',
    link: 'five',
    image: 'https://github.com/user-attachments/assets/1340b6ae-2266-4072-a90c-71bdfcce732c',
  }
];



const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }

}


export default function MainProjects() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <section className="section project-grid large-project-grid">
      <div className="container">
        <div className="grid-sub-title">
          <h5>Recent project</h5>
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
};


;

