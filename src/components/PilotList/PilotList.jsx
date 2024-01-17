import { Profile } from "../Profile/Profile"
import {List} from './PilotList.styled'
export const PilotList = ({ pilots }) => {
      return (
            <List>
                  {pilots.map(pilot => (<List key={pilot.id}>
                        <Profile imgUrl={pilot.avatar} username={pilot.name} age={pilot.age} email={pilot.email} />
                  </List>))}
            </List>
      )
}
