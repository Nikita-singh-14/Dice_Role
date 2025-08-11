import styled from 'styled-components';
import { Button } from './Style/Button';
const Home = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dice.png" alt="" />
        </div>
        <div className='right'>
            <h1 >DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh ;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .right h1{
    font-size: 3rem;
    white-space: nowrap;
  }
`;
