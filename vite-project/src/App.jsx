import React from 'react';
import Terminal from './components/Terminal.jsx';
import Card from './components/Card3d';
import ProfileInfo from './components/ProfileInfo.jsx';
import { Flower2 } from "lucide-react";     

function App() {
  return (
    <div className="h-screen bg-black flex flex-col md:flex-row overflow-auto">
      {/* Left Side - Hidden on mobile */}
      <div className="hidden md:flex md:w-2/5 relative overflow-hidden">
        <Card />

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <span className="text-green-400 text-sm font-mono">
            [Play with the 3D card!]
          </span>
        </div>

        <div className="absolute     k top-12 left-36 transform -translate-x-1/2">


       
         <h1 className=" fontt text-4xl font-extrabold text-green-400 mb-2 " >ChouhanDev</h1> 
         
         
          <p className="text-gray-400 text-lg">Software Engineer</p>
         
        </div>
      </div>

      {/* Right Side - Terminal (visible on all screens) */}
      <div className="w-full md:w-3/5 border-l border-green-500 overflow-hidden">
        <Terminal />
      </div>
    </div>
  );
}

export default App;
