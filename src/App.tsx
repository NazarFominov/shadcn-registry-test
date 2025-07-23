import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DateBlock } from "./components/DateBlock";

function App() {
  return (
    <div>
      <h1>shadcn Registry Example</h1>
      <DateBlock date={new Date()} />
    </div>
  );
}

export default App
