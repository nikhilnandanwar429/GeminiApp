import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import InputBox from './components/InputBox'
import ChatBox from './components/ChatBox'

function App() {
  const [prompt, setPrompt] = useState('')

  const promptSubmit = () => {
    setPrompt('')
  }
  const check = (e) => {

    if ((e.code === "Enter" || e.code === "NumpadEnter") && !e.shiftKey) {
      console.log("Enter pressed", e);
      promptSubmit(e);
    }

  }

  return (
    <>
      <Navbar />
      <div className='w-full h-full flex '>
        <div className="w-1/6 h-dvh  bg-[#4e4b52] md:flex justify-center hidden">
          <h1>History</h1>
        </div>
        <div className="md:w-5/6 w-full h-dvh  bg-[#373544] flex flex-col items-center justify-end">
          <ChatBox/>
          {/* <InputBox /> */}
        </div>
      </div >
    </>
  )
}

export default App;