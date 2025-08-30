import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/common/Footer' 

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-center py-20">
        <h1 className="text-3xl font-bold">Welcome to My Amazon Clone</h1>
        <p>This is some content above the footer.</p>
      </div>
      <Footer />
    </>
  );
}


export default App
