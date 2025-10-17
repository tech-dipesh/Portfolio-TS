import React, { useState, useEffect, useRef, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import './Command.css';

type CommandProps = unknown

const Command: React.FC<CommandProps> = () => {
  // multiple states
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
    { command: 'command', description: 'Go to command page' },
    { command: 'clear', description: 'Clears the terminal screen' },
  ];

  useEffect(() => {
    //this is for focusing the input when command is clicked 4/20/25
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Show welcome message
    setCommandOutput([
      <div key="welcome" className="m-2 text-xl">
        <h3 className="message-text my-2.5 size-2 font-light ">Welcome to Dipesh Command. Pleased to have you here, fellow developer.</h3>
        <h4 className="message-text">
          Type <span className="help-text text-lg font-nomrl  text-green-400">'help'</span> to view a list of available commands.
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
    
    // not necessery but for making more interactive.
    else if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand();
    }
    
    //thsi is not necessery but i have add for more interactivity.
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
      <div key={`input-${commandHistory.length}`} className="flex flex-row items-center py-1.5">
        <span className="text-yelow-400 font-bold mr-2.5">&gt;</span>
        <span className="w-full py-1.5 border-none outline-none bg-transparent text-white font-normal text-base font-mono">{command}</span>
      </div>
    ]);
  };


  // showing all commands
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
    // destructure property.
    setCommandOutput(prev => [...prev, helpOutput]);
  };


  // Not found command
  const displayCommandNotFound = (command: string) => {
    const notFoundOutput = (
      <div key={`not-found-${commandHistory.length}`} className="command-result">
        <span className="command-not-found">{command}</span>
        : command not found. Type 'help' to view a list of available commands. (Dipesh)
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
          //this will redirect to that routes
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
    <div className="terminal-container  cursor-text flex flex-col p-5  text-lightgray h-screen bg-gray-800 font-mono w-full mb-20" onClick={focusInput}>
      <pre className="text-yellow-400 mt-2">
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
      
      <div ref={outputRef} className="command-output-container my-4 m-10 flex-grow overflow-y">
        {commandOutput}
      </div>
      {/* showing what user put */}
      <div className="flex flex-row item-center py-1.5">
        <label htmlFor="command" className="input-label">&gt;</label>
        <input
          ref={inputRef}
          type="text"
          id="command"
          name="command"
          className="w-full py-1.5 border-none outline-none bg-transparent text-white font-normal text-base font-mono input-text"
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