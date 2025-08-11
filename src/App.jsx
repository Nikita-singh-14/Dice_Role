import styled from "styled-components";
import './App.css';
import Home from './components/Home';
import GamePage from './components/Game';
import Rules from './components/Rules';
import { useState } from "react";


function App() {
 const [isGameStarted, setIsGameStarted] = useState(false);
 const [rules, setRules] = useState(false);
 const toggleplay = () => {
  setIsGameStarted((prev) => !prev);
 }
 const toggleRules = () => {
  setRules((prev) => !prev);
 }
  return (
    <>
    {
      isGameStarted ? <GamePage/> : <Home
      toggle = {toggleplay}/>
    }
    
    </>
  )
}

export default App;

