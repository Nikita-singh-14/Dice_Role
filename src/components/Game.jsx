import styled from "styled-components";
import Score from "./Score";
import Number from "./Number";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineButton } from "./Style/Button";
import Rules from "./Rules";
const Game = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currDice, setCurrDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules ] = useState(false);

    const generaterandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber) {
        setError("You have not selected any number");
        return;
    }
    setError("");
    const randomNumber = generaterandomNumber(1,7);

    setCurrDice((prev) => randomNumber);
    
    if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber);
    }else{
        setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  }

  const resetScore = () => {
    setScore(0);
  };

    return (
        <MainContainer>
            <div className="top">
                <Score score={score}/>
                <Number selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
                error={error}
                setError={setError}/>
            </div>
            <Rolldice currDice={currDice} roleDice={roleDice}/>
           <div className="btns">
                    <OutlineButton  onClick={resetScore}>Reset Score</OutlineButton>
                    <Button onClick={() => setShowRules(prev => !prev)} >{showRules ? "Hide ": "Show "}
                    Rules</Button>
            </div>
            {showRules && <Rules/>}
        
        </MainContainer>
        
    )
}
export default Game;

const MainContainer = styled.main`
padding-top: 10px;
    .top{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
`