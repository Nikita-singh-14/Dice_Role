import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({currDice,roleDice}) => {
  return (
    <Container>
      <div className='dice'
      onClick={roleDice}>
        <img src={`/images/dice${currDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </Container>
  )
}

export default Rolldice

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.dice{
  cursor: pointer;
}
img{
  width: 150px;
  height: 150px;
}
p{
  font-size: 24px;
  font-weight: 600;
}
`;