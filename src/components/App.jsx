
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

    </div>
  );
};
