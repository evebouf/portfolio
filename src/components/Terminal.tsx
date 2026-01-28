import React, { useState, useEffect } from 'react';
import './Terminal.scss';

const Terminal: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Array<{type: string, text: string, output?: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const bootSequences = [
    { text: 'Hi...', delay: 600 },
    { text: 'Beep boop boop...', delay: 400 },
    { text: ' [ Verified ]', delay: 400 },
    { text: 'Ready. Set. Go.', delay: 1000 }
  ];

  const availableCommands = [
    { 
      command: 'whoami', 
      description: 'display current user',
      output: 'eve_bouffard'
    },
    { 
      command: 'cat about.txt', 
      description: 'show about information',
      output: 'i design and write software at YC'
    },
    { 
      command: 'ls links/', 
      description: 'list social links',
      output: 'links'
    },
    {
      command: 'help',
      description: 'show available commands',
      output: 'help'
    }
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
    if (phase < bootSequences.length) {
      const timer = setTimeout(() => {
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
                // Boot complete, move to terminal phase
                setPhase(bootSequences.length);
                setIsReady(true);
                // Add initial login message
                setCommandHistory([{type: 'login', text: 'Last login: 09.26.25 on console'}]);
              }
            }, currentSequence.delay);
          }
        }, 80);
        
        return () => clearInterval(typeInterval);
      }, phase === 0 ? 1000 : 1000);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Handle command execution
  const executeCommand = (command: string) => {
    const foundCommand = availableCommands.find(cmd => cmd.command === command);
    
    // Add command to history
    const newHistory = [...commandHistory, {type: 'command', text: command}];
    
    if (foundCommand) {
      if (foundCommand.output === 'help') {
        newHistory.push({
          type: 'output', 
          text: 'Available commands: ' + availableCommands.map(cmd => cmd.command).join(', ')
        });
      } else if (foundCommand.output === 'links') {
        newHistory.push({type: 'links', text: ''});
      } else {
        newHistory.push({type: 'output', text: foundCommand.output});
      }
    } else {
      newHistory.push({type: 'output', text: `Command not found: ${command}`});
    }
    
    setCommandHistory(newHistory);
    setCurrentInput('');
    setShowSuggestions(false);
  };

  // Handle input changes
  const handleInputChange = (value: string) => {
    setCurrentInput(value);
    setShowSuggestions(value.length > 0);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      executeCommand(currentInput.trim());
    }
  };

  // Get filtered suggestions
  const getFilteredSuggestions = () => {
    if (!currentInput) return availableCommands;
    return availableCommands.filter(cmd => 
      cmd.command.toLowerCase().includes(currentInput.toLowerCase())
    );
  };

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
          {phase < bootSequences.length && (
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
          
          {phase >= bootSequences.length && isReady && (
            <div className="main-session">
              {/* Command history */}
              {commandHistory.map((cmd, index) => (
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
                  {cmd.type === 'output' && cmd.text?.includes('YC') && (
                    <div className="output">
                      i design and write software at <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="terminal-link">
                        <img src="/yc.png" alt="YC" className="yc-logo" /> YC
                      </a>
                    </div>
                  )}
                  {cmd.type === 'output' && !cmd.text?.includes('YC') && (
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
              
              {/* Current input line */}
              <div className="command-line current">
                <span className="prompt">eve@code:~$</span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="terminal-input"
                  placeholder="Type 'help' for commands..."
                  autoFocus
                />
                {showCursor && <span className="terminal-cursor">█</span>}
              </div>
              
              {/* Command suggestions */}
              {showSuggestions && currentInput && (
                <div className="suggestions">
                  {getFilteredSuggestions().map((cmd, index) => (
                    <div 
                      key={index} 
                      className="suggestion"
                      onClick={() => executeCommand(cmd.command)}
                    >
                      <span className="suggestion-command">{cmd.command}</span>
                      <span className="suggestion-desc">{cmd.description}</span>
                    </div>
                  ))}
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
