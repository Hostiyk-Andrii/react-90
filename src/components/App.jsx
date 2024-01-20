import { GlobalStyle } from './GlobalStyle';
import { PilotList } from './PilotList/PilotList';
import { TitlePages } from './TitlePage/TitlePage';
import pilots from './pilots.json';

export const App = () => {
  return (
    <div>
      <TitlePages>Hollo bro</TitlePages>

      <PilotList pilots={pilots} />
      <GlobalStyle />
    </div>
  );
};
