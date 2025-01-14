import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import InputBox from './components/InputBox'
import ChatBox from './components/ChatBox'

function App() {

  return (
    <>
      <Navbar />
      <div className='w-full flex h-dvh'>
        <div className="w-1/6 bg-gray-800 md:flex flex-col p-4 hidden">
          <h1 className="text-white font-semibold text-xl mb-4">Chat History</h1>
          <div className="flex-1 overflow-y-auto">
            {/* History items will go here */}
          </div>
        </div>
        <div className="md:w-5/6 w-full bg-gray-900">
          <ChatBox/>
        </div>
      </div>
    </>
  )
}

export default App;