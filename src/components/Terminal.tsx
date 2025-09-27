import React, { useState, useEffect } from 'react';
import './Terminal.scss';

const Terminal: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [currentCommand, setCurrentCommand] = useState('');

  const bootSequences = [
    { text: 'Hi...', delay: 600 },
    { text: 'Beep boop boop...', delay: 400 },
    { text: ' [ Verified ]', delay: 400 },
    { text: 'Ready. Set. Go.', delay: 1000 }
  ];

  const terminalCommands = [
    { type: 'login', text: 'Last login: 09.26.25 on console', delay: 100 },
    { type: 'command', text: 'whoami', delay: 800 },
    { type: 'output', text: 'eve_bouffard', delay: 200 },
    { type: 'command', text: 'cat about.txt', delay: 1000 },
    { type: 'output', text: 'i design and write software at YC', delay: 200 },
    { type: 'command', text: 'ls links/', delay: 800 },
    { type: 'links', text: '', delay: 200 },
    { type: 'prompt', text: 'eve@code:~$', delay: 300 }
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

  // Boot sequence effect
  useEffect(() => {
    if (phase < 3) {
      const timer = setTimeout(() => {
        if (phase < bootSequences.length) {
          const currentSequence = bootSequences[phase];
          
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
                if (phase < bootSequences.length - 1) {
                  setPhase(phase + 1);
                } else {
                  setPhase(3); // Move to terminal phase
                }
              }, currentSequence.delay);
            }
          }, 80);
          
          return () => clearInterval(typeInterval);
        }
      }, phase === 0 ? 1000 : 1000);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Terminal sequence effect
  useEffect(() => {
    if (phase >= 3 && terminalStep < terminalCommands.length) {
      const currentCmd = terminalCommands[terminalStep];
      
      const timer = setTimeout(() => {
        if (currentCmd.type === 'command' || currentCmd.type === 'prompt') {
          // Typewriter effect for commands and prompts
          let currentText = '';
          let charIndex = 0;
          
          const typeInterval = setInterval(() => {
            if (charIndex < currentCmd.text.length) {
              currentText += currentCmd.text[charIndex];
              setCurrentCommand(currentText);
              charIndex++;
            } else {
              clearInterval(typeInterval);
              setTimeout(() => {
                setTerminalStep(terminalStep + 1);
                setCurrentCommand('');
              }, currentCmd.delay);
            }
          }, 50);
          
          return () => clearInterval(typeInterval);
        } else {
          // Instant display for outputs
          setTimeout(() => {
            setTerminalStep(terminalStep + 1);
          }, currentCmd.delay);
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [phase, terminalStep]);

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
        <div className="terminal-title">_zsh</div>
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
              {terminalCommands.slice(0, terminalStep).map((cmd, index) => (
                <div key={index}>
                  {cmd.type === 'login' && (
                    <div className="login-line">
                      <span className="prompt">{cmd.text}</span>
                    </div>
                  )}
                  {cmd.type === 'command' && (
                    <div className="command-line">
                      <span className="prompt">eve@code:~$</span>
                      <span className="command">{cmd.text}</span>
                    </div>
                  )}
                  {cmd.type === 'prompt' && (
                    <div className="command-line">
                      <span className="prompt">{cmd.text}</span>
                    </div>
                  )}
                  {cmd.type === 'output' && cmd.text.includes('YC') && (
                    <div className="output">
                      i design and write software at <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="terminal-link">
                        <img src="/yc.png" alt="YC" className="yc-logo" /> YC
                      </a>
                    </div>
                  )}
                  {cmd.type === 'output' && !cmd.text.includes('YC') && (
                    <div className="output">{cmd.text}</div>
                  )}
                  {cmd.type === 'links' && (
                    <div className="links-output">
                      <a href="https://github.com/evebouf" target="_blank" rel="noopener noreferrer" className="terminal-link">github</a>
                      <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="terminal-link">linkedin</a>
                      <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="terminal-link">twitter</a>
                      <button onClick={copyEmailToClipboard} className="terminal-link email-link">
                        {emailCopied ? 'copied!' : 'email'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Current typing line */}
              {terminalStep < terminalCommands.length && currentCommand && (
                <div className="command-line current">
                  {terminalCommands[terminalStep].type === 'prompt' && (
                    <span className="prompt">{currentCommand}</span>
                  )}
                  {terminalCommands[terminalStep].type === 'command' && (
                    <>
                      <span className="prompt">eve@code:~$</span>
                      <span className="command">{currentCommand}</span>
                    </>
                  )}
                  {showCursor && <span className="terminal-cursor">█</span>}
                </div>
              )}
              
              {/* Final cursor */}
              {terminalStep >= terminalCommands.length && (
                <div className="command-line current">
                  <span className="prompt">eve@code:~$</span>
                  {showCursor && <span className="terminal-cursor">█</span>}
                </div>
              )}
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
