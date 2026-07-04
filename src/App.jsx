import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Video from './vide'

function App() {
  const lista = {
    url: "hhas",
    title: "Video jasj",
    description: "jsdjjdsjsdj"
  }


  return(
    <>
    <Video
    video={lista}
    />
    </>
  )
}

export default App
