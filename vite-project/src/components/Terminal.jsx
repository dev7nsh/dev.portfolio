import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Sun, Moon } from 'lucide-react';

const Terminal = ({ onThemeChange }) => {
  const [lines, setLines] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const typingIdRef = useRef(0);

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
    welcome: 'Show welcome message',
    theme: 'Toggle between dark and light theme'
  };

  // Theme configurations
  const themes = {
    dark: {
      bg: 'bg-[#1e1e1e]',
      text: 'text-[#d4d4d4]',
      accent: 'text-[#569cd6]',
      error: 'text-[#f44747]',
      border: 'border-[#3c3c3c]',
      headerBg: 'bg-[#2d2d30]',
      buttonHover: 'hover:bg-[#094771] hover:text-[#cccccc]',
      buttonBorder: 'border-[#3c3c3c]',
      downloadBtn: 'bg-[#0e639c] hover:bg-[#1177bb] text-white',
      inputCaret: '#569cd6'
    },
    light: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      accent: 'text-blue-600',
      error: 'text-red-600',
      border: 'border-gray-300',
      headerBg: 'bg-gray-200',
      buttonHover: 'hover:bg-blue-100 hover:text-blue-800',
      buttonBorder: 'border-gray-400',
      downloadBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
      inputCaret: '#2563eb'
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  const portfolioData = {
    about: `👋 Hey, I'm Devansh Chouhan.

I'm a self-taught developer who builds things that actually matter.

Currently shipping two personal projects I'm deeply invested in:

  ⚙️  DevOpsBy       — A DevOps consultancy I founded, helping teams
                        tame Kubernetes, automate CI/CD pipelines, and
                        harden cloud infrastructure. Built from scratch,
                        run solo, and growing.

  🥗  FitHit.app     — An AI-powered nutrition tracker I built solo for
                        iOS, Android & Web. Point your camera at food and
                        get instant macro & micronutrient breakdowns.
                        Powered by Gemini API + React Native + Next.js.

─────────────────────────────────────────────────────────

What drives me isn't the tech stack — it's the problem.

I write code because I want things to exist that don't yet.
I automate infrastructure because manual is a liability.
I ship apps because ideas without execution are just thoughts.

I'm obsessed with: shipping fast, learning in public,
and building systems that survive the real world —
not just demo environments.

─────────────────────────────────────────────────────────

Stack I reach for:  React · Next.js · Node.js · TypeScript
                    Kubernetes · Docker · CI/CD · Supabase
                    React Native · Solidity · Linux · Nginx

─────────────────────────────────────────────────────────

💬  Let's build something that solves a real problem.
    Type 'projects' to see what I've shipped.
    Type 'contact'  to reach out.`,

    projects: `<div style="font-family:monospace;"><div style="margin-bottom:12px;font-size:1em;color:#4ade80;">🚀 Featured Projects:</div><div style="display:grid;grid-template-columns:1fr;gap:12px;max-width:600px;"><div class="card-animate card-hover" style="animation-delay:0.1s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#11998e 0%,#38ef7d 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">App</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">FIT</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">FitHit.app</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">AI-powered nutrition tracking app that analyzes food from a photo and provides instant macro and micronutrient breakdown. Built solo for iOS, Android, and Web using React Native, Next.js, and Gemini API.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://fithit.app" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://lnkd.in/gkUvjfg2" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span>Notion</span></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7471066623056060416" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.15s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#00c6ff 0%,#0072ff 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">Cloud</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">OPS</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">DevOpsBy</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">DevOps consultancy focused on Kubernetes, CI/CD, infrastructure automation, cloud optimization, monitoring, security, and Web3 validator infrastructure.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://devopsby.me" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://app.notion.com/p/chouhan/DevopsBY-391d334e18a68048ba09c4486cba893e?source=copy_link" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span>Notion</span></a><a href="https://www.linkedin.com/feed/update/urn:li:activity:7414947296003575808" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.2s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#f12711 0%,#f5af19 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">SIH</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">2025</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">Smart India Hackathon 2025</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">AI and Blockchain-based Deep Fake Detection System developed for Smart India Hackathon 2025 under the Blockchain & Cybersecurity theme.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://developby.me" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://www.linkedin.com/posts/devanshchouhan_sih-smartindiahackthon-activity-7381632569567670272-pU2z" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.25s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#8E2DE2 0%,#4A00E0 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">Web3</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">DAPP</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">Web3 Counter dApp</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">First Solidity smart contract and Web3 dApp featuring wallet integration, on-chain transactions, and a decentralized counter built with React and Thirdweb SDK.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://dapp.chouhan.me" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://lnkd.in/eigawZmc" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span>GitHub</span></a><a href="https://lnkd.in/eKBZppm9" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span>Notion</span></a><a href="https://www.linkedin.com/posts/devanshchouhan_web3-blockchain-solidity-activity-7435303949685059584--6hN" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.3s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#4facfe 0%,#00f2fe 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">K8s</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">VOTE</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">K8s Kind Voting App</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">GitOps-based Kubernetes deployment using Kind, Argo CD, Docker, and AWS EC2 with automated CI/CD pipelines and Kubernetes Dashboard.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://lnkd.in/gF4Xmhfz" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span>GitHub</span></a><a href="https://lnkd.in/gRQDbYEV" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span>Notion</span></a><a href="https://www.linkedin.com/posts/devanshchouhan_kubernetes-devops-argocd-activity-7381594306475864065-B-pB" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.35s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#1d976c 0%,#93f9b9 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">K8s</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">CHAT</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">Kubernetes Full Stack Chat App</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">Three-tier React, Node.js, and MongoDB application deployed on Kubernetes with extensive debugging of deployments, services, labels, networking, and Docker containers.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://lnkd.in/gHJt_UWY" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span>GitHub</span></a><a href="https://www.linkedin.com/posts/devanshchouhan_kubernetes-docker-devops-activity-7380900181996871680-9PI9" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.4s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#e55d87 0%,#5fc3e4 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">Dev</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">MAIL</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">Email Scraper</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">Full-stack React and Node.js application that collects emails, stores them in MongoDB, and provides real-time frontend updates with a clean UI.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://lnkd.in/g4vACWYu" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://www.linkedin.com/posts/devanshchouhan_reactjs-nodejs-mongodb-activity-7346233321263177728-2R6X" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.45s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;border:1px solid rgba(128,128,128,0.2);background:rgba(128,128,128,0.05);"><div style="background:linear-gradient(135deg,#f7971e 0%,#ffd200 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:#fff;font-size:0.85em;font-weight:700;">Hack</span><span style="width:1px;height:20px;background:rgba(255,255,255,0.5);margin:0 6px;display:inline-block;"></span><span style="color:#fff;font-size:1em;font-weight:900;">BOOK</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:4px;">Event Booking Platform</div><div style="color:gray;font-size:0.75em;line-height:1.4;margin-bottom:10px;">Hackathon project that secured 2nd place. Built an event booking platform where users can register for events and receive instant email tickets. Developed using Next.js, TypeScript, Supabase, Nodemailer, and CSS.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://lnkd.in/gRnpvNgv" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live</span></a><a href="https://lnkd.in/gUpxriF2" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span>GitHub</span></a></div></div></div></div><div style="margin-top:14px;color:#888;font-size:0.85em;">Type 'contact' to collaborate or learn more!</div></div>`,

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
        │ Independent Developer & Founder                                      │
        │ Dec 2025 – Present                                                   │
        │                                                                      │
        │ • Architecting and scaling DevOpsBy and FitHit.app personal projects │
        │ • Focused on production-level deployments and real-world solving     │
        │ • Managing full lifecycle from backend systems to UI/UX and CI/CD    │
        │ • Stack: Next.js, React Native, Kubernetes, Supabase, Gemini API     │
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

    leadership: `<div style="font-family:monospace;"><div style="margin-bottom:12px;font-size:1em;color:#4ade80;">👥 Leadership Experience:</div><div style="display:grid;grid-template-columns:1fr;gap:12px;max-width:600px;"><div class="card-animate card-hover" style="animation-delay:0.1s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;"><div style="background:linear-gradient(135deg,#f7971e 0%,#ffd200 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-direction:column;gap:4px;padding:12px;"><span style="color:#fff;font-size:0.75em;font-weight:700;text-align:center;">HACK</span><span style="color:#fff;font-size:0.9em;font-weight:900;text-align:center;">2nd Place</span><span style="color:rgba(255,255,255,0.8);font-size:0.65em;text-align:center;">Team Lead</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:6px;">Hackathon Team Lead — 2nd Place</div><div style="color:gray;font-size:0.75em;line-height:1.5;margin-bottom:10px;">Led a three-member team during the Fullstack Faceoff hackathon, coordinating development, feature planning, and project delivery under tight deadlines. Built an event booking platform with instant email ticket generation using Next.js, TypeScript, Supabase, and Nodemailer.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://www.linkedin.com/posts/devanshchouhan_buildinpublic-fullstackdev-hackathonlife-activity-7446820328166821888-jrre" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>LinkedIn Post</span></a></div></div></div><div class="card-animate card-hover" style="animation-delay:0.15s;display:flex;align-items:stretch;border-radius:12px;overflow:hidden;"><div style="background:linear-gradient(135deg,#f12711 0%,#f5af19 100%);width:220px;display:flex;align-items:center;justify-content:center;flex-shrink:0;flex-direction:column;gap:4px;padding:12px;"><span style="color:#fff;font-size:0.75em;font-weight:700;text-align:center;">SIH</span><span style="color:#fff;font-size:0.9em;font-weight:900;text-align:center;">Top 1%</span><span style="color:rgba(255,255,255,0.8);font-size:0.65em;text-align:center;">Team Lead</span></div><div style="padding:12px 16px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;"><div style="font-size:0.9em;font-weight:bold;margin-bottom:6px;">Smart India Hackathon 2025 Team Leadership</div><div style="color:gray;font-size:0.75em;line-height:1.5;margin-bottom:10px;">Coordinated a multidisciplinary team through ideation, planning, and development for Smart India Hackathon 2025. Guided collaboration, task execution, and technical discussions, helping the team advance to the top 1% nationwide and qualify for the next stage.</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><a href="https://www.linkedin.com/posts/devanshchouhan_sih2025-smartindiahackathon-top1percent-activity-7400197533735686144-Cfwz" target="_blank" rel="noopener noreferrer" class="project-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>LinkedIn Post</span></a></div></div></div></div><div style="margin-top:14px;color:#888;font-size:0.85em;">Type 'contact' to connect or collaborate!</div></div>`
  };

  useEffect(() => {
    // Display welcome message on load with typing animation
    const welcomeMessage = `Welcome to my interactive 'AI powered' portfolio terminal!
Type 'help' to see available commands.`;

    const executionId = ++typingIdRef.current;
    setIsTyping(true);
    setLines([{ type: 'output', content: '' }]);
    typeText(welcomeMessage, (typed) => {
      setLines([{ type: 'output', content: typed }]);
    }, () => executionId !== typingIdRef.current).then(() => {
      if (executionId === typingIdRef.current) setIsTyping(false);
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
  const typeText = async (text, cb, shouldAbort = () => false, speed = 0.1) => {
    let out = '';
    for (let i = 0; i < text.length; i++) {
      if (shouldAbort()) break;
      out += text[i];
      cb(out + (i % 2 === 0 ? '|' : '')); // blinking cursor effect
      await new Promise(res => setTimeout(res, speed));
    }
    if (!shouldAbort()) cb(out);
  };

  const getTimestamp = () => {
    return new Date().toLocaleString();
  };

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    if (onThemeChange) {
      onThemeChange(newTheme);
    }
  };

  const executeCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    
    // Clear previous commands and show only current input
    const baseLines = [{
      type: 'input',
      content: `Dev@portfolio:~$ ${command}`,
      timestamp: getTimestamp()
    }];

    const executionId = ++typingIdRef.current;

    // Helper to animate output
    const typeOutput = (content, type = 'output') => {
      setIsTyping(true);
      const newLines = [...baseLines, { type, content: '' }];
      setLines(newLines);
      typeText(content, (typed) => {
        setLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { type, content: typed };
          return updated;
        });
      }, () => executionId !== typingIdRef.current).then(() => {
        if (executionId === typingIdRef.current) setIsTyping(false);
      });
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

      case 'theme':
        toggleTheme();
        typeOutput(`Theme switched to ${isDarkTheme ? 'light' : 'dark'} mode! 🎨`);
        break;

      case 'about':
        typeOutput(portfolioData.about);
        break;

      case 'projects':
        // Render HTML cards instantly (no char-by-char animation to preserve HTML integrity)
        setIsTyping(false);
        setLines([...baseLines, { type: 'output', content: portfolioData.projects }]);
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
        setIsTyping(false);
        setLines([...baseLines, { type: 'output', content: portfolioData.leadership }]);
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
        setLines(baseLines);
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
    <div className={`overflow-hidden min-h-screen ${currentTheme.bg} ${currentTheme.text} font-mono text-sm sm:text-base`}>
      {/* Command suggestions bar */}
      <div className={`${currentTheme.headerBg} ${currentTheme.border} border-b p-2 sm:p-2 text-sm sm:text-base flex justify-between items-center`}>
        <div className="flex flex-wrap gap-2 sm:gap-0 flex-1">
          {Object.keys(commands).slice(0, -1).map(cmd => (
            <button
              key={cmd}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 ${currentTheme.text} rounded ${currentTheme.buttonHover} transition-colors duration-100 text-sm sm:text-base border ${currentTheme.buttonBorder} md:border-none`}
              onClick={() => {
                executeCommand(cmd);
              }}
              tabIndex={0}
              aria-label={`Run ${cmd} command`}
              style={{ minWidth: 0 }}
            >
              {cmd}
            </button>
          ))}
        </div>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-4 p-2 rounded-full ${currentTheme.buttonHover} transition-colors duration-200 border ${currentTheme.buttonBorder}`}
          aria-label="Toggle theme"
        >
          {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
        </button>
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
          <span className={`${currentTheme.accent} text-sm sm:text-base`}>Terminal Portfolio v1.0</span>
          <span className="text-gray-500 ml-auto text-[13px] sm:text-base">
            {getTimestamp()}
          </span>
        </div>

        {/* Command history */}
        <div className="space-y-2 sm:space-y-3">
          {lines.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap ">
              {line.type === 'input' ? (
                <div className={currentTheme.accent}>{line.content}</div>
              ) : line.type === 'error' ? (
                <div className={currentTheme.error}>{line.content}</div>
              ) : (
                <div className={currentTheme.text} dangerouslySetInnerHTML={{ __html: line.content }} />
              )}
            </div>
          ))}
        </div>

        {/* Current input line */}
        <div className="flex items-center mt-4 sm:mt-6">
          <span className={`${currentTheme.accent} mr-3 text-sm sm:text-base`}>Dev@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 bg-transparent border-none outline-none ${currentTheme.text} text-sm sm:text-base`}
            placeholder="Type a command..."
            autoFocus
            style={{ 
              caretColor: currentTheme.inputCaret
            }}
          />
        </div>
      </div>

      {/* Download CV Button at bottom left (desktop only) */}
      <a
        href="devanshchouhan.pdf"
        download
        className={`hidden md:inline fixed bottom-4 left-4 z-50 ${currentTheme.downloadBtn} font-bold py-2 px-4 rounded shadow transition-colors`}
        style={{ textDecoration: "none" }}
      >
        Download CV
      </a>

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