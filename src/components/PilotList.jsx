import { Profile } from "./Profile"

export const PilotList = ({ pilots }) => {
      return (
            <ul>
                  {pilots.map(pilot => (<li key={pilot.id}>
                        <Profile imgUrl={pilot.avatar} username={pilot.name} age={pilot.age} email={pilot.email} />
                  </li>))}
            </ul>
      )
}
