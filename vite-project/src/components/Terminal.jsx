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
    about: `Hi, I'm Devansh Chouhan — a self-taught developer, crypto enthusiast, and content creator. I’m passionate about building web apps, exploring blockchain technologies, and sharing practical insights through my YouTube channel.

My tech stack includes MERN, TailwindCSS, Docker, and Linux-based deployment environments. I enjoy getting my hands dirty with real-world challenges, whether it’s deploying full-stack apps using NGINX and containers or exploring decentralized applications and airdrop strategies.

Currently, I'm diving deeper into frontend engineering, while also documenting my crypto journey — especially around node running, infrastructure tools, and monetization models in the Web3 space.

When I’m not coding or researching crypto trends, you’ll find me involved in yoga, dance, or working on leveling up my communication skills.

Let’s build, break, and innovate together.`,

    projects: `🚀 Featured Projects:

┌────────────────────────────────────────────────────────────────────────────┐
│ 1. P2P USDT to INR Trading Platform                                        │ 
│ Technologies: Node.js, Express, WebSockets, MongoDB                        │
│ Description: Peer-to-peer crypto exchange for USDT ↔ INR with chat         │
│ Status: ✅ Live on GitHub                                                  │
│ GitHub: <a href="https://github.com/dev7nsh/p2p" target="_blank" rel="noopener noreferrer">github.com/dev7nsh/p2p</a>           │
└────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ 2. Email Collector Tool                                                │
│ Technologies: Puppeteer, Node.js, JavaScript                           │
│ Description: Scrapes public websites to extract email addresses        │
│ Status: ✅ Active                                                      │
│ GitHub: <a href="https://github.com/dev7nsh/emailcollecter" target="_blank" rel="noopener noreferrer">github.com/dev7nsh/emailcollecter</a> │
│ Website: <a href="https://emailcollecter.onrender.com/" target="_blank" rel="noopener noreferrer">emailcollecter.onrender.com</a> │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ 3. Secure Auth & Role-based Access System                                  │
│ Technologies: React, Node.js, JWT, MongoDB                                 │ 
│ Description: Auth app with login, signup, and protected role access        │
│ Status: 🔄 In Development                                                  │
│ GitHub: <a href="https://github.com/dev7nsh/auth-app" target="_blank" rel="noopener noreferrer">github.com/dev7nsh/auth-app</a> │
└────────────────────────────────────────────────────────────────────────────┘

Type 'contact' to collaborate or learn more! `,

    skills: `💻 TECHNICAL SKILLS

Programming Languages:
  ▸ Java                  ████████████████      80%
  ▸ C++                   ███████████████       75%
  ▸ SQL                   ██████████████████    85%

Web Technologies & Frameworks:
  ▸ React.js / Next.js    ████████████████████  95%
  ▸ Node.js / Express     ███████████████████   90%
  ▸ HTML/CSS/Tailwind     ████████████████████  100%
  ▸ NGINX / Docker        █████████████████     85%
  ▸ Socket.io / WebSocket       

Blockchain & Web3:
  ▸ Solidity (Basics)     █                     10%
  ▸ Node Setup / RPCs     ███████████████       80%

AI / ML & APIs:
  ▸ OpenAI API / GPT-4    ███████████████████   95%
  ▸ LangChain, Vector DBs ██████████            70%

Cloud & DevOps:
  ▸ Docker / Compose      ███████████████       80%
  ▸ Linux VPS Management  █████████████         75%
  ▸ CI/CD (GitHub Actions)█████████████         80%

Tools & Others:
  ▸ VS Code / Git / GitHub████████████████████  100%
  ▸ Postman / Figma / OBS █████████████         80%
`,

    experience: `
    
        ┌──────────────────────────────────────────────────────────────────────┐
        │ Blockchain Developer Intern                                          │
        │ 2023 – Present                                                       │
        │                                                                      │
        │ • Assisted in the development of a peer-to-peer USDT ↔ INR platform │
        │ • Supported frontend and backend integration with Web3 wallets       │
        │ • Contributed to dashboard tools for node rewards and airdrops       │
        │ • Stack: Node.js, React, Web3.js, MongoDB, Socket.io                 │
        └──────────────────────────────────────────────────────────────────────┘

        ┌────────────────────────────────────────────────────────────────────┐
        │ Blockchain Security Intern – NEAR Foundation                       │
        │ 2020                                                               │
        │                                                                    │
        │ • Helped identify and report a critical bug in the NEAR Protocol   │
        │ • Worked with maintainers to document and communicate the issue    │
        │ • Gained exposure to blockchain protocol testing and reporting     │
        │ • Stack:   GitHub                                                  │
        └────────────────────────────────────────────────────────────────────┘


        ┌────────────────────────────────────────────────────────────────────┐
        │ DevOps & Frontend Developer – Side Projects                        │
        │ 2021 – 2022                                                        │
        │                                                                    │
        │ • Deployed full-stack apps using Docker, NGINX, and VPS            │
        │ • Created a React-based personal portfolio with terminal UI        │
        │ • Managed domains, SSL, and server configurations on Linux         │
        │ • Stack: React, TailwindCSS, Docker, NGINX, Git, Linux             │
        └────────────────────────────────────────────────────────────────────┘
`,

    contact: `📧 Get In Touch:

┌─────────────────────────────────────────────────────────────────┐
│ Email:    <a href="mailto:dev7nsh@email.com">dev7nsh@email.com</a>         │
│                                                                            │
│ LinkedIn: <a href="https://www.linkedin.com/in/devansh-chouhan-795a7a28b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/dev7nsh</a> │
│ GitHub:   <a href="https://github.com/dev7nsh" target="_blank" rel="noopener noreferrer">github.com/dev7nsh</a> │
│ insta:    <a href="https://instagram.com/dev7nsh" target="_blank" rel="noopener noreferrer">@dev7nsh</a> │
│ Website:  <a href="https://chouhan.me" target="_blank" rel="noopener noreferrer">chouhan.me</a> │
└─────────────────────────────────────────────────────────────────┘

📍 Location: India (open to remote work)
🔗 Portfolio: Available upon request
📝 Resume: Download available via email

Let's connect and discuss exciting opportunities!`,

    education: `
    
      ┌────────────────────────────────────────────────────────────────────┐
      │ Bachelor of Computer Applications (BCA)                           │
      │ University of Rajasthan                                           │
      │ 2021 – 2024 (Expected)                                            │
      │ GPA: —                                                            │
      │ Focus: Software Development, Web Technologies, Ethics & Logic     │
      └────────────────────────────────────────────────────────────────────┘
      📚 Relevant Coursework
        • Data Structures & Algorithms
        • Computer Networks
        • Operating Systems
        • Software Engineering
        • Web Development (HTML, CSS, JS)
        • Philosophy & Ethics in Computing
        • DBMS & SQL
`,

    certifications: `🏆 Certifications:

┌────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Verified TensorFlow Developer Certificate (Coursera)                                     │
│    Issued: 2021  •  <a href="https://www.coursera.org/account/accomplishments/verify/GMOCAK32PWOW" target="_blank" rel="noopener noreferrer">[View Certificate 🔗]</a> │
└────────────────────────────────────────────────────────────────────────────────────────────┘

🔄 Currently Pursuing:
  • AWS Certified DevOps Engineer - Professional
  • Google Cloud Professional AI Engineer

📈 Continuous Learning:
  • Coursera: Deep Learning Specialization
  • edX: MIT Introduction to Computational Thinking
  • Udacity: Self-Driving Car Engineer Nanodegree`,

    leadership: `👥 Leadership Experience:

┌────────────────────────────────────────────────────────────────────────┐
│ Head Boy - Student Leadership                                          │
│ School Leadership Role (2022)                                          │
│                                                                        │
│ • Led the student council and served as the primary student liaison    │
│ • Organized and managed major school fests (cultural & technical)      │
│ • Delivered addresses during assemblies and public events              │
│ • Fostered teamwork, discipline, and peer mentorship                   │
└────────────────────────────────────────────────────────────────────────┘


🎯 Leadership Philosophy:
  • Empowering team members to reach their potential
  • Fostering a culture of continuous learning
  • Leading by example through code quality
  • Building inclusive and diverse teams`
  };

  useEffect(() => {
    // Display welcome message on load with typing animation
    const welcomeMessage = `Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`;

    setLines([{ type: 'output', content: '' }]);
    typeText(welcomeMessage, (typed) => {
      setLines([{ type: 'output', content: typed }]);
    });
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

  // Typing animation helper
  const typeText = async (text, cb, speed = 0.1) => {
    let out = '';
    for (let i = 0; i < text.length; i++) {
      out += text[i];
      cb(out + (i % 2 === 0 ? '|' : '')); // blinking cursor effect
      await new Promise(res => setTimeout(res, speed));
    }
    cb(out);
  };

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

    // Helper to animate output
    const typeOutput = (content, type = 'output') => {
      setIsTyping(true);
      const newLines = [...lines, { type, content: '' }];
      setLines(newLines);
      typeText(content, (typed) => {
        setLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { type, content: typed };
          return updated;
        });
      }).then(() => setIsTyping(false));
    };

    switch (cmd) {
      case 'help':
        const helpText = `Available commands:

${Object.entries(commands).map(([cmd, desc]) => 
  `  ${cmd.padEnd(15)} - ${desc}`
).join('\n')}

Type any command to explore my portfolio!`;
        typeOutput(helpText);
        break;

      case 'about':
        typeOutput(portfolioData.about);
        break;

      case 'projects':
        typeOutput(portfolioData.projects);
        break;

      case 'skills':
        typeOutput(portfolioData.skills);
        break;

      case 'experience':
        typeOutput(portfolioData.experience);
        break;

      case 'contact':
        typeOutput(portfolioData.contact);
        break;

      case 'education':
        typeOutput(portfolioData.education);
        break;

      case 'certifications':
        typeOutput(portfolioData.certifications);
        break;

      case 'leadership':
        typeOutput(portfolioData.leadership);
        break;

      case 'sudo':
        typeOutput(
          "Nice try! But you don't have admin privileges here. 😉\nTry 'sudo please' if you want to be polite.",
          'error'
        );
        break;

      case 'sudo please':
        typeOutput(
          "Access granted! Just kidding, there are no hidden commands here.\nBut I appreciate the politeness! 🎉"
        );
        break;

      case 'clear':
        setLines([]);
        setCurrentInput('');
        return;

      case 'welcome':
        typeOutput(
          "Hi, I'm Devansh Chouhan, a Software & AI Engineer.\n\nWelcome to my interactive 'AI powered' portfolio terminal!\nType 'help' to see available commands."
        );
        break;

      case '':
        break;

      default:
        typeOutput(
          `Command '${command}' not found. Type 'help' to see available commands.`,
          'error'
        );
    }

    setCommandHistory((prev) => [...prev, command]);
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
    <div className="overflow-hidden min-h-screen bg-black text-green-400 font-mono text-sm sm:text-base">
      {/* Command suggestions bar */}
      <div className="bg-gray-900 border-b border-green-500 p-2 sm:p-2 text-sm sm:text-base">
        <div className="flex flex-wrap gap-2 sm:gap-0">
          {Object.keys(commands).map(cmd => (
            <button
              key={cmd}
              className="px-2 py-1 sm:px-3 sm:py-1.5 text-green-400 rounded hover:bg-green-800 hover:text-white transition-colors duration-100 text-sm sm:text-base border border-green-600 md:border-none"
              onClick={() => {
                if (!isTyping) executeCommand(cmd);
              }}
              disabled={isTyping}
              tabIndex={0}
              aria-label={`Run ${cmd} command`}
              style={{ minWidth: 0 }}
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="h-[calc(100vh-48px)] sm:h-[calc(100vh-60px)] overflow-y-auto p-4 sm:p-6 cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Terminal header */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <TerminalIcon size={20} />
          <span className="text-green-300 text-sm sm:text-base">Terminal Portfolio v1.0</span>
          <span className="text-gray-500 ml-auto text-[13px] sm:text-base">
            {getTimestamp()}
          </span>
        </div>

        {/* Command history */}
        <div className="space-y-2 sm:space-y-3">
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap ">
              {line.type === 'input' ? (
                <div className="text-green-300">{line.content}</div>
              ) : line.type === 'error' ? (
                <div className="text-red-400">{line.content}</div>
              ) : (
                <div className="text-green-400" dangerouslySetInnerHTML={{ __html: line.content }} />
              )}
            </div>
          ))}
        </div>

        {/* Current input line */}
        <div className="flex items-center mt-4 sm:mt-6">
          <span className="text-green-300 mr-3 text-sm sm:text-base">Dev@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400 text-sm sm:text-base"
            placeholder="Type a command..."
            autoFocus
            disabled={isTyping}
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