import React, { useState, useRef, useEffect } from 'react';
import DesktopProjects from '../Components/DesktopProject';
import MobileProjects from '../Components/MobileProject';


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

export default function MainProjects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [isMobile]);

  return (
    <>
      {isMobile ? (
        <MobileProjects projectItems={projectItems} />
      ) : (
        <DesktopProjects projectItems={projectItems} cursorRef={cursorRef} />
      )}
    </>
  );
}
