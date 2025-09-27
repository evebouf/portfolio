import React, { useState, useEffect } from 'react';
import './Terminal.scss';

const Terminal: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);

  const sequences = [
    { text: 'SYSTEM BOOT...', delay: 800 },
    { text: 'LOADING...', delay: 600 },
    { text: 'AUTHENTICATED', delay: 400 },
    { text: 'READY', delay: 1000 }
  ];

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('eve.bouffard@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

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
        <div className="terminal-title">eve@code:~</div>
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
            <div className="main-session">
              <div className="command-line">
                <span className="prompt">eve@code:~$</span>
                <span className="command">whoami</span>
              </div>
              <div className="output">eve_bouffard</div>
              
              <div className="command-line">
                <span className="prompt">eve@code:~$</span>
                <span className="command">cat about.txt</span>
              </div>
              {/* <div className="output">Designing in code_</div> */}
              <div className="output">i design and build internal tools at <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="terminal-link"> <img src="/yc.png" alt="YC" className="yc-logo" /> Y Combinator</a></div>
              
              <div className="command-line">
                <span className="prompt">eve@code:~$</span>
                <span className="command">ls links/</span>
              </div>
              <div className="links-output">
                <a href="https://github.com/evebouf" target="_blank" rel="noopener noreferrer" className="terminal-link">github</a>
                <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin</a>
                <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="terminal-link">twitter</a>
                <button onClick={copyEmailToClipboard} className="terminal-link email-link">
                  {emailCopied ? 'copied!' : 'email'}
                </button>
              </div>
              
              <div className="command-line current">
                <span className="prompt">eve@code:~$</span>
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
