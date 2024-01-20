import { MdOutlineEmail, MdManageAccounts } from 'react-icons/md';
import { FaUserNinja } from 'react-icons/fa';
import { Card,Text } from './Profile.styled';

export const Profile = ({ imgUrl, username, email, age }) => {
  return (
    <Card>
      <img src={imgUrl} alt={username} width="120" height="120" />
      <Text>
        <b>
          User name:
          <FaUserNinja />
        </b>
        {username}
      </Text>
      <Text>
        <b>
          Email:
          <MdOutlineEmail />
        </b>
        {email}
      </Text>
      <Text>
        <b>
          Age:
          <MdManageAccounts size="20" />
        </b>
        {age}
      </Text>
    </Card>
  );
};
