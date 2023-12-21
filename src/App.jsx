import styled from 'styled-components';

const Test = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid white;
  border-radius: 8px;
  padding: 50px;
  margin-left: 700px;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    margin-right: 10px;
    &:before {
      content: '🐾'; 
      margin-right: 5px;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const TitleText = styled.span`
  margin-right: 10px; 
`;

function App() {
  return (
    <Test>
      <nav>
        <Ul>
          <li>Ma famille</li>
          <li>Moi même</li>
          <li>Contact</li>
        </Ul>
      </nav>
      <Title>
        <TitleText>Maya</TitleText>
        <img src="src/maya2.png" width="50" height="50" />
      </Title>
      <p>La petite saucisse pleine d'amour et de joie</p>
    </Test>
  );
}

export default App;


