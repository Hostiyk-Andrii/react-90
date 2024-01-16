import { PilotList } from './PilotList';
import pilots from './pilots.json';
import { FaBeer } from 'react-icons/fa';

export const App = () => {
  return (
    <div>
      <h1>
        Top rated pilots <FaBeer  />
      </h1>

      <PilotList pilots={pilots} />
    </div>
  );
};
