import React, { useState, useEffect, useRef, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import './Command.css';

interface CommandProps {
  // Props can be extended as needed
}

const Command: React.FC<CommandProps> = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [commandOutput, setCommandOutput] = useState<JSX.Element[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  //this is for showin all of the command
  const availableCommands = [
    { command: 'help', description: 'Shows available commands' },
    { command: 'about', description: 'Know about me' },
    { command: 'skills', description: 'What tech stacks I use' },
    { command: 'projects', description: 'Check out my projects' },
    { command: 'contact', description: 'Want to get in touch?' },
    { command: 'opensource', description: 'My open source contributions' },
    { command: 'resume', description: 'View my professional resume' },
    { command: 'gadgets', description: 'Tech tools I use daily' },
    { command: 'blogs', description: 'Read my technical blogs' },
    { command: 'clear', description: 'Clears the terminal screen' },
  ];

  useEffect(() => {
    //this is for focusing the input when command is clicked 4/20/25
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Show welcome message
    setCommandOutput([
      <div key="welcome" className="introduction">
        <h3 className="message-text">Welcome to Dipesh Command. Pleased to have you here, fellow developer.</h3>
        <h4 className="message-text">
          Type <span className="help-text">'help'</span> to view a list of available commands.
        </h4>
      </div>
    ]);
  }, []);

  useEffect(() => {
    // Scroll to bottom when command output changes
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commandOutput]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle Up arrow key for history navigation
    if (e.key === 'ArrowUp' && historyIndex > 0) {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setInputValue(commandHistory[newIndex]);
    }
    
    // Handle Down arrow key for history navigation
    else if (e.key === 'ArrowDown' && historyIndex < commandHistory.length - 1) {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setInputValue(commandHistory[newIndex]);
    }
    
    // Handle Enter key to execute command
    else if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand();
    }
    
    // Handle Ctrl+K or Cmd+K to clear terminal
    else if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      clearTerminal();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addToCommandHistory = (command: string) => {
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(commandHistory.length + 1);
  };

  const displayCommandOutput = (command: string) => {
    setCommandOutput(prev => [
      ...prev,
      <div key={`input-${commandHistory.length}`} className="input-container">
        <span className="input-label">&gt;</span>
        <span className="input-command">{command}</span>
      </div>
    ]);
  };

  const displayHelpSection = () => {
    const helpOutput = (
      <div key={`help-${commandHistory.length}`} className="command-result">
        <dl>
          {availableCommands.map((cmd, index) => (
            <React.Fragment key={index}>
              <dt className="data-dt">{cmd.command}</dt>
              <dd className="data-dd"> - {cmd.description}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    );
    
    setCommandOutput(prev => [...prev, helpOutput]);
  };

  const displayCommandNotFound = (command: string) => {
    const notFoundOutput = (
      <div key={`not-found-${commandHistory.length}`} className="command-result">
        <span className="command-not-found">{command}</span>
        : command not found. Type 'help' to view a list of available commands.
      </div>
    );
    
    setCommandOutput(prev => [...prev, notFoundOutput]);
  };

  const clearTerminal = () => {
    setCommandOutput([]);
  };

  const executeCommand = () => {
    const command = inputValue.trim().toLowerCase();
    
    if (command) {
      displayCommandOutput(command);
      addToCommandHistory(command);
      
      switch (command) {
        case 'help':
          displayHelpSection();
          break;
        case 'clear':
          clearTerminal();
          break;
        case 'about':
        case 'skills':
        case 'projects':
        case 'contact':
        case 'opensource':
        case 'resume':
        case 'gadgets':
        case 'blogs':
          // Redirect to the corresponding route
          navigate(`/${command}`);
          break;
        default:
          displayCommandNotFound(command);
          break;
      }
      
      // Clear input after execution
      setInputValue('');
    }
  };

  return (
    <div className="terminal-container mb-20" onClick={focusInput}>
      <pre className="ascii-name">
{`    ██████  ██ ██████  ███████ ███████ ██   ██                              
    ██   ██ ██ ██   ██ ██      ██      ██   ██                              
    ██   ██ ██ ██████  █████   ███████ ███████                              
    ██   ██ ██ ██      ██           ██ ██   ██                              
    ██████  ██ ██      ███████ ███████ ██   ██                              
                                                                            
    ██████  ██████  ███    ███ ███    ███  █████  ███    ██ ██████          
    ██      ██    ██ ████  ████ ████  ████ ██   ██ ████   ██ ██   ██         
    ██      ██    ██ ██ ████ ██ ██ ████ ██ ███████ ██ ██  ██ ██   ██         
    ██      ██    ██ ██  ██  ██ ██  ██  ██ ██   ██ ██  ██ ██ ██   ██         
    ██████  ██████  ██      ██ ██      ██ ██   ██ ██   ████ ██████          
`}
      </pre>
      
      <div ref={outputRef} className="command-output-container">
        {commandOutput}
      </div>
      
      <div className="input-container">
        <label htmlFor="command" className="input-label">&gt;</label>
        <input
          ref={inputRef}
          type="text"
          id="command"
          name="command"
          className="input-command input-text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Command;