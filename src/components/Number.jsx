import { useState } from "react";
import styled from "styled-components";

const Number = ({setError,error,selectedNumber, setSelectedNumber}) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6];
    
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

    return (
        <NumberSelector>
            <h2>{error}</h2>
            <div className="flex">
                {arrayNumber.map((value, i) => (
                <Box key={i}
                isSelected = {value === selectedNumber}
                onClick={() => numberSelectorHandler(value)}>{value}</Box>
            ))}
            </div>
            <p>Select Number</p>
        </NumberSelector>
    );
};

export default Number

const NumberSelector = styled.div`

display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
h2{
    color: red;
}
`
const Box = styled.div`
width: 52px;
height: 52px;
border: 1px solid black;
display: grid;
border-radius: 3px;
cursor: pointer;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => props.isSelected ? "white" : "black"};
`