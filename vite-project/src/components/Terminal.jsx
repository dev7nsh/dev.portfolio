import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
  const [lines, setLines] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: 'Display available commands',
    about: 'Learn about me',
    projects: 'View my projects',
    skills: 'See my technical skills',
    experience: 'View my work experience',
    contact: 'Get my contact information',
    education: 'View my education background',
    certifications: 'See my certifications',
    leadership: 'View leadership experience',
    sudo: 'Execute with admin privileges',
    clear: 'Clear the terminal',
    welcome: 'Show welcome message'
  };

  const portfolioData = {
    about: `Hi, I'm Devansh Chouhan, a Software & AI Engineer.


    

My journey in tech spans multiple domains, from full-stack development to 
machine learning implementations. I believe in writing clean, maintainable 
code and designing scalable architectures that stand the test of time.

When I'm not coding, you can find me exploring the latest developments in AI, 
contributing to open-source projects, or mentoring aspiring developers.`,

    projects: `🚀 Featured Projects:

┌─────────────────────────────────────────────────────────────────┐
│ 1. AI-Powered Portfolio Terminal                                │
│    Technologies: React, JavaScript, AI Integration             │
│    Description: Interactive terminal interface with AI         │
│    Status: ✅ Active                                           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 2. Smart Task Management System                                 │
│    Technologies: Node.js, MongoDB, React                       │
│    Description: AI-enhanced productivity platform              │
│    Status: 🔄 In Development                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 3. Real-time Data Analytics Dashboard                           │
│    Technologies: Python, FastAPI, PostgreSQL                   │
│    Description: Enterprise-grade analytics solution            │
│    Status: ✅ Deployed                                         │
└─────────────────────────────────────────────────────────────────┘

Type 'contact' to get in touch about collaborations!`,

    skills: `💻 Technical Skills:

Programming Languages:
  ▸ JavaScript/ES6+        ████████████████████ 95%
  ▸ Python                ████████████████████ 90%
  ▸ Java                  ████████████████     80%
  ▸ C++                   ████████████████     75%
  ▸ SQL                   ████████████████████ 85%

Web Technologies:
  ▸ React/Next.js         ████████████████████ 95%
  ▸ Node.js/Express       ████████████████████ 90%
  ▸ HTML/CSS              ████████████████████ 100%
  ▸ GraphQL               ████████████████     80%

AI/ML:
  ▸ TensorFlow/PyTorch    ████████████████     85%
  ▸ Scikit-learn          ████████████████████ 90%
  ▸ OpenAI API            ████████████████████ 95%
  ▸ Computer Vision       ████████████████     75%

Cloud & DevOps:
  ▸ AWS/Azure             ████████████████     80%
  ▸ Docker/Kubernetes     ████████████████     75%
  ▸ CI/CD                 ████████████████████ 85%`,

    experience: `💼 Professional Experience:

┌─────────────────────────────────────────────────────────────────┐
│ Senior Software Engineer @ TechCorp                            │
│ 2022 - Present                                                 │
│                                                                 │
│ • Led development of AI-powered customer service platform      │
│ • Reduced response time by 60% through optimization            │
│ • Mentored 5 junior developers                                 │
│ • Technologies: React, Node.js, Python, AWS                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ Full Stack Developer @ StartupXYZ                              │
│ 2020 - 2022                                                    │
│                                                                 │
│ • Built scalable web applications from scratch                 │
│ • Implemented real-time features using WebSockets              │
│ • Improved application performance by 40%                      │
│ • Technologies: Vue.js, Express, MongoDB, Docker              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ Software Developer @ InnovateLabs                              │
│ 2018 - 2020                                                    │
│                                                                 │
│ • Developed mobile applications for iOS and Android            │
│ • Created automated testing frameworks                         │
│ • Collaborated with design teams on UX improvements            │
│ • Technologies: React Native, Jest, Firebase                   │
└─────────────────────────────────────────────────────────────────┘`,

    contact: `📧 Get In Touch:

┌─────────────────────────────────────────────────────────────────┐
│ Email:    mark.gatere@email.com                                │
│ Phone:    +1 (555) 123-4567                                    │
│ LinkedIn: linkedin.com/in/markgatere                           │
│ GitHub:   github.com/markgatere                                │
│ Twitter:  @markgatere                                          │
│ Website:  markgatere.dev                                       │
└─────────────────────────────────────────────────────────────────┘

📍 Location: San Francisco, CA (Open to remote work)
🔗 Portfolio: Available upon request
📝 Resume: Download available via email

Let's connect and discuss exciting opportunities!`,

    education: `🎓 Education:

┌─────────────────────────────────────────────────────────────────┐
│ Master of Science in Computer Science                          │
│ Stanford University                                             │
│ 2016 - 2018                                                    │
│ GPA: 3.8/4.0                                                   │
│ Specialization: Artificial Intelligence                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ Bachelor of Science in Software Engineering                    │
│ University of California, Berkeley                             │
│ 2012 - 2016                                                    │
│ GPA: 3.7/4.0                                                   │
│ Magna Cum Laude                                                │
└─────────────────────────────────────────────────────────────────┘

📚 Relevant Coursework:
  • Machine Learning & Deep Learning
  • Distributed Systems
  • Software Architecture
  • Data Structures & Algorithms
  • Database Systems`,

    certifications: `🏆 Certifications:

✅ AWS Certified Solutions Architect - Professional (2023)
✅ Google Cloud Professional Developer (2023)
✅ Microsoft Azure AI Engineer Associate (2022)
✅ Certified Kubernetes Administrator (CKA) (2022)
✅ TensorFlow Developer Certificate (2021)
✅ Oracle Java SE 11 Developer (2021)
✅ Scrum Master Certified (SMC) (2020)

🔄 Currently Pursuing:
  • AWS Certified DevOps Engineer - Professional
  • Google Cloud Professional AI Engineer

📈 Continuous Learning:
  • Coursera: Deep Learning Specialization
  • edX: MIT Introduction to Computational Thinking
  • Udacity: Self-Driving Car Engineer Nanodegree`,

    leadership: `👥 Leadership Experience:

┌─────────────────────────────────────────────────────────────────┐
│ Tech Lead - AI Innovation Team                                  │
│ TechCorp (2023 - Present)                                       │
│                                                                 │
│ • Leading a team of 8 engineers                                 │
│ • Architecting AI solutions for enterprise clients              │
│ • Established coding standards and best practices               │
│ • Implemented agile methodologies                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ Open Source Maintainer                                          │
│ Various Projects (2020 - Present)                               │
│                                                                 │
│ • Maintained 3 popular npm packages (50k+ downloads)            │
│ • Mentored 20+ contributors                                     │
│ • Organized virtual hackathons                                  │
│ • Code review and community management                          │
└─────────────────────────────────────────────────────────────────┘

🎯 Leadership Philosophy:
  • Empowering team members to reach their potential
  • Fostering a culture of continuous learning
  • Leading by example through code quality
  • Building inclusive and diverse teams`
  };

  useEffect(() => {
    // Display welcome message on load
    const welcomeMessage = `Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`;
    
    setLines([
      { type: 'output', content: welcomeMessage }
    ]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new lines are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const getTimestamp = () => {
    return new Date().toLocaleString();
  };

  const executeCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const newLines = [...lines];
    
    // Add the command to history
    newLines.push({
      type: 'input',
      content: `Dev@portfolio:~$ ${command}`,
      timestamp: getTimestamp()
    });

    // Execute the command
    switch (cmd) {
      case 'help':
        const helpText = `Available commands:

${Object.entries(commands).map(([cmd, desc]) => 
  `  ${cmd.padEnd(15)} - ${desc}`
).join('\n')}

Type any command to explore my portfolio!`;
        newLines.push({ type: 'output', content: helpText });
        break;

      case 'about':
        newLines.push({ type: 'output', content: portfolioData.about });
        break;

      case 'projects':
        newLines.push({ type: 'output', content: portfolioData.projects });
        break;

      case 'skills':
        newLines.push({ type: 'output', content: portfolioData.skills });
        break;

      case 'experience':
        newLines.push({ type: 'output', content: portfolioData.experience });
        break;

      case 'contact':
        newLines.push({ type: 'output', content: portfolioData.contact });
        break;

      case 'education':
        newLines.push({ type: 'output', content: portfolioData.education });
        break;

      case 'certifications':
        newLines.push({ type: 'output', content: portfolioData.certifications });
        break;

      case 'leadership':
        newLines.push({ type: 'output', content: portfolioData.leadership });
        break;

      case 'sudo':
        newLines.push({ 
          type: 'error', 
          content: 'Nice try! But you don\'t have admin privileges here. 😉\nTry \'sudo please\' if you want to be polite.' 
        });
        break;

      case 'sudo please':
        newLines.push({ 
          type: 'output', 
          content: 'Access granted! Just kidding, there are no hidden commands here.\nBut I appreciate the politeness! 🎉' 
        });
        break;

      case 'clear':
        setLines([]);
        setCurrentInput('');
        return;

      case 'welcome':
        newLines.push({ 
          type: 'output', 
          content: "Hi, I'm Devansh Chouhan, a Software & AI Engineer.\n\nWelcome to my interactive 'AI powered' portfolio terminal!\nType 'help' to see available commands." 
        });
        break;

      case '':
        break;

      default:
        newLines.push({ 
          type: 'error', 
          content: `Command '${command}' not found. Type 'help' to see available commands.` 
        });
    }

    setLines(newLines);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matchingCommands = Object.keys(commands).filter(cmd => 
        cmd.startsWith(currentInput.toLowerCase())
      );
      if (matchingCommands.length === 1) {
        setCurrentInput(matchingCommands[0]);
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Command suggestions bar */}
      <div className="bg-gray-900 border-b border-green-500 p-2 text-sm">
        <div className="flex flex-wrap gap-2">
          {Object.keys(commands).map(cmd => (
            <span
              key={cmd}
              className="px-2 py-1 text-green-400"
            >
              {cmd}
            </span>
          ))}
        </div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="h-[calc(100vh-60px)] overflow-y-auto p-4 cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Terminal header */}
        <div className="mb-4 flex items-center gap-2">
          <TerminalIcon size={20} />
          <span className="text-green-300">Terminal Portfolio v1.0</span>
          <span className="text-gray-500 ml-auto text-sm">
            {getTimestamp()}
          </span>
        </div>

        {/* Command history */}
        <div className="space-y-2">
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line.type === 'input' ? (
                <div className="text-green-300">{line.content}</div>
              ) : line.type === 'error' ? (
                <div className="text-red-400">{line.content}</div>
              ) : (
                <div className="text-green-400">{line.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Current input line */}
        <div className="flex items-center mt-4">
          <span className="text-green-300 mr-2">Dev@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
      </div>

      {/* Cursor blink animation */}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Terminal;