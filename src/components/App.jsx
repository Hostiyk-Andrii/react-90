<<<<<<< Updated upstream
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template vbh
=======
import { GlobalStyle} from './GlobalStyle';
import { PilotList } from './PilotList/PilotList';
import pilots from './pilots.json';
import styled from 'styled-components';

const TitlePage=styled.h1`
margin-top:0;
margin-bottom:24px;
background-color:orange`
export const App = () => {
  return (
    <div>
      <TitlePage>
        Top rated pilots 
      </TitlePage>

      <PilotList pilots={pilots} />
      <GlobalStyle />
>>>>>>> Stashed changes
    </div>
  );
};
