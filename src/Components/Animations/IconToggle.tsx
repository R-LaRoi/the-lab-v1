import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ToggleProps {
  character: string;

  icon: IconProp;
}

const ToggleIcon = ({ character, icon }: ToggleProps) => {
  const [showCharacter, setShowCharacter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCharacter(prev => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="toggle-icon">
      <span
        className="inner"
        style={{
          opacity: showCharacter ? 1 : 0,
          visibility: showCharacter ? 'inherit' : 'hidden',
          transition: 'opacity 0.3s, visibility 0.3s'
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            transform: 'translate(0px, 0%)'
          }}
          className="char-1"
        >
          {character}
        </div>
      </span>
      <span
        style={{
          opacity: showCharacter ? 0 : 1,
          visibility: showCharacter ? 'hidden' : 'visible',
          transition: 'opacity 0.3s, visibility 0.3s',
          justifyContent: 'flex-start'
        }}
      >
        <FontAwesomeIcon icon={icon} style={{
          position: 'relative', fontSize: '11.5vw',
          bottom: '20px', right: '160px'
        }} />

      </span>
    </span>
  );
};

export default ToggleIcon;