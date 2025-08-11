import styled from "styled-components"

const Score = ({score}) => {
    return (
        <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>
    )
}

export default Score

const Container = styled.div`
line-height: 5px;
margin-left: 20px;
width: 150px;
    h1{
        font-size: 70px;
    }
    p{
        font-size: 30px;
    }

`