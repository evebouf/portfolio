import React, { useState, useEffect } from 'react';
import './Terminal.scss';

const Terminal: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const sequences = [
    { text: 'SYSTEM BOOT...', delay: 800 },
    { text: 'LOADING USER...', delay: 600 },
    { text: 'AUTHENTICATED', delay: 400 },
    { text: '> EVE', delay: 0 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase < sequences.length) {
        const currentSequence = sequences[phase];
        
        // Typewriter effect
        let currentText = '';
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
          if (charIndex < currentSequence.text.length) {
            currentText += currentSequence.text[charIndex];
            setDisplayText(currentText);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            
            // Move to next phase after delay
            setTimeout(() => {
              if (phase < sequences.length - 1) {
                setPhase(phase + 1);
              }
            }, currentSequence.delay);
          }
        }, 80);
        
        return () => clearInterval(typeInterval);
      }
    }, phase === 0 ? 500 : 200);

    return () => clearTimeout(timer);
  }, [phase]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`terminal ${phase >= 3 ? 'terminal--ready' : 'terminal--booting'}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-button--close"></span>
          <span className="terminal-button terminal-button--minimize"></span>
          <span className="terminal-button terminal-button--maximize"></span>
        </div>
        <div className="terminal-title">eve@corner:~</div>
      </div>
      
      <div className="terminal-body">
        <div className="terminal-content">
          {phase < 3 && (
            <div className="boot-sequence">
              <div className="boot-line">
                <span className="boot-text">{displayText}</span>
                {showCursor && <span className="terminal-cursor">█</span>}
              </div>
              {phase >= 1 && <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>}
            </div>
          )}
          
          {phase >= 3 && (
            <div className="main-prompt">
              <div className="prompt-line">
                <span className="terminal-prompt">eve@corner:~$</span>
                <span className="terminal-command">whoami</span>
              </div>
              <div className="output-line">
                <span className="terminal-output">EVE BOUFFARD</span>
              </div>
              <div className="prompt-line current">
                <span className="terminal-prompt">eve@corner:~$</span>
                <span className="terminal-command">cat skills.txt</span>
                {showCursor && <span className="terminal-cursor">█</span>}
              </div>
            </div>
          )}
        </div>
        
        <div className="terminal-scanlines"></div>
        <div className="terminal-glow"></div>
      </div>
    </div>
  );
};

export default Terminal;
