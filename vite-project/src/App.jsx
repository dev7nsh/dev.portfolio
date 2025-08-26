import React, { useState } from 'react';
import Terminal from './components/Terminal.jsx';
import Card from './components/Card3d';
import ProfileInfo from './components/ProfileInfo.jsx';
import { Flower2 } from "lucide-react";     

function App() {
  const [showMobileOverlay, setShowMobileOverlay] = useState(true);

  return (
    <>
      {/* Mobile Overlay */}
      {showMobileOverlay && (
        <div className=" fixed h-screen flex flex-col items-center justify-center bg-black bg-opacity-90 md:hidden">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YWF4NWp0dHVzZTB2em5nNzl0eGh2ZDljcjBsbW0zNWpsbm9obngxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MSemvqMIRY3jMcvpd2/giphy.gif"
            alt="Mobile Experience"
            className="w-32 h-32 mb-6 rounded-lg"
          />
          <h2 className="text-green-400 text-xl font-bold mb-2 text-center">Best viewed on Desktop!</h2>
          <p className="text-gray-300 mb-4 text-center px-4">
            For the full 3D card experience, please visit on a desktop.<br />
            Or, continue here on mobile.
          </p>
          <button
            className="bg-green-500 text-black px-6 py-2 rounded font-bold hover:bg-green-400 transition mb-2"
            onClick={() => setShowMobileOverlay(false)}
          >
            Continue Here
          </button>
        </div>
      )}

      <div className=" border-r  border-green-500  h-screen bg-black flex flex-col md:flex-row overflow-auto md:border-r-0">
        {/* Left Side - Hidden on mobile */}
        <div className="hidden md:flex md:w-2/5 relative overflow-hidden">
          <Card />

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <span className="text-green-400 text-[10px] font-mono">
              [Play with the 3D card!]
            </span>
          </div>

          <div className="absolute  text-left   top-12 left-28 transform -translate-x-1/2">
            <h1 className=" fontt text-3xl font-extrabold text-green-400 mb-2 " >ChouhanDev</h1> 
            <p className="text-gray-400 text-lg ">Software Engineer</p>
          </div>
        </div>

        {/* Right Side - Terminal (visible on all screens) */}
        <div className=" w-full md:w-3/5 border-l border-green-500 overflow-hidden">
          <Terminal />
        </div>
      </div>
    </>
  );
}

export default App;
