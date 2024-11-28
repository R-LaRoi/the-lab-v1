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
    <span className="toggle-icon" style={{ position: 'relative', display: 'inline-block' }}>
      <span
        className="inner"
        style={{
          opacity: showCharacter ? 1 : 0,
          visibility: showCharacter ? 'visible' : 'hidden',
          transition: 'opacity 0.3s, visibility 0.3s',
          position: 'relative',
          display: 'inline-block'
        }}
      >
        <div className="char-1">
          {character}
        </div>
      </span>
      <span
        style={{
          opacity: showCharacter ? 0 : 1,
          visibility: showCharacter ? 'hidden' : 'visible',
          transition: 'opacity 0.3s, visibility 0.3s',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '11.5vw'
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </span>
    </span>
  );
};

export default ToggleIcon;